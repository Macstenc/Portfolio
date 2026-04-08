// Update this file first when you want to personalize the portfolio.
window.PORTFOLIO_DATA = {
  settings: {
    fullName: "Maciej Stencel",
    defaultLang: "en",
    siteUrl: "https://macstenc.github.io/Portfolio/",
    profileImage: "assets/img/profile.jpg",
    profileFallback: "assets/img/profile-placeholder.svg",
    cvFile: "assets/files/maciej-stencel-cv.pdf"
  },
  content: {
    en: {
      meta: {
        title: "Maciej Stencel | Web Developer & Systems Specialist",
        description:
          "Portfolio of Maciej Stencel, a web developer focused on polished frontend work, accessible interfaces, Django-based products, and production-ready web delivery.",
        locale: "en_GB",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Web Developer",
        menuLabel: "Open menu",
        closeMenuLabel: "Close menu",
        langLabel: "Language switcher",
        nav: [
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "education", label: "Education" },
          { id: "contact", label: "Contact" }
        ]
      },
      hero: {
        eyebrow: "Available for ambitious product and web teams",
        role: "Web Developer / Systems & Infrastructure Specialist",
        summary:
          "I build accessible, polished web experiences and production-ready platforms with a strong eye for frontend quality, reliability, and detail.",
        status: "Open to junior and mid frontend or full-stack opportunities",
        highlights: [
          "Frontend-first execution with product polish",
          "Accessibility and WCAG-aware delivery",
          "Django, Linux, Docker, and real deployment experience"
        ],
        primaryCta: "View projects",
        secondaryCta: "Download CV",
        stats: [
          { value: "UI + UX", label: "Interfaces that look strong and stay clear under real use." },
          { value: "Python + Web", label: "Django-based products, APIs, and production-minded delivery." },
          { value: "Infra aware", label: "Docker, Nginx, VPS, SSL, debugging, and deployment basics." }
        ],
        profileLabel: "Professional snapshot",
        profileAlt: "Portrait of Maciej Stencel",
        profileFallbackAlt: "Profile placeholder for Maciej Stencel",
        profileMeta: [
          { label: "Base", value: "Lublin, Poland" },
          { label: "Focus", value: "Frontend, accessibility, Django, production quality" },
          { label: "Availability", value: "Frontend and full-stack roles, remote or hybrid" }
        ]
      },
      sections: {
        about: {
          tag: "About",
          heading: "Building polished products with practical engineering behind the UI",
          intro:
            "Frontend quality matters most when it is supported by accessibility, performance, and production discipline."
        },
        skills: {
          tag: "Skills",
          heading: "Technology choices that support design, delivery, and maintenance",
          intro:
            "I combine frontend craftsmanship with backend and infrastructure skills, so projects look good and hold up in production."
        },
        experience: {
          tag: "Experience",
          heading: "Commercial, freelance, and product-focused work",
          intro:
            "Even where formal titles are limited, the work itself reflects real delivery, ownership, and production responsibility."
        },
        projects: {
          tag: "Projects",
          heading: "Selected work that shows product thinking and execution",
          intro:
            "A mix of live delivery, practical product work, and systems that demonstrate how I build with users and maintainability in mind."
        },
        education: {
          tag: "Education",
          heading: "Academic background in computer science",
          intro:
            "Formal studies backed by practical product work, independent building, and real deployment experience."
        },
        development: {
          tag: "Certificates & Growth",
          heading: "Continuous development through shipping, research, and implementation",
          intro:
            "I learn best by building, documenting, improving, and solving real production problems."
        },
        contact: {
          tag: "Contact",
          heading: "Let's talk about roles, products, or collaboration",
          intro:
            "The site stays frontend-only, so the form opens your email client with a ready-to-send message."
        }
      },
      about: {
        storyTitle: "Profile",
        story: [
          "I am a developer who cares about how a product feels in use, not only whether it technically works. My background combines web development, accessibility, and infrastructure support, which helps me make practical UI decisions with real delivery constraints in mind.",
          "I have worked on public-facing and internal web platforms, maintained multilingual websites, handled CMS environments, and supported deployments on Linux servers with Docker, Nginx, SSL, and production debugging.",
          "I am growing through hands-on projects, commercial-like work, and continuous iteration. The goal is simple: build software that looks professional, communicates clearly, and survives real-world usage."
        ],
        principlesTitle: "How I work",
        principles: [
          "I treat accessibility, semantics, and visual clarity as part of product quality, not as afterthoughts.",
          "I like interfaces that feel calm, intentional, and trustworthy for users and recruiters alike.",
          "I am comfortable moving between frontend details, backend logic, and deployment basics when the project needs it.",
          "I keep learning by shipping projects, refining weak spots, and translating technical work into practical outcomes."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend",
            copy: "UI implementation with a focus on structure, responsiveness, accessibility, and visual consistency.",
            items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Responsive UI", "WCAG-ready markup"]
          },
          {
            title: "Backend",
            copy: "Web applications, APIs, product logic, authentication flows, and payment-related integrations.",
            items: ["Python", "Django", "REST API design", "Java", "Spring Boot", "Stripe webhooks", "Auth flows", "i18n support"]
          },
          {
            title: "Tools & DevOps",
            copy: "Practical production setup and maintenance for small to mid web stacks.",
            items: ["Git", "GitHub", "Linux", "Docker", "Docker Compose", "Nginx", "SSL/TLS", "VPS deployment"]
          },
          {
            title: "Other",
            copy: "Supporting technologies and environments used in commercial-like and self-driven work.",
            items: ["PostgreSQL", "MongoDB", "SQL", "WordPress", "Joomla", "Production debugging", "Technical documentation", "Systems mindset"]
          }
        ]
      },
      experience: {
        items: [
          {
            period: "09/2025 - 12/2025",
            type: "Commercial role",
            role: "Digital Accessibility Coordinator / IT Specialist / Developer",
            company: "University digital services environment",
            summary:
              "Hands-on work across accessible web delivery, application maintenance, infrastructure support, and production reliability for public and internal platforms.",
            bullets: [
              "Developed and maintained Django-based websites and internal tools aligned with accessibility and institutional requirements.",
              "Administered Linux and Nginx environments, handled SSL/TLS setup, and supported stable development, staging, and production workflows.",
              "Worked with Docker-based deployments, multilingual content flows, CMS maintenance, incident resolution, and compliance-oriented documentation."
            ]
          },
          {
            period: "2024 - Present",
            type: "Freelance / own products",
            role: "Independent web product builder",
            company: "Self-directed project work",
            summary:
              "Shipping practical products that connect UI quality with backend logic, payments, automation, and deployment.",
            bullets: [
              "Built and deployed web applications with Django, Stripe Checkout, webhook verification, Docker, Nginx, and VPS hosting.",
              "Created utility products and experiments such as a custom URL shortener, crawler-based automation, and product-focused web tools.",
              "Used real project constraints to improve delivery speed, interface quality, and maintainable structure."
            ]
          },
          {
            period: "2023 - Present",
            type: "Practical commercial-like work",
            role: "Frontend and full-stack project execution",
            company: "Portfolio, coursework, and applied product practice",
            summary:
              "Building full project flows instead of isolated demos, with attention to UX, architecture, debugging, and production mindset.",
            bullets: [
              "Designed project interfaces that stay readable, professional, and responsive across desktop and mobile layouts.",
              "Implemented REST-driven features, data handling, and user-facing flows with an emphasis on clear information hierarchy.",
              "Used version control, iterative testing, and deployment practice to make portfolio work reflect real delivery standards."
            ]
          }
        ]
      },
      projects: {
        filterLabel: "Filter by technology",
        allLabel: "All",
        repositoryLabel: "Repository",
        liveLabel: "Live demo",
        codeOnlyLabel: "Code only",
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe"],
        items: [
          {
            type: "Live product",
            title: "ShowTheCash",
            summary:
              "A payment-focused web platform deployed on VPS with production-minded backend logic, Stripe integration, and a clean user journey.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Stripe Checkout flow with webhook-based payment verification",
              "Dockerized deployment behind Nginx with SSL and VPS hosting",
              "Product-focused frontend with clear conversion and onboarding states"
            ],
            repoUrl: "https://github.com/Macstenc/showthecash-platform",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.svg",
            imageAlt: "ShowTheCash project preview"
          },
          {
            type: "Commercial delivery",
            title: "Accessible University Web Suite",
            summary:
              "A set of public-facing and internal websites improved for accessibility, multilingual content handling, maintenance, and ongoing delivery quality.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "WCAG-conscious implementation and support for public-sector style requirements",
              "Multilingual content flows and practical improvement work across existing platforms",
              "Maintenance work spanning CMS systems, Linux hosting, and deployment support"
            ],
            repoUrl: "https://github.com/Macstenc/accessible-web-suite",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.svg",
            imageAlt: "Accessible university project preview"
          },
          {
            type: "Full-stack product",
            title: "Smart Commerce Recommender",
            summary:
              "An e-commerce concept built as a real application flow, combining Angular frontend work with backend recommendations and containerized deployment.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Product recommendation logic connected to a full shopping flow",
              "REST API, authentication, order handling, and container-based local setup",
              "Structured interface work designed to feel like a real product, not a course exercise"
            ],
            repoUrl: "https://github.com/Macstenc/smart-commerce-engine",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Smart commerce recommender project preview"
          },
          {
            type: "Tooling & automation",
            title: "Link Shortener & Content Toolkit",
            summary:
              "A utility-focused project combining custom short links, structured content handling, and lightweight workflow automation ideas.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Custom short-link generation with practical product-style management flows",
              "Structured content extraction and export patterns inspired by crawler work",
              "Clean UI approach for admin-like workflows and utility tooling"
            ],
            repoUrl: "https://github.com/Macstenc/content-toolkit-url-shortener",
            liveUrl: "",
            image: "assets/img/project-link-toolkit.svg",
            imageAlt: "Link shortener and toolkit project preview"
          }
        ]
      },
      education: {
        items: [
          {
            title: "Bachelor's Degree in Computer Science",
            subtitle: "The John Paul II Catholic University of Lublin",
            meta: "2020 - 2023",
            description:
              "Built the academic foundation in programming, systems thinking, and software development while growing practical web development skills."
          },
          {
            title: "Master's Degree in Computer Science",
            subtitle: "The John Paul II Catholic University of Lublin",
            meta: "2023 - 2025",
            description:
              "Extended the technical base with deeper applied work and a stronger connection between theory, architecture, and project execution."
          }
        ]
      },
      development: {
        items: [
          {
            title: "Accessibility in practice",
            description:
              "Real implementation work around WCAG, semantic structure, clearer interfaces, and digital accessibility expectations in public-facing environments."
          },
          {
            title: "Production deployment habits",
            description:
              "Hands-on growth in Linux, Docker, Nginx, SSL, reverse proxy setup, and reliable small-stack deployment workflows."
          },
          {
            title: "Payments and product delivery",
            description:
              "Practical learning through Stripe integration, webhook handling, verification logic, and real frontend flows around transactions."
          },
          {
            title: "Continuous self-driven building",
            description:
              "I improve fastest by turning ideas into working products, then reviewing UX, structure, code quality, and delivery trade-offs."
          }
        ]
      },
      contact: {
        cardsTitle: "Ways to reach me",
        cards: [
          {
            kind: "email",
            label: "Email",
            value: "macstenc@gmail.com",
            href: "mailto:macstenc@gmail.com",
            description: "Best for job opportunities, project discussions, and direct contact."
          },
          {
            kind: "phone",
            label: "Phone",
            value: "+48 500 011 322",
            href: "tel:+48500011322",
            description: "Available for scheduled calls and quick introductions."
          },
          {
            kind: "github",
            label: "GitHub",
            value: "github.com/Macstenc",
            href: "https://github.com/Macstenc",
            description: "Code samples, repositories, and practical project work."
          },
          {
            kind: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/maciej-stencel",
            href: "https://www.linkedin.com/in/maciej-stencel/",
            description: "Professional profile, networking, and recruitment contact."
          },
          {
            kind: "location",
            label: "Location",
            value: "Lublin, Poland",
            href: "",
            description: "Open to remote, hybrid, and selected on-site opportunities."
          }
        ],
        noteTitle: "Frontend-only contact flow",
        noteText: [
          "The contact form does not fake a backend. It simply prepares a clean email draft in your default mail app.",
          "If you prefer, you can also contact me directly through email, GitHub, LinkedIn, or my live product website."
        ],
        formTitle: "Start the conversation",
        formIntro: "Share the role, project, or challenge and I will prepare the message in your mail app.",
        fields: [
          { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe", required: true, autocomplete: "name" },
          { name: "email", label: "Your email", type: "email", placeholder: "jane@company.com", required: true, autocomplete: "email" },
          { name: "subject", label: "Subject", type: "text", placeholder: "Frontend role at Example Studio", required: true, autocomplete: "organization-title" },
          { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about the role, product, or collaboration opportunity.", required: true, autocomplete: "off" }
        ],
        submitLabel: "Open email draft",
        statusMessage:
          "Your mail client should open with a prefilled draft. If nothing happens, email me directly at macstenc@gmail.com.",
        subjectPrefix: "Portfolio contact",
        bodyIntro: "Hello Maciej,"
      },
      footer: {
        summary:
          "Bilingual static portfolio built to present frontend quality, practical engineering, and recruiter-friendly communication.",
        quickLinksTitle: "Quick links",
        resourcesTitle: "Links",
        resources: [
          { label: "GitHub", href: "https://github.com/Macstenc" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/maciej-stencel/" },
          { label: "Website", href: "https://showthecash.com/about" },
          { label: "Download CV", href: "assets/files/maciej-stencel-cv.pdf" }
        ],
        copy: "All rights reserved."
      },
      ui: {
        backToTop: "Top"
      }
    },
    pl: {
      meta: {
        title: "Maciej Stencel | Web Developer i Systems Specialist",
        description:
          "Portfolio Macieja Stencla. Frontend, dostępność, aplikacje webowe oparte o Django oraz dopracowane wdrożenia i jakość produkcyjna.",
        locale: "pl_PL",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Web Developer",
        menuLabel: "Otwórz menu",
        closeMenuLabel: "Zamknij menu",
        langLabel: "Przełącznik języka",
        nav: [
          { id: "about", label: "O mnie" },
          { id: "skills", label: "Umiejętności" },
          { id: "experience", label: "Doświadczenie" },
          { id: "projects", label: "Projekty" },
          { id: "education", label: "Edukacja" },
          { id: "contact", label: "Kontakt" }
        ]
      },
      hero: {
        eyebrow: "Gotowy na ambitne zespoły produktowe i webowe",
        role: "Web Developer / Systems & Infrastructure Specialist",
        summary:
          "Tworzę dostępne, dopracowane strony i aplikacje webowe, które dobrze wyglądają, są czytelne dla użytkownika i mają solidne zaplecze techniczne.",
        status: "Otwartość na role junior i mid w frontendzie lub full-stacku",
        highlights: [
          "Frontend z naciskiem na jakość i dopracowanie produktu",
          "Świadome podejście do dostępności i WCAG",
          "Django, Linux, Docker i praktyczne doświadczenie wdrożeniowe"
        ],
        primaryCta: "Zobacz projekty",
        secondaryCta: "Pobierz CV",
        stats: [
          { value: "UI + UX", label: "Interfejsy, które wyglądają profesjonalnie i pozostają czytelne w praktyce." },
          { value: "Python + Web", label: "Produkty w Django, API i wdrożenia z myśleniem produkcyjnym." },
          { value: "Infra aware", label: "Docker, Nginx, VPS, SSL, debugging i podstawy stabilnego deployu." }
        ],
        profileLabel: "Szybki profil",
        profileAlt: "Portret Macieja Stencla",
        profileFallbackAlt: "Miejsce na zdjęcie profilowe Macieja Stencla",
        profileMeta: [
          { label: "Lokalizacja", value: "Lublin, Polska" },
          { label: "Specjalizacja", value: "Frontend, dostępność, Django, jakość produkcyjna" },
          { label: "Dostępność", value: "Role frontend i full-stack, remote lub hybryda" }
        ]
      },
      sections: {
        about: {
          tag: "O mnie",
          heading: "Dopracowane produkty tworzone z myśleniem o UI i realnym wdrożeniu",
          intro:
            "Najlepszy frontend to taki, który nie kończy się na wyglądzie, ale wspiera go dostępność, wydajność i porządek techniczny."
        },
        skills: {
          tag: "Umiejętności",
          heading: "Technologie, które wspierają design, wdrożenie i utrzymanie",
          intro:
            "Łączę warsztat frontendowy z backendem i podstawami infrastruktury, dzięki czemu projekty są estetyczne i sensownie przygotowane do produkcji."
        },
        experience: {
          tag: "Doświadczenie",
          heading: "Praca komercyjna, własne projekty i praktyka projektowa",
          intro:
            "Nawet tam, gdzie formalne stanowiska są krótsze, zakres odpowiedzialności pokazuje realne dowożenie, samodzielność i pracę na produkcji."
        },
        projects: {
          tag: "Projekty",
          heading: "Wybrane realizacje pokazujące myślenie produktowe i wykonanie",
          intro:
            "Połączenie live delivery, praktycznych projektów i systemów, które pokazują, jak buduję z myślą o użytkowniku oraz utrzymaniu."
        },
        education: {
          tag: "Edukacja",
          heading: "Zaplecze akademickie w obszarze informatyki",
          intro:
            "Studia uzupełnione praktyczną pracą projektową, samodzielnym budowaniem produktów i realnym doświadczeniem wdrożeniowym."
        },
        development: {
          tag: "Certyfikaty i rozwój",
          heading: "Stały rozwój przez budowanie, research i wdrażanie",
          intro:
            "Najszybciej rozwijam się wtedy, gdy tworzę działające produkty, dokumentuję wnioski i poprawiam rzeczy, które realnie mają znaczenie."
        },
        contact: {
          tag: "Kontakt",
          heading: "Porozmawiajmy o roli, produkcie lub współpracy",
          intro:
            "Strona jest w pełni frontendowa, dlatego formularz przygotowuje gotową wiadomość w Twojej aplikacji pocztowej."
        }
      },
      about: {
        storyTitle: "Profil",
        story: [
          "Jestem developerem, który zwraca uwagę nie tylko na to, czy coś działa technicznie, ale też jak produkt odbiera użytkownik. Łączę web development, dostępność oraz zaplecze infrastrukturalne, dlatego potrafię podejmować decyzje frontendowe z myślą o realnych ograniczeniach projektu.",
          "Pracowałem przy publicznych i wewnętrznych platformach webowych, utrzymywałem strony wielojęzyczne, środowiska CMS oraz wdrożenia na Linuxie z wykorzystaniem Dockera, Nginxa, SSL i produkcyjnego debugowania.",
          "Rozwijam się przez praktykę, własne produkty i projekty zbliżone do pracy komercyjnej. Chcę budować software, który wygląda profesjonalnie, komunikuje się jasno i dobrze działa w realnym użyciu."
        ],
        principlesTitle: "Jak pracuję",
        principles: [
          "Dostępność, semantyka i czytelność interfejsu traktuję jako część jakości produktu, a nie dodatek na końcu.",
          "Lubię interfejsy spokojne, celowe i wiarygodne, które budzą zaufanie użytkownika i rekrutera.",
          "Dobrze odnajduję się między frontendem, logiką backendową i podstawami wdrożeń, gdy projekt tego wymaga.",
          "Uczę się najlepiej przez dowożenie projektów, poprawianie słabych punktów i przekładanie techniki na praktyczne efekty."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend",
            copy: "Implementacja UI z naciskiem na strukturę, responsywność, dostępność i spójność wizualną.",
            items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Responsive UI", "Markup zgodny z WCAG"]
          },
          {
            title: "Backend",
            copy: "Aplikacje webowe, API, logika produktowa, autoryzacja i integracje związane z płatnościami.",
            items: ["Python", "Django", "REST API design", "Java", "Spring Boot", "Stripe webhooks", "Auth flows", "Obsługa i18n"]
          },
          {
            title: "Tools & DevOps",
            copy: "Praktyczne przygotowanie i utrzymanie środowisk dla małych i średnich stacków webowych.",
            items: ["Git", "GitHub", "Linux", "Docker", "Docker Compose", "Nginx", "SSL/TLS", "VPS deployment"]
          },
          {
            title: "Inne",
            copy: "Technologie wspierające projekty komercyjne, własne produkty i codzienną pracę projektową.",
            items: ["PostgreSQL", "MongoDB", "SQL", "WordPress", "Joomla", "Production debugging", "Technical documentation", "Systems mindset"]
          }
        ]
      },
      experience: {
        items: [
          {
            period: "09/2025 - 12/2025",
            type: "Rola komercyjna",
            role: "Digital Accessibility Coordinator / IT Specialist / Developer",
            company: "Środowisko usług cyfrowych uczelni",
            summary:
              "Praktyczna praca łącząca rozwój dostępnych serwisów, utrzymanie aplikacji, wsparcie infrastruktury i stabilność środowisk produkcyjnych.",
            bullets: [
              "Rozwijałem i utrzymywałem serwisy oparte o Django oraz narzędzia wewnętrzne zgodne z wymaganiami dostępności i potrzebami instytucji.",
              "Administrowałem środowiskami Linux i Nginx, zajmowałem się konfiguracją SSL/TLS oraz stabilnym przebiegiem środowisk dev, stage i production.",
              "Pracowałem z wdrożeniami opartymi o Docker, wielojęzycznością, utrzymaniem CMS-ów, analizą incydentów i dokumentacją pod kątem zgodności."
            ]
          },
          {
            period: "2024 - obecnie",
            type: "Freelance / własne produkty",
            role: "Niezależny twórca produktów webowych",
            company: "Samodzielna praca projektowa",
            summary:
              "Budowanie praktycznych produktów łączących jakość UI z logiką backendową, płatnościami, automatyzacją i wdrożeniami.",
            bullets: [
              "Tworzyłem i wdrażałem aplikacje z Django, Stripe Checkout, webhookami, Dockerem, Nginxem i hostingiem na VPS.",
              "Budowałem narzędzia użytkowe i eksperymenty produktowe, takie jak własny shortener URL, automatyzacje crawlerowe i webowe utility tools.",
              "Wykorzystywałem realne ograniczenia projektowe do poprawy szybkości pracy, jakości interfejsu i utrzymywalnej struktury kodu."
            ]
          },
          {
            period: "2023 - obecnie",
            type: "Praktyka projektowa",
            role: "Realizacja projektów frontend i full-stack",
            company: "Portfolio, projekty akademickie i praktyka produktowa",
            summary:
              "Budowanie pełnych przepływów projektowych zamiast pojedynczych dem, z naciskiem na UX, architekturę, debugging i myślenie produkcyjne.",
            bullets: [
              "Projektowałem interfejsy, które pozostają czytelne, profesjonalne i responsywne na desktopie oraz mobile.",
              "Implementowałem funkcje oparte o REST, obsługę danych i flow użytkownika z naciskiem na jasną hierarchię informacji.",
              "Wykorzystywałem version control, iteracyjne testowanie i praktykę deploymentu, żeby portfolio bardziej przypominało realne dowożenie niż ćwiczenie."
            ]
          }
        ]
      },
      projects: {
        filterLabel: "Filtruj po technologii",
        allLabel: "Wszystkie",
        repositoryLabel: "Repozytorium",
        liveLabel: "Live demo",
        codeOnlyLabel: "Tylko kod",
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe"],
        items: [
          {
            type: "Produkt live",
            title: "ShowTheCash",
            summary:
              "Platforma webowa związana z płatnościami, wdrożona na VPS z produkcyjną logiką backendową, integracją Stripe i dopracowaną ścieżką użytkownika.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Proces płatności Stripe Checkout z webhookową weryfikacją transakcji",
              "Dockerowe wdrożenie za Nginxem z SSL i hostingiem VPS",
              "Produktowy frontend z czytelną konwersją i spokojnym onboardingiem"
            ],
            repoUrl: "https://github.com/Macstenc/showthecash-platform",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.svg",
            imageAlt: "Podgląd projektu ShowTheCash"
          },
          {
            type: "Realizacja komercyjna",
            title: "Accessible University Web Suite",
            summary:
              "Zestaw serwisów publicznych i wewnętrznych rozwijanych pod kątem dostępności, wielojęzyczności, utrzymania i jakości kolejnych wdrożeń.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "Implementacja i wsparcie zgodne z praktyką WCAG oraz wymaganiami środowisk publicznych",
              "Wielojęzyczność i ciągłe usprawnienia istniejących platform",
              "Prace utrzymaniowe obejmujące CMS-y, hosting Linux i wsparcie wdrożeń"
            ],
            repoUrl: "https://github.com/Macstenc/accessible-web-suite",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.svg",
            imageAlt: "Podgląd projektu dostępnej platformy uczelnianej"
          },
          {
            type: "Produkt full-stack",
            title: "Smart Commerce Recommender",
            summary:
              "Koncepcja e-commerce zbudowana jak realny produkt, łącząca frontend Angular z backendem rekomendacyjnym i konteneryzowanym środowiskiem.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Logika rekomendacji produktów spięta z pełnym flow zakupowym",
              "REST API, autoryzacja, obsługa zamówień i konteneryzacja środowiska",
              "Interfejs projektowany jak realny produkt, a nie ćwiczenie kursowe"
            ],
            repoUrl: "https://github.com/Macstenc/smart-commerce-engine",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Podgląd projektu smart commerce recommender"
          },
          {
            type: "Narzędzia i automatyzacja",
            title: "Link Shortener & Content Toolkit",
            summary:
              "Projekt użytkowy łączący customowe short linki, pracę na uporządkowanych danych i lekkie podejście do automatyzacji workflow.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Generowanie własnych short linków z praktycznym panelem zarządzania",
              "Przetwarzanie i eksport treści inspirowane pracą nad crawlerami",
              "Czytelne UI dla utility toolingu i przepływów administracyjnych"
            ],
            repoUrl: "https://github.com/Macstenc/content-toolkit-url-shortener",
            liveUrl: "",
            image: "assets/img/project-link-toolkit.svg",
            imageAlt: "Podgląd projektu shortenera i toolkitu treści"
          }
        ]
      },
      education: {
        items: [
          {
            title: "Licencjat z informatyki",
            subtitle: "Katolicki Uniwersytet Lubelski Jana Pawła II",
            meta: "2020 - 2023",
            description:
              "Solidna podstawa w programowaniu, myśleniu systemowym i rozwoju oprogramowania, równolegle rozwijana praktyką webową."
          },
          {
            title: "Studia magisterskie z informatyki",
            subtitle: "Katolicki Uniwersytet Lubelski Jana Pawła II",
            meta: "2023 - 2025",
            description:
              "Rozwinięcie bazy technicznej o bardziej praktyczne podejście do architektury, analizy i realizacji projektów."
          }
        ]
      },
      development: {
        items: [
          {
            title: "Dostępność w praktyce",
            description:
              "Realna praca z WCAG, semantyczną strukturą, czytelniejszymi interfejsami i wymaganiami dostępności w środowiskach publicznych."
          },
          {
            title: "Nawyki wdrożeniowe",
            description:
              "Rozwój przez praktykę w Linuxie, Dockerze, Nginxie, SSL, reverse proxy i stabilnych workflowach deploymentowych."
          },
          {
            title: "Płatności i myślenie produktowe",
            description:
              "Praktyczna nauka przez integracje Stripe, webhooki, logikę weryfikacji i realne frontendowe flow transakcyjne."
          },
          {
            title: "Stałe budowanie własnych projektów",
            description:
              "Najszybciej rozwijam się, gdy zamieniam pomysły w działające produkty, a potem analizuję UX, strukturę i kompromisy wdrożeniowe."
          }
        ]
      },
      contact: {
        cardsTitle: "Jak się ze mną skontaktować",
        cards: [
          {
            kind: "email",
            label: "Email",
            value: "macstenc@gmail.com",
            href: "mailto:macstenc@gmail.com",
            description: "Najlepsza opcja przy rekrutacji, projektach i bezpośrednim kontakcie."
          },
          {
            kind: "phone",
            label: "Telefon",
            value: "+48 500 011 322",
            href: "tel:+48500011322",
            description: "Dostępny na umówione rozmowy i krótkie intro call."
          },
          {
            kind: "github",
            label: "GitHub",
            value: "github.com/Macstenc",
            href: "https://github.com/Macstenc",
            description: "Kod, repozytoria i praktyczne projekty do przejrzenia."
          },
          {
            kind: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/maciej-stencel",
            href: "https://www.linkedin.com/in/maciej-stencel/",
            description: "Profil zawodowy, networking i kontakt rekrutacyjny."
          },
          {
            kind: "location",
            label: "Lokalizacja",
            value: "Lublin, Polska",
            href: "",
            description: "Otwartość na remote, hybrydę i wybrane opcje on-site."
          }
        ],
        noteTitle: "Kontakt bez backendu",
        noteText: [
          "Formularz nie udaje backendu. Po prostu przygotowuje czysty draft wiadomości w Twojej domyślnej aplikacji mailowej.",
          "Jeśli wolisz, możesz też napisać do mnie bezpośrednio przez email, GitHub, LinkedIn albo stronę projektu live."
        ],
        formTitle: "Zacznij rozmowę",
        formIntro: "Opisz rolę, projekt lub potrzebę, a strona przygotuje gotową wiadomość w Twojej poczcie.",
        fields: [
          { name: "name", label: "Twoje imię", type: "text", placeholder: "Jan Kowalski", required: true, autocomplete: "name" },
          { name: "email", label: "Twój email", type: "email", placeholder: "jan@firma.pl", required: true, autocomplete: "email" },
          { name: "subject", label: "Temat", type: "text", placeholder: "Rola frontend developera w Example Studio", required: true, autocomplete: "organization-title" },
          { name: "message", label: "Wiadomość", type: "textarea", placeholder: "Napisz kilka słów o roli, projekcie lub współpracy.", required: true, autocomplete: "off" }
        ],
        submitLabel: "Otwórz draft emaila",
        statusMessage:
          "Powinna otworzyć się Twoja aplikacja pocztowa z uzupełnioną wiadomością. Jeśli nie, napisz bezpośrednio na macstenc@gmail.com.",
        subjectPrefix: "Kontakt z portfolio",
        bodyIntro: "Cześć Maciej,"
      },
      footer: {
        summary:
          "Dwujęzyczne statyczne portfolio zaprojektowane tak, aby pokazać jakość frontendu, praktyczne zaplecze techniczne i dobrą komunikację z rekruterem.",
        quickLinksTitle: "Szybkie linki",
        resourcesTitle: "Linki",
        resources: [
          { label: "GitHub", href: "https://github.com/Macstenc" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/maciej-stencel/" },
          { label: "Strona", href: "https://showthecash.com/about" },
          { label: "Pobierz CV", href: "assets/files/maciej-stencel-cv.pdf" }
        ],
        copy: "Wszelkie prawa zastrzeżone."
      },
      ui: {
        backToTop: "Góra"
      }
    }
  }
};
