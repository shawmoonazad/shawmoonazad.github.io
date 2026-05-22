---
layout: page
title: people
permalink: /people/
description: Advisors, labs, collaborators, and mentorship groups.
nav: true
nav_order: 6
---

Research is collaborative by nature. This page highlights the supervisors, collaborators, mentees, and research communities connected to my work in quantum security, quantum computing, and applied AI.

<style>
.people-intro {
  border-left: 4px solid var(--global-theme-color);
  padding: 1rem 1.25rem;
  margin: 1.25rem 0 2rem;
  background: color-mix(in srgb, var(--global-theme-color) 8%, transparent);
}

.people-section-title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 2.5rem 0 1.25rem;
  color: var(--global-theme-color);
  font-size: 1.45rem;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.people-card,
.people-info-card {
  height: 100%;
  border: 1px solid var(--global-divider-color);
  border-left: 4px solid var(--global-theme-color);
  border-radius: 0.5rem;
  background: var(--global-card-bg-color);
  padding: 1.25rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.people-card:hover,
.people-info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.12);
}

.people-card-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.people-photo,
.people-initials {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  flex: 0 0 92px;
  object-fit: cover;
  border: 3px solid color-mix(in srgb, var(--global-theme-color) 28%, transparent);
  background: color-mix(in srgb, var(--global-theme-color) 10%, var(--global-card-bg-color));
}

.people-initials {
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--global-theme-color);
  font-weight: 700;
  font-size: 1.4rem;
}

.people-initials.is-visible {
  display: flex;
}

.people-name {
  margin: 0;
  font-size: 1.12rem;
}

.people-position {
  margin: 0.3rem 0 0;
  color: var(--global-text-color-light);
  line-height: 1.35;
}

.people-meta {
  margin: 0.75rem 0;
  line-height: 1.55;
}

.people-note {
  margin-bottom: 0;
  color: var(--global-text-color-light);
}

.people-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.9rem 0;
}

.people-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid var(--global-theme-color);
  border-radius: 0.35rem;
  padding: 0.25rem 0.55rem;
  font-size: 0.86rem;
  color: var(--global-theme-color);
  text-decoration: none;
}

.people-links a:hover {
  background: var(--global-theme-color);
  color: var(--global-hover-text-color);
}

.people-info-card h3 {
  margin-top: 0;
  font-size: 1.05rem;
}

