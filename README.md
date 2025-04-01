<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Md Shawmoon Azad - Researcher @ Quantum & AI</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    /* Reset and basic styling */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Roboto', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f9f9f9;
    }
    a {
      text-decoration: none;
    }
    .container {
      width: 90%;
      max-width: 1200px;
      margin: auto;
      overflow: hidden;
    }
    /* Header & Navigation */
    header {
      background: #333;
      color: #fff;
      padding: 20px 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav .logo a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }
    nav ul {
      list-style: none;
      display: flex;
    }
    nav ul li {
      margin-left: 20px;
    }
    nav ul li a {
      color: #fff;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    nav ul li a:hover {
      color: #f4b400;
    }
    .menu-toggle {
      display: none;
      font-size: 1.5rem;
      color: #fff;
      cursor: pointer;
    }
    /* Hero Section */
    .hero {
      padding: 120px 0 60px;
      text-align: center;
      background: url('assets/img/hero-bg.jpg') no-repeat center center/cover;
      color: #fff;
    }
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
    .hero .btn {
      display: inline-block;
      background: #f4b400;
      color: #333;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 5px;
      transition: background 0.3s ease;
    }
    .hero .btn:hover {
      background: #e0a800;
    }
    /* Sections */
    section {
      padding: 60px 0;
    }
    section h2 {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2.5rem;
      color: #333;
    }
    .content {
      margin: 0 auto;
      max-width: 800px;
      line-height: 1.8;
    }
    /* Timeline for Publications */
    .timeline {
      list-style: none;
      padding: 20px 0;
    }
    .timeline li {
      margin-bottom: 30px;
      padding-left: 20px;
      border-left: 2px solid #333;
      position: relative;
    }
    .timeline li:before {
      content: '';
      position: absolute;
      left: -7px;
      top: 0;
      width: 14px;
      height: 14px;
      background: #f4b400;
      border-radius: 50%;
    }
    /* Research Works */
    .research-work {
      margin-bottom: 40px;
    }
    .research-work img {
      max-width: 100%;
      height: auto;
      margin: 20px 0;
    }
    /* Footer */
    footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 20px 0;
    }
    /* Responsive Navigation */
    @media(max-width: 768px) {
      nav ul {
        flex-direction: column;
        background: #333;
        position: absolute;
        top: 60px;
        right: 0;
        width: 200px;
        display: none;
      }
      nav ul.active {
        display: block;
      }
      nav ul li {
        margin: 10px 0;
      }
      .menu-toggle {
        display: block;
      }
    }
  </style>
