---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed publications and manuscripts in quantum information science, quantum-safe security, and applied AI.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<style>
.pub-section-header {
  margin: 2rem 0 1.5rem 0;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, var(--global-theme-color) 0%, var(--global-theme-color-dark, #1a1a1a) 100%);
  color: white;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.pub-section-header i {
  margin-right: 0.75rem;
}

.pub-count {
  float: right;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.9;
  background: rgba(255,255,255,0.15);
  padding: 0.2rem 0.75rem;
  border-radius: 1rem;
}

.pub-divider {
  margin: 3rem 0;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--global-theme-color), transparent);
}
</style>

<section class="section-intro publications-intro">
  <p class="eyebrow">Peer-reviewed output</p>
  <h2>Published work across quantum-safe communication, QKD, applied AI, and behavioral analytics.</h2>
  <p>Publication previews are zoomable; select an image to inspect the system diagram or experimental workflow.</p>
</section>

<div class="pub-section-header">
  <i class="fas fa-check-circle"></i>Published Papers
  <span class="pub-count">6 papers</span>
</div>

<div class="publications">

{% bibliography --query @* %}

</div>