.people-tag {
  display: inline-block;
  margin-bottom: 0.65rem;
  color: var(--global-theme-color);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

@media (max-width: 576px) {
  .people-card-header {
    align-items: flex-start;
  }

  .people-photo,
  .people-initials {
    width: 72px;
    height: 72px;
    flex-basis: 72px;
  }
}
</style>

<div class="people-intro">
  My research network spans quantum-safe communication, quantum computing, AI, cybersecurity, and applied machine learning. I am grateful for the supervision, collaboration, and mentoring relationships behind these projects.
</div>

<h2 class="people-section-title"><i class="fa-solid fa-chalkboard-user"></i> Research Advisors &amp; Supervisors</h2>

<div class="people-grid">
  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="{{ '/assets/img/supervisors/mahdy_chowdhury.jpg' | relative_url }}" alt="Prof. Mahdy Rahman Chowdhury" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">MC</div>
      <div>
        <h3 class="people-name">Prof. Mahdy Rahman Chowdhury</h3>
        <p class="people-position">Professor, North South University; Founding Director, NSU Center of Quantum Computing</p>
      </div>
    </div>
    <div class="people-links">
      <a href="mailto:mahdy.chowdhury@northsouth.edu"><i class="fa-solid fa-envelope"></i> Email</a>
      <a href="https://scholar.google.com/citations?user=PxNOguMAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://sites.google.com/view/nsu-center-quantum-computing/home"><i class="fa-solid fa-link"></i> NCQC</a>
    </div>
    <p class="people-meta"><strong>Role:</strong> Research Advisor &amp; Supervisor<br><strong>Research:</strong> Quantum communication, quantum computing, photonics, applied machine learning</p>
    <p class="people-note">Supervised my QKD, quantum cryptography, and hybrid quantum-classical security research at North South University.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="{{ '/assets/img/supervisors/sifat_momen.jpg' | relative_url }}" alt="Prof. Sifat Momen" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">SM</div>
      <div>
        <h3 class="people-name">Prof. Sifat Momen</h3>
        <p class="people-position">Professor, Department of Electrical and Computer Engineering, North South University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="mailto:sifat.momen@northsouth.edu"><i class="fa-solid fa-envelope"></i> Email</a>
      <a href="https://scholar.google.com/citations?user=sGVZEaAAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
    </div>
    <p class="people-meta"><strong>Role:</strong> Research Advisor &amp; Supervisor<br><strong>Research:</strong> Complex systems, data mining, information systems, applied machine learning</p>
    <p class="people-note">Guided my applied machine learning, explainable AI, healthcare analytics, and behavioral modeling research.</p>
  </article>
</div>

<h2 class="people-section-title"><i class="fa-solid fa-users"></i> Research / Project Collaborators</h2>

<div class="people-grid">
  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=QrDmxHwAAAAJ&amp;citpid=42" alt="Raiyan Rahman" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">RR</div>
      <div>
        <h3 class="people-name">Raiyan Rahman</h3>
        <p class="people-position">PhD student in Computer Science, North Carolina State University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=QrDmxHwAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://www.raiyan.net/"><i class="fa-solid fa-link"></i> Website</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Quantum networks, multi-armed bandits, quantum Shannon theory</p>
    <p class="people-note">Collaborator on quantum-secure image transmission and applied ML research.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=DczONVsAAAAJ&amp;citpid=14" alt="Mohammed Rakibul Hasan" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">MR</div>
      <div>
        <h3 class="people-name">Mohammed Rakibul Hasan</h3>
        <p class="people-position">AI Engineer, Innovative Technology &amp; Engineering; Research Scientist, SpontAlign</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=DczONVsAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://portfolio-hazel-seven-81.vercel.app/"><i class="fa-solid fa-link"></i> Website</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Quantum communication, quantum cryptography, chaos-based encryption, responsible AI</p>
    <p class="people-note">Collaborator on chaos-assisted QKD image transmission and AI-oriented research systems.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=8EK8VJMAAAAJ&amp;citpid=1" alt="Syed Emad Uddin Shubha" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">SS</div>
      <div>
        <h3 class="people-name">Syed Emad Uddin Shubha</h3>
        <p class="people-position">Graduate Research Assistant, Louisiana State University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=8EK8VJMAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://syedshubha.github.io/"><i class="fa-solid fa-link"></i> Website</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Quantum security, quantum communication, quantum computing</p>
    <p class="people-note">Collaborator on quantum-secure image transmission and multilayered security research.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=dKkLWbQAAAAJ&amp;citpid=1" alt="Shakirul Islam Leeon" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">SL</div>
      <div>
        <h3 class="people-name">Shakirul Islam Leeon</h3>
        <p class="people-position">Research Assistant, North South University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=dKkLWbQAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Machine learning, deep learning, NLP, extended reality, computer vision</p>
    <p class="people-note">Collaborator on depression self-assessment and healthcare-oriented applied AI research.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="{{ '/assets/img/supervisors/nabeel_mohammed.jpg' | relative_url }}" alt="Prof. Nabeel Mohammed" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">NM</div>
      <div>
        <h3 class="people-name">Prof. Nabeel Mohammed</h3>
        <p class="people-position">Associate Professor, Department of Electrical and Computer Engineering, North South University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=w5djOYsAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="http://ece.northsouth.edu/people/dr-nabeel-mohammed/"><i class="fa-solid fa-link"></i> NSU Profile</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Natural language processing, computer vision, deep learning, generative AI</p>
    <p class="people-note">Collaborator on applied AI and machine-learning research with health and human-centered applications.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=iyHpDugAAAAJ&amp;citpid=1" alt="Dr. Riasat Khan" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">RK</div>
      <div>
        <h3 class="people-name">Dr. Riasat Khan</h3>
        <p class="people-position">Associate Professor, Electrical and Computer Engineering, North South University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=iyHpDugAAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="http://ece.northsouth.edu/people/riasat-khan/"><i class="fa-solid fa-link"></i> NSU Profile</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Data science, artificial intelligence, smart systems, IoT</p>
    <p class="people-note">Collaborator on applied AI research, including machine learning and explainable AI work.</p>
  </article>

  <article class="people-card">
    <div class="people-card-header">
      <img class="people-photo" src="https://scholar.googleusercontent.com/citations?view_op=view_photo&amp;user=CH59or4AAAAJ&amp;citpid=2" alt="Arman Sykot" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="people-initials">AS</div>
      <div>
        <h3 class="people-name">Arman Sykot</h3>
        <p class="people-position">Graduate Student Researcher, Quantum Sensing and Imaging Lab, Korea University</p>
      </div>
    </div>
    <div class="people-links">
      <a href="https://scholar.google.com/citations?user=CH59or4AAAAJ&amp;hl=en"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://sites.google.com/view/armansykot/home"><i class="fa-solid fa-link"></i> Website</a>
    </div>
    <p class="people-meta"><strong>Research:</strong> Diamond NV centers, quantum information physics, spin-qubit quantum computation</p>
    <p class="people-note">Collaborator on multilayered QKD security and related quantum information research.</p>
  </article>
</div>

<h2 class="people-section-title"><i class="fa-solid fa-user-graduate"></i> Research Mentees &amp; Students</h2>

<div class="people-grid">
  <article class="people-info-card">
    <span class="people-tag">North South University</span>
    <h3>Multi-layered Security</h3>
    <p><strong>Students:</strong> Wahida Rahman Tanha, BM Monjur Morshed</p>
    <p class="people-note">Mentored research on integrating quantum key distribution with classical cryptography to enhance steganographic security.</p>
  </article>

  <article class="people-info-card">
    <span class="people-tag">RUET and CUET</span>
    <h3>QSAC</h3>
    <p><strong>Students:</strong> Md Raisul Islam Rifat, Md Mizanur Rahman, Md Abdul Kader Nayon</p>
    <p class="people-note">Mentored quantum-assisted secure audio communication using entanglement, audio steganography, and classical encryption.</p>
  </article>

  <article class="people-info-card">
    <span class="people-tag">North South University</span>
    <h3>QuCloud</h3>
    <p><strong>Students:</strong> Anika Taffannum Zarin, Omar Radee</p>
    <p class="people-note">Mentored cloud storage security research combining QKD, post-quantum cryptography, and custom proxy re-encryption.</p>
  </article>
</div>

<h2 class="people-section-title"><i class="fa-solid fa-building-columns"></i> Research Centers &amp; Features</h2>

<div class="people-grid">
  <article class="people-info-card">
    <span class="people-tag">Featured Interview</span>
    <h3>Biggani.org GenZ Scientist Feature</h3>
    <p class="people-note">Featured in a Biggani.org interview about my research journey in quantum computing, QKD, machine learning, and secure communication.</p>
    <div class="people-links">
      <a href="https://biggani.org/shawmoon-azad/"><i class="fa-solid fa-newspaper"></i> Read Feature</a>
    </div>
  </article>

  <article class="people-info-card">
    <span class="people-tag">Research Center</span>
    <h3>NSU Center of Quantum Computing</h3>
    <p class="people-note">Notable collaborator with the NSU Center of Quantum Computing, described by the center as Bangladesh's first quantum computing and information research center.</p>
    <div class="people-links">
      <a href="https://sites.google.com/view/nsu-center-quantum-computing/home"><i class="fa-solid fa-link"></i> Visit NCQC</a>
    </div>
  </article>
</div>