</head>
<body>
  <!-- Header and Navigation -->
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <a href="#">Md Shawmoon Azad</a>
        </div>
        <div class="menu-toggle" id="mobile-menu">☰</div>
        <ul id="navbar">
          <li><a href="#about">About</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>Researcher @ Quantum & AI</h1>
      <p>
        <a href="https://scholar.google.com/citations?user=qiLaY-AAAAAJ&hl=en" target="_blank" class="btn">Google Scholar</a>
        <a href="https://www.linkedin.com/in/shawmoonazad/" target="_blank" class="btn">LinkedIn</a>
        <a href="https://drive.google.com/drive/folders/1WLlH715yk7RjT6xc2nxUaRwfVhJ94T3H?usp=sharing" target="_blank" class="btn">CV</a>
      </p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="container content">
      <h2>Who Am I?</h2>
      <p>Hello, my name is Md Shawmoon Azad. I graduated with <em>magna cum laude</em> in <strong>Computer Science and Engineering</strong> from North South University (NSU). I am currently working as a <strong>Research Assistant</strong> at <a href="https://sites.google.com/view/nsuopticslab/members?authuser=0" target="_blank">Optics-Quantum and AI Lab</a>, NSU, under the supervision of <a href="http://ece.northsouth.edu/people/mahdy-rahman-chowdhury/" target="_blank">Dr. Mahdy Rahman Chowdhury</a>. Additionally, I have been a research assistant under <a href="http://ece.northsouth.edu/people/dr-sifat-momen/" target="_blank">Dr. Sifat Momen</a>. So far, I have published several top-tier Q1-indexed high-impact journal articles focusing on secure quantum entanglement-based protocols, hybrid quantum-classical cryptographic frameworks, and AI-driven applications in Mental Health.</p>
      <p>I have also worked as a <strong>Teaching Assistant</strong> at the ECE department at NSU for two years, teaching courses such as <strong>Operating System Design</strong> and <strong>C Programming Language</strong>. Beyond NSU, I work as a Research Instructor and Coordinator at the <a href="https://sites.google.com/view/onlinecoursebymdy/online-research-course-part-a?authuser=0" target="_blank">Mahdy Research Academy</a>, an <strong>EdTech Research Platform</strong> (1st in Bangladesh). I have <strong>taught over 800 students</strong>, focusing on research methodologies and topics related to machine learning and quantum computing, helping to cultivate the next generation of researchers in our country.</p>
      <p><strong>I am actively looking for a Ph.D. Position in Quantum Computing / AI-driven applications.</strong></p>
    </div>
  </section>

  <!-- Research Interests -->
  <section id="research">
    <div class="container content">
      <h2>My Research Interests</h2>
      <p>My research interests broadly lie in two folds: <strong>Quantum Computing</strong> and <strong>Machine Learning</strong>.</p>
      <h3>Quantum Computing Research</h3>
      <p>I am particularly interested in Quantum Communication & Cryptography, Hybrid Quantum-Classical Frameworks, Quantum Machine Learning, and Quantum Applications.</p>
      <h3>AI-driven Research</h3>
      <p>I am interested in applying machine learning, NLP, explainable AI, and Human-Computer Interaction in predictive modeling and mental health diagnostics.</p>
    </div>
  </section>

  <!-- Education -->
  <section id="education">
    <div class="container content">
      <h2>Education</h2>
      <p>I completed my Bachelor of Science in Computer Science and Engineering from North South University, Bangladesh, in June 2023 (Degree commencement in December 2024). I was honored <em>magna cum laude</em> with a CGPA of 3.74/4.00 (<strong>93.5% marks, Top 5%</strong>).</p>
    </div>
  </section>

  <!-- Publications Timeline -->
  <section id="publications">
    <div class="container content">
      <h2>News and Publications</h2>
      <ul class="timeline">
        <li>
          <strong>[2025/15/3]</strong><br>
          Currently working on "Enhancing Cloud Storage Security with Quantum Key Distribution and Post-Quantum Cryptography Using Custom Proxy Re-Encryption" and "LSC-XAI: A Hybrid Explainable AI Framework for Predicting and Mitigating Healthcare Worker Attrition" [Projects from Research Academy]
        </li>
        <li>
          <strong>[2025/10/3]</strong><br>
          Secured Multiparty Quantum Communication Protocol Utilizing W State for Imperfect Channels submitted to <em>Optica Quantum</em>
        </li>
        <li>
          <strong>[2025/5/1]</strong><br>
          <em>Multi-Layered Security System: Integrating Quantum Key Distribution with Classical Cryptography to Enhance Steganographic Security</em> (AAEJ, 121, 167-182).<br>
          <strong>Q1-indexed, Impact Factor: 7.7</strong> — <a href="https://www.sciencedirect.com/science/article/pii/S1110016825002339" target="_blank">Paper Link</a>
        </li>
        <li>
          <strong>[2025/3/1]</strong><br>
          <em>SAD: Self-assessment of depression for Bangladeshi university students using machine learning and NLP</em> (Array, 25, 100372).<br>
          <strong>Q1-indexed, Impact Factor: 4.0</strong> — <a href="https://doi.org/10.1016/j.array.2024.100372" target="_blank">Paper Link</a>
        </li>
        <li>
          <strong>[2023/12/27]</strong><br>
          <em>Predictive Modeling of Consumer Purchase Behavior on Social Media: Integrating Theory of Planned Behavior and Machine Learning for Actionable Insights</em> (PloS One 18.12 (2023): e0296336).<br>
          <strong>Q1-indexed, Impact Factor: 3.75</strong> — <a href="https://doi.org/10.1371/journal.pone.0296336" target="_blank">Paper Link</a>
        </li>
        <li>
          <strong>[2023/11/30]</strong><br>
          <em>Enhancing the security of image transmission in Quantum era: A Chaos-Assisted QKD Approach using entanglement</em> (IET Quantum Communication, 2024, under review) — <a href="https://arxiv.org/pdf/2311.18471" target="_blank">arXiv</a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Research Works -->
  <section id="research-works">
    <div class="container content">
      <h2>My Research Works in Brief</h2>

      <h3>Quantum Computing Research</h3>
      <div class="research-work">
        <h4>"Enhancing the security of image transmission in Quantum era: A Chaos-Assisted QKD Approach using entanglement."</h4>
        <p><strong>TL;DR:</strong> This study addresses security challenges from quantum computing by combining the E91 quantum key distribution protocol with logistic chaotic maps to create a secure image transmission scheme. The framework detects eavesdropping using entanglement tests and chaos encryption, ensuring key confidentiality. Simulations confirm improved encryption efficiency, making this approach a strong candidate for securing communications in fields like healthcare and defense against future quantum threats.</p>
        <p><strong>Research Methodology:</strong></p>
        <img src="/assets/img/qkd_diagram.png" alt="QKD Diagram" />
      </div>

      <div class="research-work">
        <h4>"Multi-Layered Security System: Integrating Quantum Key Distribution with Classical Cryptography to Enhance Steganographic Security."</h4>
        <p><strong>TL;DR:</strong> The study presents a cryptographic system that secures steganographic images by combining Quantum Key Distribution (QKD) with traditional encryption. The E91 QKD protocol generates a shared secret key, which is hashed using SHA for use in AES encryption. This system effectively encrypts steganographic images, showing high randomness and security, with resilience to differential attacks across different pixel densities. By merging quantum and classical cryptographic methods, this approach offers a robust solution against both quantum and classical threats.</p>
        <p><strong>Research Methodology:</strong></p>
        <img src="/assets/img/QKD_Stega.png" alt="QKD Steganography" />
      </div>

      <h3>Machine Learning Research</h3>
      <div class="research-work">
        <h4>"SAD: Self-assessment of depression for Bangladeshi university students using machine learning and NLP."</h4>
        <p><strong>TL;DR:</strong> This study examines the relationship between social factors and depression, using machine learning and NLP techniques to analyze depression assessment scales. Survey data from 520 Bangladeshi university students was used to evaluate various models. The support vector machine algorithm achieved the highest accuracy (99.14%) with the PHQ9 scale, while the stacking ensemble model performed best for social factors. BioBERT outshined other NLP models with 90.34% accuracy, and traditional machine learning models excelled in tabular data analysis. LIME was used to ensure the interpretability of the top models.</p>
        <p><strong>Research Methodology:</strong></p>
        <img src="/assets/img/Depression_Methodology.png" alt="Depression Methodology" />
      </div>

      <div class="research-work">
        <h4>"Predictive Modeling of Consumer Purchase Behavior on Social Media: Integrating Theory of Planned Behavior and Machine Learning for Actionable Insights."</h4>
        <p><strong>TL;DR:</strong> This study explores how social media influences consumer buying behavior and proposes a method combining the Theory of Planned Behavior with machine learning to predict purchasing tendencies. Focusing on key factors like attitude, social norms, and perceived behavioral control, the research utilizes eight machine learning models, with gradient boosting emerging as the most accurate. Additionally, Explainable AI (LIME) is used to clarify how the model generates predictions, confirming the high reliability of its results.</p>
        <p><strong>Paper:</strong></p>
        <img src="/assets/img/plos_paper.png" alt="PLOS Paper" />
      </div>

      <h3>Undergraduate-Directed Research (Thesis)</h3>
      <div class="research-work">
        <h4>"EkattorQA: A Conversational AI-Based Question Answering System applied in the context of Bangladeshi History."</h4>
        <p><em>Supervisor: Dr. Sifat Momen</em> — <a href="https://scholar.google.com/citations?user=sGVZEaAAAAAJ&hl=en" target="_blank">Google Scholar</a></p>
        <p><strong>Abstract:</strong> Recent advancements in large language models (LLMs) have greatly improved their performance in question-answering tasks. However, these models still struggle with issues like hallucinations, misinformation, and inconsistencies, especially when applied to domains with limited training data. This is particularly concerning for sensitive topics such as history, where accuracy and reliability are essential. Although fine-tuning LLMs on diverse datasets can enhance domain-specific performance, it is often expensive and resource-intensive. In response, we introduce EkattorQA, a publicly available conversational AI-based question-answering system specifically designed for the historical context of Bangladesh. EkattorQA combines the Stable Vicuna LLM with expert-verified historical data to produce precise and contextually relevant answers. We conducted a comprehensive evaluation of EkattorQA against other LLMs, including ChatGPT, Vicuna, and Koala, through human assessments of questions with varying levels of complexity. Responses were rated on a Likert scale from 1 to 5, and EkattorQA consistently demonstrated high accuracy across all difficulty levels. Our results show that EkattorQA delivers accurate, high-quality answers, and by using open-source LLMs and external data, it offers a scalable, cost-effective solution for domain-specific question-answering tasks.</p>
        <p><strong>Research Methodology:</strong></p>
        <img src="/assets/img/EkattorQA_methodology.png" alt="EkattorQA Methodology" />
      </div>

      <h3>Undergraduate Capstone Project</h3>
      <div class="research-work">
        <h4>"Secure Image Transmission with Quantum Key distribution and Chaotic system."</h4>
        <p><em>Supervisor: Dr. Mahdy Rahman Chowdhury</em> — <a href="https://scholar.google.com.sg/citations?user=PxNOguMAAAAJ&hl=en" target="_blank">Google Scholar</a></p>
        <p><strong>Poster:</strong></p>
        <img src="/assets/img/qkdposter.png" alt="QKD Poster" />
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills">
    <div class="container content">
      <h2>Skills</h2>
      <p><strong>Programming Languages:</strong> Python, C/C++</p>
      <p><strong>Frameworks:</strong> TensorFlow, Keras, PyTorch, LangChain</p>
      <p><strong>Libraries:</strong> Scikit-learn, OpenCV, Pandas, Matplotlib, Seaborn</p>
      <p><strong>Front-end:</strong> HTML, CSS, JavaScript</p>
      <p><strong>DevOps:</strong> GitHub, Git, LaTeX</p>
    </div>
  </section>

  <!-- Awards -->
  <section id="awards">
    <div class="container content">
      <h2>Awards and Achievements</h2>
      <ul>
        <li>Awarded <em>magna cum laude</em> Distinction.</li>
        <li>Top 10 out of 104 teams, Innovation Challenge 13, NSU ACM</li>
        <li>Awarded 50% NSU merit-based Scholarship for academic excellence (Enhanced).</li>
        <li>Awarded 25% NSU merit-based Scholarship for academic excellence.</li>
        <li>Worked on Four (&#36;22500) NSU CTRGC-funded projects.</li>
      </ul>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact">
    <div class="container content">
      <h2>Contact</h2>
      <p>If you'd like to get in touch, please reach out via email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>&copy; 2025 Md Shawmoon Azad. All rights reserved.</p>
    </div>
  </footer>

  <!-- Mobile Menu Toggle Script -->
  <script>
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  </script>
</body>
</html>
