#!/usr/bin/env bash
# ==============================================
# Simple Git Deploy Script for Portfolio
# ==============================================

# Go to the script's directory
cd "$(dirname "$0")"

# Add all changes
git add .

# Commit with timestamp
git commit -m "Deploy update on $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit."

# Push to GitHub main branch
git push origin main

echo "✅ Portfolio deployed successfully! Check your site at:"
echo "👉 https://shawmoonazad.github.io/"
