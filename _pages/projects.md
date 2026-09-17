---
layout: page
title: projects
permalink: /projects/
description: Research projects in quantum cybersecurity, post-quantum cryptography, quantum computing, and AI for quantum systems.
nav: true
nav_order: 3
display_categories: [featured, research, ai]
horizontal: false
---

## Selected Research Projects

<div class="row mt-3">

    <!-- Post-Quantum TLS -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">Intelligent Post-Quantum TLS Policy Selection</h5>
                <p class="card-text">
                    <small class="text-muted">IEEE GLOBECOM 2026 · Accepted</small>
                </p>
                <p class="card-text">
                    A security-constrained offline reinforcement learning framework for selecting post-quantum TLS policies under heterogeneous network conditions, evaluated across 12,000 handshakes.
                </p>
                <span class="badge badge-primary">Post-Quantum Cryptography</span>
                <span class="badge badge-secondary">Offline RL</span>
            </div>
        </div>
    </div>

    <!-- Interpretable VQA -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">Interpretable Modeling of Variational Quantum Algorithms</h5>
                <p class="card-text">
                    <small class="text-muted">Quantum Machine Intelligence · Under Review</small>
                </p>
                <p class="card-text">
                    Hamiltonian- and circuit-aware machine learning for predicting the performance of VQE, QAOA, and ADAPT-VQE before costly optimization, evaluated on 1,242 noisy circuit instances.
                </p>
                <a href="https://github.com/shawmoonazad/Interpretable-VQA"
                   class="btn btn-sm btn-outline-primary">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    </div>

    <!-- QNN Knowledge Distillation -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="/projects/qnn_kd/">Efficient QNNs via Knowledge Distillation</a>
                </h5>
                <p class="card-text">
                    <small class="text-muted">Quantum Machine Learning Project</small>
                </p>
                <p class="card-text">
                    Classical-to-quantum knowledge distillation for training compact 4-qubit and 8-qubit quantum neural networks. The 4-qubit student achieved 86.10% accuracy, compared with a 65.74% baseline.
                </p>
                <a href="https://github.com/shawmoonazad/Parameter-Efficient-Quantum-Neural-Networks-via-Knowledge-Distillation.git"
                   class="btn btn-sm btn-outline-primary">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    </div>

    <!-- Quantum-Secure Image Transmission -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="/projects/chaos_qkd/">Quantum-Secure Image Transmission</a>
                </h5>
                <p class="card-text">
                    <small class="text-muted">IET Quantum Communication · 2025</small>
                </p>
                <p class="card-text">
                    An entanglement-based E91 QKD framework integrating CHSH eavesdropping detection, chaotic key generation, and image encryption for quantum-secure communication.
                </p>
                <a href="https://github.com/shawmoonazad/Chaos-Assisted-Quantum-Key-Distribution-Approach-Using-Entanglement.git"
                   class="btn btn-sm btn-outline-primary">
                    <i class="fab fa-github"></i> Code
                </a>
                <a href="https://doi.org/10.1049/qtc2.70016"
                   class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-file-alt"></i> Paper
                </a>
            </div>
        </div>
    </div>

    <!-- QuCloud -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="/projects/qucloud/">QuCloud: Quantum-Safe Cloud Storage</a>
                </h5>
                <p class="card-text">
                    <small class="text-muted">Journal of Information Security and Applications · 2026</small>
                </p>
                <p class="card-text">
                    A multilayer cloud-storage security framework combining quantum key distribution, post-quantum cryptography, and custom proxy re-encryption.
                </p>
                <a href="https://doi.org/10.1016/j.jisa.2026.104449"
                   class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-file-alt"></i> Paper
                </a>
            </div>
        </div>
    </div>

    <!-- Hybrid Security -->
    <div class="col-md-6 mb-4">
        <div class="card h-100" style="border-left: 4px solid var(--global-theme-color);">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="/projects/hybrid_security/">Hybrid Quantum-Classical Security</a>
                </h5>
                <p class="card-text">
                    <small class="text-muted">Alexandria Engineering Journal · 2025</small>
                </p>
                <p class="card-text">
                    A multilayer secure-communication framework integrating quantum key distribution, AES-256 encryption, cryptographic hashing, and deep-learning-based steganography.
                </p>
                <a href="https://doi.org/10.1016/j.aej.2025.02.056"
                   class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-file-alt"></i> Paper
                </a>
            </div>
        </div>
    </div>

</div>

---

## More Projects

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    <a id="{{ category }}" href="#{{ category }}">
      <h2 class="category">{{ category | capitalize }}</h2>
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
