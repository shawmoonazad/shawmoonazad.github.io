---
layout: page
title: Efficient Quantum Neural Networks via Knowledge Distillation
description: 16x model compression for NISQ devices with 86.10% accuracy.
img: /assets/img/qnn_methodology.png
importance: 1
category: featured
related_publications: false
---

## NISQ-Era Quantum Machine Learning

This project develops a teacher-student quantum learning workflow for resource-constrained quantum devices. A classical teacher transfers softened knowledge to a compact 4-qubit hybrid quantum neural network, reducing trainable parameters while preserving strong classification performance.

<div class="project-figure-grid">
  <div class="project-figure">
    {% include figure.liquid path="/assets/img/qnn_methodology.png" sizes="(min-width: 930px) 420px, 95vw" zoomable=true alt="Knowledge distillation methodology for efficient quantum neural networks" caption="Knowledge distillation pipeline: a classical teacher guides a compact hybrid quantum student through soft targets, hard targets, and KL divergence." %}
  </div>
  <div class="project-figure">
    {% include figure.liquid path="/assets/img/qnn_hqnn_student.png" sizes="(min-width: 930px) 420px, 95vw" zoomable=true alt="Hybrid quantum neural network student architecture" caption="Student architecture: classical feature extraction maps into a 4-qubit parameterized quantum circuit before final classification." %}
  </div>
</div>

### Highlights

- Achieved **16x parameter reduction** with 86.10% accuracy.
- Built with IBM Qiskit, PyTorch, parameterized quantum circuits, and custom gradient-based optimization.
- Targets deployment scenarios where coherence time, qubit count, and circuit depth limit near-term quantum models.
- Kept as an active project page while the manuscript is being prepared for submission.

### Links

- **Code**: [GitHub Repository](https://github.com/shawmoonazad/Parameter-Efficient-Quantum-Neural-Networks-via-Knowledge-Distillation.git)
