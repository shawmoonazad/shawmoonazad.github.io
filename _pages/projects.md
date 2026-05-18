---
layout: page
title: projects
permalink: /projects/
description: Portfolio of quantum algorithms, quantum-safe security, and applied AI research systems.
nav: true
nav_order: 3
display_categories: [featured, research, ai]
horizontal: false
---

## Featured Research

<div class="row mt-3">
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/qnn_kd/">Efficient QNNs via Knowledge Distillation</a></h5>
                <p class="card-text"><small class="text-muted">NISQ Quantum ML</small></p>
                <p class="card-text">Teacher-student quantum learning with <strong>16x parameter reduction</strong> and 86.10% accuracy for near-term quantum devices.</p>
                <a href="https://github.com/shawmoonazad/Parameter-Efficient-Quantum-Neural-Networks-via-Knowledge-Distillation.git" class="btn btn-sm btn-outline-primary"><i class="fab fa-github"></i> Code</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/chaos_qkd/">Quantum-Secure Image Transmission</a></h5>
                <p class="card-text"><small class="text-muted">IET Quantum Communication 2025</small></p>
                <p class="card-text">E91 QKD, entanglement, CHSH testing, and chaos-assisted encryption for quantum-safe image transmission.</p>
                <a href="https://github.com/shawmoonazad/Chaos-Assisted-Quantum-Key-Distribution-Approach-Using-Entanglement.git" class="btn btn-sm btn-outline-primary"><i class="fab fa-github"></i> Code</a>
                <a href="https://doi.org/10.1049/qtc2.70016" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/hybrid_security/">Hybrid Quantum-Classical Security</a></h5>
                <p class="card-text"><small class="text-muted">Alexandria Engineering Journal 2025</small></p>
                <p class="card-text">QKD, AES-256, hashing, and CNN steganography for multilayered secure communication.</p>
                <a href="https://doi.org/10.1016/j.aej.2025.02.056" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Paper</a>
            </div>
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title"><a href="/projects/qucloud/">QuCloud</a></h5>
                <p class="card-text"><small class="text-muted">JISA 2026</small></p>
                <p class="card-text">Cloud storage security combining QKD, post-quantum cryptography, and custom proxy re-encryption.</p>
                <a href="https://doi.org/10.1016/j.jisa.2026.104449" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-alt"></i> Paper</a>
            </div>
        </div>
    </div>
</div>

---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endfor %}
{% endif %}
</div>
