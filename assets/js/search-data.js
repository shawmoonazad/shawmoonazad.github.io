// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications and manuscripts in quantum information science, quantum-safe security, and applied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Portfolio of quantum algorithms, quantum-safe security, and applied AI research systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching, instruction, and research mentorship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Advisors, labs, collaborators, and mentorship groups.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-achievements",
          title: "achievements",
          description: "Selected research, academic, and publication achievements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/achievements/";
          },
        },{id: "news-our-multilayered-qkd-integrated-steganographic-security-framework-appeared-in-alexandria-engineering-journal",
          title: 'Our multilayered QKD-integrated steganographic security framework appeared in Alexandria Engineering Journal.',
          description: "",
          section: "News",},{id: "news-started-my-graduate-degree-in-computer-science-at-cleveland-state-university",
          title: 'Started my Graduate degree in Computer Science at Cleveland State University.',
          description: "",
          section: "News",},{id: "news-our-quantum-assisted-secure-audio-communication-paper-was-published-in-engineering-science-and-technology",
          title: 'Our quantum-assisted secure audio communication paper was published in Engineering Science and Technology....',
          description: "",
          section: "News",},{id: "news-our-chaos-assisted-qkd-image-transmission-paper-was-published-in-iet-quantum-communication",
          title: 'Our chaos-assisted QKD image transmission paper was published in IET Quantum Communication.',
          description: "",
          section: "News",},{id: "news-qucloud-was-published-in-journal-of-information-security-and-applications-combining-qkd-post-quantum-cryptography-and-custom-proxy-re-encryption-for-cloud-storage-security",
          title: 'QuCloud was published in Journal of Information Security and Applications, combining QKD, post-quantum...',
          description: "",
          section: "News",},{id: "news-reached-100-google-scholar-citations-across-my-quantum-security-applied-ai-and-machine-learning-research",
          title: 'Reached 100+ Google Scholar citations across my quantum security, applied AI, and machine...',
          description: "",
          section: "News",},{id: "projects-quantum-secure-image-transmission",
          title: 'Quantum-Secure Image Transmission',
          description: "Entanglement protocol with chaos encryption and eavesdropping detection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chaos_qkd/";
            },},{id: "projects-hybrid-quantum-classical-security-framework",
          title: 'Hybrid Quantum-Classical Security Framework',
          description: "Multilayered system combining QKD, classical cryptography, and deep learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hybrid_security/";
            },},{id: "projects-itihashqa",
          title: 'ItihashQA',
          description: "Retrieval-augmented Bangladeshi history question-answering system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/itihashqa/";
            },},{id: "projects-qkd-protocol-simulation-suite",
          title: 'QKD Protocol Simulation Suite',
          description: "BB84, B92, and E91 quantum key distribution implementations in Qiskit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qkd_suite/";
            },},{id: "projects-efficient-quantum-neural-networks-via-knowledge-distillation",
          title: 'Efficient Quantum Neural Networks via Knowledge Distillation',
          description: "16x model compression for NISQ devices with 86.10% accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qnn_kd/";
            },},{id: "projects-qucloud",
          title: 'QuCloud',
          description: "Cloud storage security with QKD, post-quantum cryptography, and proxy re-encryption.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qucloud/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%77%6D%6F%6F%6E%39%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shawmoonazad", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shawmoonazad", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qiLaY-AAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-1318-072X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Md-Shawmoon-Azad/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
