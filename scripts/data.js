// Update this file first when you want to personalize the portfolio.
window.PORTFOLIO_DATA = {
  settings: {
    fullName: "Maciej Stencel",
    defaultLang: "en",
    languageStorageKey: "portfolio-lang",
    themeStorageKey: "portfolio-theme",
    defaultTheme: "dark",
    siteUrl: "https://macstenc.github.io/Portfolio/",
    profileImage: "assets/img/profile.png",
    profileFallback: "assets/img/profile-placeholder.svg",
    cvFile: "assets/files/maciej-stencel-cv.pdf",
    themes: {
      light: {
        colorScheme: "light",
        themeColor: "#eff4f8"
      },
      dark: {
        colorScheme: "dark",
        themeColor: "#08101d"
      },
      eclipse: {
        colorScheme: "dark",
        themeColor: "#120e0a"
      }
    }
  },
  content: {
    en: {
      meta: {
        title: "Maciej Stencel | Full-Stack Developer",
        description:
          "Full-stack developer building accessible interfaces, Django-backed products, and production-ready web applications with strong execution discipline.",
        locale: "en_GB",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Full-Stack Developer",
        menuLabel: "Open menu",
        closeMenuLabel: "Close menu",
        langLabel: "Language switcher",
        themeLabel: "Theme switcher",
        themes: {
          light: "Light",
          dark: "Dark",
          eclipse: "Eclipse"
        },
        nav: [
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "workflow", label: "Process" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "education", label: "Education" },
          { id: "contact", label: "Contact" }
        ]
      },
      hero: {
        eyebrow: "Product-minded full-stack execution with accessibility, performance, and long-term reliability",
        role: "Full-Stack Developer",
        summary:
          "I build web products end to end with clear interfaces, dependable backend logic, and deployment-ready setups that remain stable after launch.",
        status: "Open to full-stack roles, web platforms, and product-focused teams",
        highlights: [
          "Accessible UI and thoughtful product journeys",
          "Django, APIs, payments, deployment, and production support",
          "AI-supported workflows with manual review and verification"
        ],
        primaryCta: "View projects",
        secondaryCta: "Download CV",
        stats: [
          {
            value: "Full-stack ownership",
            label: "Frontend, backend, integrations, and deployment treated as one connected responsibility."
          },
          {
            value: "Product discipline",
            label: "Clear user journeys, practical decisions, and steady refinement shaped by real usage."
          },
          {
            value: "Quality assurance",
            label: "Modern AI tools accelerate research and refactoring, but every release is reviewed and verified manually."
          }
        ],
        profileLabel: "Professional snapshot",
        profileAlt: "Portrait of Maciej Stencel",
        profileFallbackAlt: "Profile placeholder for Maciej Stencel",
        profileMeta: [
          { label: "Base", value: "Lublin, Poland" },
          { label: "Best fit", value: "Full-stack roles, web platforms, Django-backed products" },
          { label: "Work style", value: "Calm execution, strong review habits, practical ownership" }
        ]
      },
        sections: {
          about: {
            tag: "About",
            heading: "A full-stack developer who cares how products behave after launch",
            intro:
              "Strong web work is more than shipping screens. It needs structure, accessibility, backend clarity, and enough technical discipline to stay reliable in production."
          },
          skills: {
            tag: "Skills",
            heading: "Tools and practices that support product work from idea to release",
            intro:
              "My strongest work sits where interface quality, backend thinking, and dependable execution meet."
          },
          workflow: {
            tag: "Proces",
            heading: "How I move from idea to release-ready work",
            intro:
              "A product-minded process that starts with clarity, builds with restraint, and finishes with verification and long-term care."
          },
          experience: {
            tag: "Experience",
          heading: "Hands-on work across accessibility, product work, and live web environments",
            intro:
              "What matters most is scope: building interfaces, handling application logic, supporting platforms, and improving what already runs in production."
        },
        projects: {
          tag: "Projects",
          heading: "Selected work that shows how I build, refine, and verify results",
          intro:
            "These projects reflect practical execution, product thinking, and responsibility for the final experience, not just the first demo."
        },
        education: {
          tag: "Education",
          heading: "Computer science background strengthened by practical project work",
          intro:
            "Formal study gave me a strong base. The biggest progress came later through building, revisiting, and improving real projects."
        },
        development: {
          tag: "Development",
          heading: "A process that values speed, without compromising judgment",
          intro:
            "I like modern tools and efficient processes, but quality, review, and accountability still come first."
        },
        contact: {
          tag: "Contact",
          heading: "Let's talk about a role, a product, or a practical collaboration",
          intro:
            "The contact section stays direct and useful: email, phone, GitHub, LinkedIn, and location in one place."
        }
      },
      about: {
        storyTitle: "Profile",
        story: [
          "I work as a full-stack developer with a strong focus on interface clarity. I care about hierarchy, pacing, semantics, and whether a product remains reliable once it meets real data, real content, and production constraints.",
          "My background covers public-facing and internal web platforms, accessibility work, multilingual content, Django-based applications, CMS maintenance, and Linux-based deployment support with Nginx, Docker, SSL, and production debugging.",
          "I use tools such as Codex, Cursor, and Claude when they genuinely help: research, prototyping, refactoring, and code analysis. They accelerate the process, but they do not replace review. Anything important still requires manual verification, adjustment, and accountability before it ships."
        ],
        principlesTitle: "What you can expect",
        principles: [
          "Clear interfaces with attention to semantics, spacing, and decision-making under real content.",
          "Comfort moving between frontend implementation, backend details, and deployment basics when the project needs it.",
          "Practical engineering choices guided by maintainability and usability, not just visual effect.",
          "Responsible use of AI tooling: fast where it helps, critical where it matters."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend Systems",
            copy: "Interfaces that feel readable, calm, responsive, and accessible in real product conditions.",
            items: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Angular",
              "TypeScript",
              "Responsive layout",
              "Accessible UI",
              "Design systems",
              "Interaction polish"
            ]
          },
          {
            title: "Backend & Integrations",
            copy: "Application logic, APIs, and connected journeys that support the product instead of slowing it down.",
            items: [
              "Python",
              "Django",
              "REST APIs",
              "Java",
              "Spring Boot",
              "Authentication patterns",
              "Stripe webhooks",
              "Data-driven features"
            ]
          },
          {
            title: "Delivery & Infrastructure",
            copy: "Enough systems knowledge to deploy, troubleshoot, and support small-to-mid web stacks with confidence.",
            items: [
              "Git",
              "GitHub",
              "Linux",
              "Docker",
              "Docker Compose",
              "Nginx",
              "SSL/TLS",
              "VPS deployment"
            ]
          },
          {
            title: "Execution & Quality",
            copy: "Modern tooling used with judgment, review discipline, and accountability for the final result.",
            items: [
              "Code review",
              "Debugging",
              "Refactoring",
              "Technical documentation",
              "Codex",
              "Cursor",
              "Claude",
              "AI-supported development"
            ]
          }
        ]
      },
      workflow: {
        items: [
          {
            title: "Discovery and scope",
            copy:
              "I clarify goals, constraints, and what success looks like before writing code so the build is focused and realistic.",
            points: [
              "Define users, stakeholders, and measurable outcomes",
              "Map constraints, dependencies, and edge cases early",
              "Agree on scope and a quality bar before implementation"
            ]
          },
          {
            title: "Build with guardrails",
            copy:
              "Implementation is paced with structure: clean UI, stable APIs, and execution choices that stay maintainable after release.",
            points: [
              "Accessible UI and design-system-style components",
              "Backend logic aligned with data and product journeys",
              "Deployment-ready configuration and documentation"
            ]
          },
          {
            title: "Verify and ship",
            copy:
              "I finish with real-world validation, review, and refinement so the product feels reliable, not just polished.",
            points: [
              "Manual QA and critical path testing",
              "Performance and accessibility checks",
              "Follow-up iterations based on feedback"
            ]
          }
        ]
      },
      experience: {
        items: [
          {
            period: "09/2025 - 12/2025",
            type: "Commercial role",
            role: "Digital Accessibility Coordinator / IT Specialist / Developer",
            company: "University digital services and web platforms",
            summary:
              "Worked across accessibility, platform maintenance, and production support for public-facing and internal services.",
            bullets: [
              "Delivered and maintained Django-based sites and internal tools with accessibility and institutional requirements in view.",
              "Supported Linux and Nginx environments, SSL/TLS configuration, and steady development-to-production routines.",
              "Handled multilingual content, CMS upkeep, deployment support, documentation, and day-to-day reliability work."
            ]
          },
          {
            period: "2024 - Present",
            type: "Independent work",
            role: "Full-stack web product builder",
            company: "Self-directed commercial-style projects",
            summary:
              "Built practical web products end to end, combining frontend implementation, backend logic, payments, and deployment.",
            bullets: [
              "Shipped Django-based applications with Stripe Checkout, webhook verification, Docker, Nginx, and VPS hosting.",
              "Built utility products and custom routines such as payment journeys, short-link tooling, and structured data features.",
              "Used AI assistants selectively for research, refactoring, and debugging support, then reviewed the final implementation before shipping."
            ]
          },
          {
            period: "2023 - Present",
            type: "Project practice",
            role: "Frontend and full-stack project execution",
            company: "Portfolio work, coursework, and applied product practice",
            summary:
              "Used self-driven projects to build real production habits rather than one-off demos.",
            bullets: [
              "Designed interfaces with clearer hierarchy, calmer spacing, and stronger mobile behavior.",
              "Implemented API-driven journeys, user-facing logic, and maintainable structure with version control and iterative testing.",
              "Treated generated suggestions as drafts to review, adapt, and verify instead of accepting them uncritically."
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
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe", "Node.js"],
        items: [
          {
            type: "Live product",
            title: "ShowTheCash",
            summary:
              "A payment-focused web product with a cleaner customer journey, Stripe integration, and deployment set up for stable day-to-day use.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Checkout journey connected to webhook-based payment verification",
              "Containerized deployment behind Nginx with SSL and VPS hosting",
              "Frontend tuned for clarity, trust, and a calmer conversion path"
            ],
            highlight: "Outcome: Payment journey verified with production-ready Stripe webhooks and stable deployment",
            featured: true,
            repoUrl: "",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.JPG",
            imageAlt: "ShowTheCash project preview"
          },
          {
            type: "Live platform",
            title: "Welcome Center",
            summary:
              "A university-facing web platform focused on accessibility, multilingual content, and steady improvements in a live environment.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "Accessibility-minded implementation in a public-facing academic environment",
              "Multilingual content handling and iterative improvements on a live platform",
              "Ongoing platform support across CMS tooling, Linux hosting, and deployments"
            ],
            repoUrl: "",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.JPG",
            imageAlt: "Welcome Center project preview"
          },
          {
            type: "Live platform",
            title: "CWN Support Center",
            summary:
              "A public-facing support center website built around clear navigation, accessible content structure, and a calmer information structure for students and candidates.",
            stack: ["JavaScript", "Accessibility", "CMS", "Responsive UI"],
            filters: ["JavaScript", "Accessibility"],
            features: [
              "Public-facing information architecture for support services and everyday user journeys",
              "Accessible content presentation with clear sectioning and practical calls to action",
              "Homepage and navigation refined to feel clearer, calmer, and easier to browse"
            ],
            highlight: "Outcome: Clearer, accessible information structure for a public university audience",
            featured: true,
            repoUrl: "",
            liveUrl: "https://cwn.uws.edu.pl/",
            image: "assets/img/project-cwn.jpg",
            imageAlt: "CWN support center website preview"
          },
          {
            type: "Full-stack concept",
            title: "Intelligent Ecommerce Platform",
            summary:
              "A full-stack commerce project built around recommendation logic, product journey decisions, and integration between frontend, backend, and data handling.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Recommendation logic connected to a fuller shopping journey",
              "REST API, authentication, order handling, and container-based local setup",
              "Interface work treated as product design practice, not a throwaway exercise"
            ],
            repoUrl: "https://github.com/Macstenc/intelligent-ecommerce-platform",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Intelligent ecommerce platform project preview"
          },
          {
            type: "Utility tooling",
            title: "Link Shortener & Content Toolkit",
            summary:
              "An internal university utility focused on short links, content routines, and admin-friendly handling of recurring operational tasks.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Custom short-link generation with straightforward management routines",
              "Structured content handling and export patterns for internal operational use",
              "Built as an internal university project rather than a public-facing product"
            ],
            repoUrl: "",
            liveUrl: "",
            image: "assets/img/project-link-toolkit.svg",
            imageAlt: "Link shortener and internal content toolkit preview",
            hideActions: true
          },
          {
            type: "Community automation",
            title: "DiscordBot",
            summary:
              "A multifunctional Discord bot for music, community automation, AI-supported mixtapes, queue management, and server activity features.",
            stack: ["Node.js", "JavaScript", "Discord.js", "YouTube", "Spotify", "Steam"],
            filters: ["Node.js", "JavaScript"],
            features: [
              "Music playback from YouTube and Spotify with queue, loop, shuffle, and AutoDJ",
              "AI-supported mixtape generation, voice-channel group randomizer, and server dashboard tools",
              "Free games and Steam deals feed combined with practical moderation-style automation"
            ],
            repoUrl: "https://github.com/Macstenc/DiscordBot",
            liveUrl: "",
            image: "assets/img/project-discord-bot.svg",
            imageAlt: "DiscordBot project preview"
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
              "Built a solid foundation in programming, systems thinking, and software development while growing practical web skills alongside study."
          },
          {
            title: "Master's Degree in Computer Science",
            subtitle: "The John Paul II Catholic University of Lublin",
            meta: "2023 - 2025",
            description:
              "Expanded that base with more applied work and a stronger link between theory, architecture, and implementation."
            }
        ]
      },
      development: {
        items: [
          {
            title: "Accessibility and interface quality",
            description:
              "I pay close attention to semantics, hierarchy, contrast, and the kind of interaction polish that keeps an interface readable under real use."
          },
          {
            title: "Backend thinking and product logic",
            description:
              "I like understanding how frontend decisions connect to application state, APIs, business logic, and maintainable structure on the backend."
          },
          {
            title: "AI-supported development process",
            description:
              "I use tools such as Codex, Cursor, and Claude to accelerate research, prototyping, refactoring, and debugging. Final code still goes through manual review, adjustment, and verification."
          },
          {
            title: "Delivery and deployment practice",
            description:
              "Linux, Docker, Nginx, SSL, and day-to-day production support taught me to think beyond the editor and ship with more care."
          }
        ]
      },
      contact: {
        cardsTitle: "How to reach me",
        cards: [
          {
            kind: "email",
            label: "Email",
            value: "macstenc@gmail.com",
            href: "",
            description: "The best option for job opportunities, project conversations, and direct contact."
          },
          {
            kind: "phone",
            label: "Phone",
            value: "+48 500 011 322",
            href: "tel:+48500011322",
            description: "Available for scheduled calls and short introductory conversations."
          },
          {
            kind: "github",
            label: "GitHub",
            value: "github.com/Macstenc",
            href: "https://github.com/Macstenc",
            description: "Repositories, code samples, and ongoing practical work."
          },
          {
            kind: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/maciej-stencel-587a88401",
            href: "https://www.linkedin.com/in/maciej-stencel-587a88401/",
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
        noteTitle: "Preferred contact",
        noteText: [
          "The fastest route is direct email or LinkedIn. If you want to review practical work and code samples, GitHub is the best reference point.",
          "I am open to full-stack roles, product teams, web platform work, and selected project-based collaborations."
        ],
        availabilityTitle: "Availability",
        availabilityText: [
          "Based in Lublin, Poland. Open to remote, hybrid, and selected on-site opportunities.",
          "The strongest fit is full-stack web work, Django-backed products, accessibility-aware interfaces, and practical product development."
        ]
      },
      footer: {
        summary:
          "Full-stack portfolio built around clarity, execution discipline, and responsibility for the final result.",
        quickLinksTitle: "Quick links",
        resourcesTitle: "Links",
        resources: [
          { label: "GitHub", href: "https://github.com/Macstenc" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/maciej-stencel-587a88401/" },
          { label: "ShowTheCash", href: "https://showthecash.com/about" },
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
        title: "Maciej Stencel | Full-Stack Developer",
        description:
          "Full-Stack Developer tworzący dopracowane interfejsy, aplikacje webowe oparte o Django i rozwiązania gotowe do wdrożenia, z naciskiem na jakość realizacji.",
        locale: "pl_PL",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Full-Stack Developer",
        menuLabel: "Otwórz menu",
        closeMenuLabel: "Zamknij menu",
        langLabel: "Przełącznik języka",
        themeLabel: "Przełącznik motywu",
        themes: {
          light: "Jasny",
          dark: "Ciemny",
          eclipse: "Eclipse"
        },
        nav: [
          { id: "about", label: "O mnie" },
          { id: "skills", label: "Umiejętności" },
          { id: "workflow", label: "Proces" },
          { id: "experience", label: "Doświadczenie" },
          { id: "projects", label: "Projekty" },
          { id: "education", label: "Edukacja" },
          { id: "contact", label: "Kontakt" }
        ]
      },
      hero: {
        eyebrow: "Realizacja full-stack z myśleniem produktowym, dostępnością i długoterminową niezawodnością",
        role: "Full-Stack Developer",
        summary:
          "Buduję produkty webowe end to end z czytelnym interfejsem, stabilną logiką backendową i wdrożeniem gotowym na pracę w produkcji.",
        status: "Otwartość na role full-stack, platformy webowe i zespoły produktowe",
        highlights: [
          "Dopracowany interfejs i uporządkowane ścieżki użytkownika",
          "Django, API, płatności, wdrożenia i wsparcie produkcji",
          "AI jako wsparcie pracy, nie zastępstwo za weryfikację"
        ],
        primaryCta: "Zobacz projekty",
        secondaryCta: "Pobierz CV",
        stats: [
          {
            value: "Odpowiedzialność full-stack",
            label: "Frontend, backend, integracje i wdrożenie traktuję jako jedną odpowiedzialność za efekt końcowy."
          },
          {
            value: "Myślenie produktowe",
            label: "Liczy się dla mnie czytelna ścieżka użytkownika, sensowne decyzje i spokojne dopracowanie po wdrożeniu."
          },
          {
            value: "Kontrola jakości",
            label: "Nowoczesne narzędzia AI przyspieszają pracę, ale finalny rezultat przechodzi przeze mnie ręcznie."
          }
        ],
        profileLabel: "Szybki profil",
        profileAlt: "Portret Macieja Stencla",
        profileFallbackAlt: "Miejsce na zdjęcie profilowe Macieja Stencla",
        profileMeta: [
          { label: "Baza", value: "Lublin, Polska" },
          { label: "Najlepsze dopasowanie", value: "Role full-stack, platformy webowe, produkty oparte o Django" },
          { label: "Styl pracy", value: "Spokojna realizacja, mocny review, praktyczna odpowiedzialność" }
        ]
      },
        sections: {
          about: {
            tag: "O mnie",
            heading: "Full-stack, który ma sens także po wdrożeniu",
            intro:
              "Dobra praca webowa to nie tylko ekran. Liczy się struktura, dostępność, logika aplikacji i techniczne dopięcie, dzięki któremu produkt działa dobrze także w produkcji."
          },
          skills: {
            tag: "Umiejętności",
            heading: "Narzędzia i praktyki, które wspierają pracę od pomysłu do wdrożenia",
            intro:
              "Najmocniej działam tam, gdzie jakość interfejsu spotyka się z backendowym myśleniem i odpowiedzialną realizacją."
          },
          workflow: {
            tag: "Proces",
            heading: "Jak prowadzę projekt od pomysłu do stabilnego wdrożenia",
            intro:
              "Proces, w którym najpierw doprecyzowuję cele, potem buduję z myślą o utrzymaniu i kończę realną weryfikacją."
          },
          experience: {
            tag: "Doświadczenie",
            heading: "Doświadczenie w dostępności, produktach webowych i pracy na żywych systemach",
            intro:
              "Najważniejszy jest dla mnie zakres pracy: interfejsy, logika aplikacji, utrzymanie platform i poprawianie tego, co działa już na produkcji."
        },
        projects: {
          tag: "Projekty",
          heading: "Wybrane realizacje pokazujące, jak buduję, dopracowuję i weryfikuję efekt",
          intro:
            "To nie są jednorazowe makiety. Każdy projekt pokazuje konkretny sposób pracy, odpowiedzialność techniczną i dbałość o doświadczenie użytkownika."
        },
        education: {
          tag: "Edukacja",
          heading: "Zaplecze informatyczne wzmocnione praktyką projektową",
          intro:
            "Studia dały mi solidną bazę. Największy rozwój przyniosło jednak budowanie, poprawianie i ponowne dopracowywanie własnych projektów."
        },
        development: {
          tag: "Rozwój",
          heading: "Proces, który przyspiesza pracę, ale nie oddaje kontroli nad jakością",
          intro:
            "Lubię nowoczesne narzędzia i sprawne procesy, ale review, odpowiedzialność i jakość końcowa nadal są dla mnie kluczowe."
        },
        contact: {
          tag: "Kontakt",
          heading: "Porozmawiajmy o roli, produkcie albo konkretnej współpracy",
          intro:
            "Sekcja kontaktu jest prosta i praktyczna: email, telefon, GitHub, LinkedIn i lokalizacja w jednym miejscu."
        }
      },
      about: {
        storyTitle: "Profil",
        story: [
          "Pracuję jako full-stack developer z mocnym wyczuciem jakości interfejsu. Zależy mi na hierarchii, rytmie, semantyce i na tym, czy produkt nadal jest czytelny i niezawodny, kiedy trafia na realne dane, treści i ograniczenia produkcyjne.",
          "Mam doświadczenie przy publicznych i wewnętrznych platformach webowych, projektach dostępności, stronach wielojęzycznych, aplikacjach opartych o Django, utrzymaniu CMS-ów oraz wsparciu wdrożeń na Linuxie z Nginx, Dockerem, SSL i produkcyjnym debugowaniem.",
          "Korzystam z narzędzi takich jak Codex, Cursor czy Claude wtedy, gdy realnie pomagają: w researchu, prototypowaniu, refaktoryzacji czy analizie kodu. Przyspieszają pracę, ale nie zastępują oceny. Każde ważniejsze rozwiązanie i tak wymaga ręcznego sprawdzenia, dopracowania i odpowiedzialności po mojej stronie."
        ],
        principlesTitle: "Czego można się po mnie spodziewać",
        principles: [
          "Czytelnych interfejsów z dbałością o semantykę, spacing i decyzje podejmowane pod realną treść.",
          "Swobody w poruszaniu się między frontendem, szczegółami backendu i podstawami wdrożeń, gdy projekt tego wymaga.",
          "Praktycznych decyzji technicznych opartych na utrzymywalności i użyteczności, a nie tylko na efekcie wizualnym.",
          "Świadomego użycia AI: szybko tam, gdzie pomaga, krytycznie tam, gdzie liczy się jakość."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend Systems",
            copy: "Interfejsy, które są czytelne, responsywne, dostępne i po prostu dobrze działają w realnym produkcie.",
            items: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "Angular",
              "TypeScript",
              "Responsive layout",
              "Accessible UI",
              "Design systems",
              "Interaction polish"
            ]
          },
          {
            title: "Backend i integracje",
            copy: "Logika aplikacji, API i spięte ścieżki, które wspierają produkt zamiast go komplikować.",
            items: [
              "Python",
              "Django",
              "REST API",
              "Java",
              "Spring Boot",
              "Authentication patterns",
              "Stripe webhooks",
              "Data-driven features"
            ]
          },
          {
            title: "Delivery i infrastruktura",
            copy: "Wystarczająco mocne zaplecze systemowe, żeby wdrażać, diagnozować problemy i wspierać webowe stacki z większą pewnością.",
            items: [
              "Git",
              "GitHub",
              "Linux",
              "Docker",
              "Docker Compose",
              "Nginx",
              "SSL/TLS",
              "VPS deployment"
            ]
          },
          {
            title: "Proces i jakość",
            copy: "Nowoczesne narzędzia wykorzystywane świadomie, z review i pełną odpowiedzialnością za efekt końcowy.",
            items: [
              "Code review",
              "Debugging",
              "Refaktoryzacja",
              "Dokumentacja techniczna",
              "Codex",
              "Cursor",
              "Claude",
              "AI-supported development"
            ]
          }
        ]
      },
      workflow: {
        items: [
          {
            title: "Discovery i scope",
            copy:
              "Najpierw doprecyzowuję cele i ograniczenia, żeby rozwiązanie było realistyczne i dopasowane do użycia.",
            points: [
              "Określenie użytkowników, interesariuszy i mierzalnego efektu",
              "Wczesne rozpisanie ryzyk, zależności i ograniczeń",
              "Ustalenie zakresu i jakości, zanim zacznie się build"
            ]
          },
          {
            title: "Budowa z kontrolą jakości",
            copy:
              "Tworzę rozwiązanie z myślą o utrzymaniu: czytelny interfejs, stabilna logika i przewidywalne wdrożenie.",
            points: [
              "Dostępny UI i komponenty z uporządkowaną strukturą",
              "Logika backendu spójna z danymi i przepływem produktu",
              "Konfiguracje i dokumentacja gotowe do wdrożenia"
            ]
          },
          {
            title: "Weryfikacja i dowiezienie",
            copy:
              "Na końcu sprawdzam działanie w realnych scenariuszach i dopracowuję to, co decyduje o jakości.",
            points: [
              "Manualne testy i przejście ścieżek krytycznych",
              "Sprawdzenie wydajności i dostępności",
              "Iteracje po feedbacku, a nie tylko po demo"
            ]
          }
        ]
      },
      experience: {
        items: [
          {
            period: "09/2025 - 12/2025",
            type: "Rola komercyjna",
            role: "Digital Accessibility Coordinator / IT Specialist / Developer",
            company: "Uczelniane platformy i usługi cyfrowe",
            summary:
              "Praca łącząca dostępność, utrzymanie platform webowych i wsparcie środowisk produkcyjnych dla usług publicznych oraz wewnętrznych.",
            bullets: [
              "Rozwijałem i utrzymywałem serwisy oparte o Django oraz narzędzia wewnętrzne z uwzględnieniem wymagań dostępności, użyteczności i potrzeb instytucji.",
              "Wspierałem środowiska Linux i Nginx, konfigurację SSL/TLS oraz spokojny przepływ od developmentu do produkcji.",
              "Zajmowałem się wielojęzycznością, utrzymaniem CMS-ów, wsparciem wdrożeń, dokumentacją i codzienną niezawodnością systemów."
            ]
          },
          {
            period: "2024 - obecnie",
            type: "Praca niezależna",
            role: "Twórca full-stackowych produktów webowych",
            company: "Samodzielne projekty w standardzie komercyjnym",
            summary:
              "Buduję praktyczne produkty webowe end to end, łącząc frontend, logikę backendową, płatności i wdrożenie.",
            bullets: [
              "Wdrażałem aplikacje oparte o Django, Stripe Checkout, webhooki, Docker, Nginx i hosting na VPS.",
              "Tworzyłem użyteczne narzędzia i procesy, między innymi wokół płatności, short linków i uporządkowanej pracy na danych.",
              "Korzystałem z asystentów AI przy researchu, refaktoryzacji i debugowaniu, ale finalne rozwiązania zawsze przechodziły przeze mnie przed wdrożeniem."
            ]
          },
          {
            period: "2023 - obecnie",
            type: "Praktyka projektowa",
            role: "Realizacja projektów frontend i full-stack",
            company: "Portfolio, studia i rozwój własnego warsztatu",
            summary:
              "Własne projekty traktuję jak poligon do budowania realnych nawyków wdrożeniowych, a nie jednorazowe demo.",
            bullets: [
              "Projektowałem interfejsy z lepszą hierarchią, spokojniejszym spacingiem i pewniejszym zachowaniem na mobile.",
              "Implementowałem ścieżki oparte o API, logikę po stronie użytkownika i struktury kodu, które da się rozwijać bez chaosu.",
              "Sugestie generowane przez narzędzia traktowałem jak draft do sprawdzenia, adaptacji i weryfikacji, a nie gotowy wynik."
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
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe", "Node.js"],
        items: [
          {
            type: "Produkt live",
            title: "ShowTheCash",
            summary:
              "Produkt webowy związany z płatnościami, z dopracowaną ścieżką użytkownika, integracją Stripe i wdrożeniem przygotowanym do stabilnej pracy na co dzień.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Flow checkoutu spięty z webhookową weryfikacją płatności",
              "Konteneryzowane wdrożenie za Nginxem z SSL i hostingiem VPS",
              "Frontend ustawiony na czytelność, zaufanie i spokojniejszą ścieżkę konwersji"
            ],
            highlight: "Efekt: Stabilny checkout z webhookową weryfikacją i gotowością produkcyjną",
            featured: true,
            repoUrl: "",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.JPG",
            imageAlt: "Podgląd projektu ShowTheCash"
          },
          {
            type: "Platforma live",
            title: "Welcome Center",
            summary:
              "Uczelniana platforma webowa rozwijana z naciskiem na dostępność, wielojęzyczność i spokojne poprawianie jakości w żywym środowisku.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "Implementacja z myśleniem o dostępności w publicznie dostępnej platformie uczelnianej",
              "Obsługa wielojęzyczności i iteracyjne poprawianie działającego serwisu",
              "Wsparcie obejmujące CMS, hosting Linux i codzienną obsługę produkcji"
            ],
            repoUrl: "",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.JPG",
            imageAlt: "Podgląd projektu Welcome Center"
          },
          {
            type: "Platforma live",
            title: "CWN Support Center",
            summary:
              "Publiczna strona centrum wsparcia zbudowana wokół czytelnej nawigacji, dostępnej struktury treści i spokojniejszego przepływu informacji dla studentów oraz kandydatów.",
            stack: ["JavaScript", "Accessibility", "CMS", "Responsive UI"],
            filters: ["JavaScript", "Accessibility"],
            features: [
              "Publiczna architektura informacji dla usług wsparcia i codziennych ścieżek użytkownika",
              "Dostępna prezentacja treści z czytelnym podziałem sekcji i praktycznymi CTA",
              "Strona główna i nawigacja dopracowane tak, by były spokojniejsze i łatwiejsze w użyciu"
            ],
            highlight: "Efekt: Czytelniejszy i spokojniejszy przepływ informacji dla odbiorców publicznych",
            featured: true,
            repoUrl: "",
            liveUrl: "https://cwn.uws.edu.pl/",
            image: "assets/img/project-cwn.jpg",
            imageAlt: "Podgląd strony centrum wsparcia CWN"
          },
          {
            type: "Koncepcja full-stack",
            title: "Intelligent Ecommerce Platform",
            summary:
              "Projekt e-commerce rozwijany po to, żeby połączyć rekomendacje, logikę produktową i integrację full-stack, a nie tylko sam wygląd interfejsu.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Logika rekomendacji spięta z pełniejszym przepływem zakupowym",
              "REST API, autoryzacja, obsługa zamówień i konteneryzowane środowisko lokalne",
              "Interfejs traktowany jako ćwiczenie z projektowania produktu, nie jednorazowa makieta"
            ],
            repoUrl: "https://github.com/Macstenc/intelligent-ecommerce-platform",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Podgląd projektu Intelligent Ecommerce Platform"
          },
          {
            type: "Utility tooling",
            title: "Link Shortener & Content Toolkit",
            summary:
              "Wewnętrzny projekt uczelniany zbudowany wokół short linków, pracy na treści i uporządkowanych procedur administracyjnych.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Generowanie short linków z prostym przepływem zarządzania",
              "Przetwarzanie i eksport treści pod wewnętrzne potrzeby uczelni",
              "Czytelne, użytkowe UI dla zadań administracyjnych i utrzymaniowych"
            ],
            repoUrl: "",
            liveUrl: "",
            image: "assets/img/project-link-toolkit.svg",
            imageAlt: "Podgląd projektu shortenera i wewnętrznego toolkitu treści",
            hideActions: true
          },
          {
            type: "Automatyzacja community",
            title: "DiscordBot",
            summary:
              "Wielofunkcyjny bot Discord do muzyki, automatyzacji community, AI-mixtape'ów, zarządzania kolejką i dodatkowych funkcji serwerowych.",
            stack: ["Node.js", "JavaScript", "Discord.js", "YouTube", "Spotify", "Steam"],
            filters: ["Node.js", "JavaScript"],
            features: [
              "Muzyka z YouTube i Spotify z kolejką, loopem, shuffle i AutoDJ-em",
              "AI-mixtape'y, losowanie grup na voice i narzędzia dashboardowe dla serwera",
              "Feed darmowych gier i promocji Steam połączony z praktyczną automatyzacją"
            ],
            repoUrl: "https://github.com/Macstenc/DiscordBot",
            liveUrl: "",
            image: "assets/img/project-discord-bot.svg",
            imageAlt: "Podgląd projektu DiscordBot"
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
              "Solidna baza z programowania, myślenia systemowego i rozwoju oprogramowania, równolegle rozwijana przez praktykę webową."
          },
          {
            title: "Studia magisterskie z informatyki",
            subtitle: "Katolicki Uniwersytet Lubelski Jana Pawła II",
            meta: "2023 - 2025",
            description:
              "Pogłębienie tej bazy o bardziej praktyczne spojrzenie na architekturę, implementację i jakość techniczną projektów."
          }
        ]
      },
      development: {
        items: [
          {
            title: "Dostępność i jakość interfejsu",
            description:
              "Zwracam uwagę na semantykę, hierarchię, kontrast i taki poziom dopracowania interakcji, który pozostaje czytelny także przy realnym użyciu."
          },
          {
            title: "Myślenie backendowe i logika produktu",
            description:
              "Lubię rozumieć, jak decyzje frontendowe łączą się ze stanem aplikacji, API, logiką biznesową i utrzymywalną strukturą po stronie backendu."
          },
          {
            title: "AI-supported development process",
            description:
              "Korzystam z narzędzi takich jak Codex, Cursor i Claude, żeby przyspieszyć research, prototypowanie, refaktoryzację i debugging. Finalny kod zawsze przechodzi jednak ręczne review, poprawki i weryfikację."
          },
          {
            title: "Praktyka wdrożeń i utrzymania",
            description:
              "Linux, Docker, Nginx, SSL i codzienne wsparcie produkcji nauczyły mnie patrzeć szerzej niż tylko na sam kod w edytorze."
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
            href: "",
            description: "Najlepsza opcja przy rekrutacji, projektach i bezpośrednim kontakcie."
          },
          {
            kind: "phone",
            label: "Telefon",
            value: "+48 500 011 322",
            href: "tel:+48500011322",
            description: "Dostępny na umówione rozmowy i krótkie rozmowy wstępne."
          },
          {
            kind: "github",
            label: "GitHub",
            value: "github.com/Macstenc",
            href: "https://github.com/Macstenc",
            description: "Repozytoria, próbki kodu i bieżąca praktyczna praca."
          },
          {
            kind: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/maciej-stencel-587a88401",
            href: "https://www.linkedin.com/in/maciej-stencel-587a88401/",
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
        noteTitle: "Preferowany kontakt",
        noteText: [
          "Najszybsza droga kontaktu to bezpośredni email albo LinkedIn. Jeśli chcesz zobaczyć praktyczną pracę i próbki kodu, najlepszym punktem odniesienia pozostaje GitHub.",
          "Jestem otwarty na role full-stack, pracę w zespołach produktowych, platformy webowe oraz wybrane współprace projektowe."
        ],
        availabilityTitle: "Dostępność",
        availabilityText: [
          "Na co dzień działam z Lublina. Jestem otwarty na remote, hybrydę i wybrane opcje on-site.",
          "Najlepsze dopasowanie to full-stack web, produkty oparte o Django, interfejsy z myśleniem o dostępności i praktyczny rozwój produktów webowych."
        ]
      },
      footer: {
        summary:
          "Portfolio full-stack nastawione na czytelność, jakość realizacji i odpowiedzialność za efekt końcowy.",
        quickLinksTitle: "Szybkie linki",
        resourcesTitle: "Linki",
        resources: [
          { label: "GitHub", href: "https://github.com/Macstenc" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/maciej-stencel-587a88401/" },
          { label: "ShowTheCash", href: "https://showthecash.com/about" },
          { label: "Pobierz CV", href: "assets/files/maciej-stencel-cv.pdf" }
        ],
        copy: "Wszelkie prawa zastrzeżone."
      },
      ui: {
        backToTop: "Do góry"
      }
    }
  }
};
