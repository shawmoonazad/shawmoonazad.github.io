#!/usr/bin/env bash
# ==============================================
# Smart Git Deploy for Portfolio (GitHub Pages)
# - Initializes repo if missing
# - Ensures branch 'main'
# - Ensures remote 'origin' -> shawmoonazad.github.io
# - Commits only when there are real changes
# - Optional --force to overwrite remote
# ==============================================

set -e

REPO_URL="https://github.com/shawmoonazad/shawmoonazad.github.io.git"
BRANCH="main"
FORCE_PUSH=0
if [[ "$1" == "--force" || "$1" == "-f" ]]; then
  FORCE_PUSH=1
fi

cd "$(dirname "$0")"

echo "🔎 Checking repository state..."

# 1) Initialize git if needed
if [[ ! -d .git ]]; then
  echo "🆕 No .git folder found — initializing repository..."
  git init
  git branch -M "$BRANCH"
  git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"
  # Try to pull existing history; ignore if empty/new
  git pull origin "$BRANCH" --allow-unrelated-histories || true
fi

# 2) Ensure user identity is set (global or local)
NAME="$(git config user.name || true)"
EMAIL="$(git config user.email || true)"
if [[ -z "$NAME" || -z "$EMAIL" ]]; then
  echo "⚠️  Git user.name or user.email not set."
  echo "   Set them once (recommended):"
  echo "   git config --global user.name \"Shawmoon Azad\""
  echo "   git config --global user.email \"<your_github_email>@example.com\""
  echo "   Continuing anyway..."
fi

# 3) Ensure we’re on the main branch
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "$BRANCH" ]]; then
  echo "🌿 Switching to branch '$BRANCH'..."
  git checkout -B "$BRANCH"
fi

# 4) Ensure remote is correct
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "🔗 Setting remote 'origin' -> $REPO_URL"
  git remote add origin "$REPO_URL"
else
  # Keep URL correct
  git remote set-url origin "$REPO_URL"
fi

# 5) Stage changes
echo "🧹 Staging changes..."
git add -A

# 6) Commit only if there are changes
if git diff --cached --quiet; then
  echo "✅ Nothing to commit — working tree is clean."
else
  TS="$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
  git commit -m "Deploy: $TS"
fi

# 7) Push
echo "📤 Pushing to GitHub ($BRANCH)..."
if [[ $FORCE_PUSH -eq 1 ]]; then
  git push origin "$BRANCH" --force
else
  # If remote is ahead, try to merge then push
  if ! git push origin "$BRANCH"; then
    echo "🔁 Remote ahead — pulling and retrying push..."
    git pull origin "$BRANCH" --allow-unrelated-histories --no-edit || true
    git push origin "$BRANCH"
  fi
fi

echo "🎉 Live update complete! Visit:"
echo "👉 https://shawmoonazad.github.io/"
