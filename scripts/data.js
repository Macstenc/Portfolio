// Update this file first when you want to personalize the portfolio.
window.PORTFOLIO_DATA = {
  settings: {
    fullName: "Maciej Stencel",
    defaultLang: "en",
    languageStorageKey: "portfolio-lang",
    themeStorageKey: "portfolio-theme",
    defaultTheme: "dark",
    siteUrl: "https://macstenc.github.io/Portfolio/",
    profileImage: "assets/img/profile.jpg",
    profileFallback: "assets/img/profile-placeholder.svg",
    cvFile: "assets/files/maciej-stencel-cv.pdf",
    themes: {
      light: {
        colorScheme: "light",
        themeColor: "#eef3f8"
      },
      dark: {
        colorScheme: "dark",
        themeColor: "#08101d"
      },
      retro: {
        colorScheme: "dark",
        themeColor: "#18150f"
      }
    }
  },
  content: {
    en: {
      meta: {
        title: "Maciej Stencel | Frontend Developer & Web Engineer",
        description:
          "Frontend developer focused on accessible interfaces, Django-backed web products, and delivery quality from implementation through deployment.",
        locale: "en_GB",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Frontend Developer",
        menuLabel: "Open menu",
        closeMenuLabel: "Close menu",
        langLabel: "Language switcher",
        themeLabel: "Theme switcher",
        themes: {
          light: "Light",
          dark: "Dark",
          retro: "Retro"
        },
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
        eyebrow: "Frontend delivery grounded in product sense and technical discipline",
        role: "Frontend Developer with Django and Delivery Experience",
        summary:
          "I build interfaces that feel clear, deliberate, and reliable in day-to-day use. My strongest work combines frontend quality, accessibility, Django-backed products, and the kind of follow-through that still matters after launch.",
        status: "Open to frontend and web product opportunities",
        highlights: [
          "Accessible UI and calm product flows",
          "Django, Linux, Docker, and deployment support",
          "AI-assisted workflow with manual review and verification"
        ],
        primaryCta: "View projects",
        secondaryCta: "Download CV",
        stats: [
          {
            value: "Frontend focus",
            label: "Readable hierarchy, thoughtful interactions, and interfaces built to stay clear under real content."
          },
          {
            value: "Delivery mindset",
            label: "Implementation, debugging, deployment, and refinement treated as one continuous responsibility."
          },
          {
            value: "AI, used carefully",
            label: "Uses tools like Codex, Cursor, and Claude to move faster, then reviews, corrects, and verifies the result."
          }
        ],
        profileLabel: "Professional snapshot",
        profileAlt: "Portrait of Maciej Stencel",
        profileFallbackAlt: "Profile placeholder for Maciej Stencel",
        profileMeta: [
          { label: "Base", value: "Lublin, Poland" },
          { label: "Best fit", value: "Frontend roles, web platforms, Django-backed products" },
          { label: "Work style", value: "Steady delivery, strong review habits, practical ownership" }
        ]
      },
      sections: {
        about: {
          tag: "About",
          heading: "A frontend-focused developer who cares about what happens after launch",
          intro:
            "The best UI work is not only visual. It needs clear structure, accessibility, technical discipline, and enough product sense to stay solid in production."
        },
        skills: {
          tag: "Skills",
          heading: "Tools and habits that help me move work from concept to production",
          intro:
            "My strongest work sits where frontend quality, web delivery, and careful technical follow-through meet."
        },
        experience: {
          tag: "Experience",
          heading: "Hands-on work across accessibility, platforms, and product-style delivery",
          intro:
            "The titles matter less than the scope: shipping interfaces, maintaining systems, and improving live web environments."
        },
        projects: {
          tag: "Projects",
          heading: "Selected work that shows how I build, refine, and verify results",
          intro:
            "Each project reflects practical execution, product thinking, and care for what the final experience feels like."
        },
        education: {
          tag: "Education",
          heading: "Computer science background supported by practical project work",
          intro:
            "Formal study gave me a strong base. Most of the growth since then has come from building, refining, and shipping."
        },
        development: {
          tag: "Development",
          heading: "A workflow that values speed, but not at the expense of judgment",
          intro:
            "I keep my toolkit current, but I treat quality, review, and accountability as non-negotiable."
        },
        contact: {
          tag: "Contact",
          heading: "Let’s talk about roles, products, or useful work",
          intro:
            "This site stays frontend-only. The form opens a prepared email draft instead of pretending to send data to a backend."
        }
      },
      about: {
        storyTitle: "How I work",
        story: [
          "I work closest to the frontend, but I think beyond the screen. I care about hierarchy, pacing, accessibility, and whether an interface still feels solid once it meets real content and real users.",
          "My experience covers public-facing and internal websites, accessibility improvements, multilingual content, CMS maintenance, Django-based applications, and Linux-based deployment support with Nginx, Docker, SSL, and production debugging.",
          "I use tools such as Codex, Cursor, and Claude to speed up research, prototyping, refactoring, and review preparation. I treat them as support, not a substitute for engineering judgment. Anything meaningful still needs verification, refinement, and responsibility before it ships."
        ],
        principlesTitle: "What you can expect",
        principles: [
          "Clear interfaces with attention to semantics, spacing, and user flow.",
          "Practical decisions guided by maintainability, not just visual effect.",
          "Comfort moving between frontend implementation, backend details, and deployment basics.",
          "Responsible use of AI tooling: fast where it helps, critical where it matters."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend",
            copy: "Building interfaces that are clear, responsive, accessible, and pleasant to use in real product contexts.",
            items: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "Responsive layout",
              "Accessible UI",
              "Design systems",
              "Interaction polish"
            ]
          },
          {
            title: "Backend & APIs",
            copy: "Application logic and integrations that support product flows instead of getting in the way of them.",
            items: [
              "Python",
              "Django",
              "REST APIs",
              "Java",
              "Spring Boot",
              "Authentication flows",
              "Stripe webhooks",
              "Data-driven features"
            ]
          },
          {
            title: "Delivery & Infrastructure",
            copy: "Enough systems knowledge to ship, troubleshoot, and support small-to-mid web stacks with more confidence.",
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
            title: "Workflow & Quality",
            copy: "Modern tooling used with judgment, review discipline, and accountability for the final result.",
            items: [
              "Code review",
              "Debugging",
              "Refactoring",
              "Technical documentation",
              "Codex",
              "Cursor",
              "Claude",
              "AI-assisted development"
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
              "Supported Linux and Nginx environments, SSL/TLS configuration, and steady development-to-production workflows.",
              "Handled multilingual content, CMS upkeep, deployment support, documentation, and day-to-day reliability work."
            ]
          },
          {
            period: "2024 - Present",
            type: "Independent work",
            role: "Web product builder and technical freelancer",
            company: "Self-directed commercial-style projects",
            summary:
              "Built practical web products end to end, combining frontend implementation, backend logic, payments, and deployment.",
            bullets: [
              "Shipped Django-based applications with Stripe Checkout, webhook verification, Docker, Nginx, and VPS hosting.",
              "Built utility products and custom workflows such as payment flows, short-link tooling, and structured data features.",
              "Used AI assistants selectively for research, refactoring, and debugging support, then reviewed the final implementation before shipping."
            ]
          },
          {
            period: "2023 - Present",
            type: "Project practice",
            role: "Frontend and full-stack project execution",
            company: "Portfolio work, coursework, and applied product practice",
            summary:
              "Used self-driven projects to build real delivery habits rather than one-off demos.",
            bullets: [
              "Designed interfaces with clearer hierarchy, calmer spacing, and stronger mobile behavior.",
              "Implemented API-driven flows, user-facing logic, and maintainable structure with version control and iterative testing.",
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
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe"],
        items: [
          {
            type: "Live platform",
            title: "ShowTheCash",
            summary:
              "A payment-focused web platform with a cleaner customer journey, Stripe integration, and deployment set up for stable day-to-day use.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Checkout flow connected to webhook-based payment verification",
              "Containerized deployment behind Nginx with SSL and VPS hosting",
              "A calm frontend focused on conversion clarity rather than visual noise"
            ],
            repoUrl: "https://github.com/Macstenc/showthecash-platform",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.svg",
            imageAlt: "ShowTheCash project preview"
          },
          {
            type: "Platform work",
            title: "Accessible University Web Suite",
            summary:
              "Accessibility and maintenance work across public and internal sites, with improvements to multilingual content handling and delivery quality.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "Accessibility-minded implementation and support in a public-sector style environment",
              "Multilingual content handling and iterative improvements across existing platforms",
              "Maintenance work spanning CMS systems, Linux hosting, and deployment support"
            ],
            repoUrl: "https://github.com/Macstenc/accessible-web-suite",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.svg",
            imageAlt: "Accessible university project preview"
          },
          {
            type: "Full-stack concept",
            title: "Smart Commerce Recommender",
            summary:
              "A commerce-oriented application concept built to exercise recommendation logic, product flows, and full-stack integration rather than just UI mockups.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Recommendation logic connected to a fuller shopping flow",
              "REST API, authentication, order handling, and container-based local setup",
              "Interface work treated as product design practice, not a throwaway exercise"
            ],
            repoUrl: "https://github.com/Macstenc/smart-commerce-engine",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Smart commerce recommender project preview"
          },
          {
            type: "Utility tooling",
            title: "Link Shortener & Content Toolkit",
            summary:
              "A small product-style toolset built around short links, structured content handling, and admin-friendly workflows.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Custom short-link generation with straightforward management workflows",
              "Structured content extraction and export patterns inspired by crawler work",
              "Clear, admin-like UI for utility tasks and maintenance flows"
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
              "Built a solid foundation in programming, systems thinking, and software development while growing practical web skills alongside study."
          },
          {
            title: "Master's Degree in Computer Science",
            subtitle: "The John Paul II Catholic University of Lublin",
            meta: "2023 - 2025",
            description:
              "Expanded that base with more applied work and a stronger connection between theory, architecture, and implementation."
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
            title: "Delivery and deployment practice",
            description:
              "Linux, Docker, Nginx, SSL, and day-to-day production support taught me to think beyond the editor and ship with more care."
          },
          {
            title: "AI-assisted development workflow",
            description:
              "I use tools such as Codex, Cursor, and Claude to accelerate research, prototyping, refactoring, and debugging. Final code still goes through manual review, adjustment, and verification."
          },
          {
            title: "Self-driven product work",
            description:
              "Most of my growth has come from building projects end to end, then revisiting them to improve structure, UX, performance, and technical decisions."
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
          "This form does not pretend to submit data to a backend. It simply opens a clean email draft in your default mail app.",
          "If you prefer, you can also contact me directly through email, GitHub, LinkedIn, or my live product website."
        ],
        formTitle: "Start the conversation",
        formIntro: "Share the role, project, or challenge and I will prepare the message in your mail app.",
        fields: [
          { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe", required: true, autocomplete: "name" },
          { name: "email", label: "Your email", type: "email", placeholder: "jane@company.com", required: true, autocomplete: "email" },
          { name: "subject", label: "Subject", type: "text", placeholder: "Frontend role at Example Studio", required: true, autocomplete: "organization-title" },
          { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about the role, project, or collaboration opportunity.", required: true, autocomplete: "off" }
        ],
        submitLabel: "Open email draft",
        statusMessage:
          "Your mail client should open with a prefilled draft. If nothing happens, email me directly at macstenc@gmail.com.",
        subjectPrefix: "Portfolio contact",
        bodyIntro: "Hello Maciej,"
      },
      footer: {
        summary:
          "Frontend portfolio built around clarity, delivery quality, and practical responsibility for the final result.",
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
        title: "Maciej Stencel | Frontend Developer i Web Engineer",
        description:
          "Frontend developer skupiony na dostępnych interfejsach, produktach webowych opartych o Django i jakości dowożenia od implementacji po wdrożenie.",
        locale: "pl_PL",
        ogImage: "assets/img/og-cover.svg"
      },
      header: {
        brandRole: "Frontend Developer",
        menuLabel: "Otwórz menu",
        closeMenuLabel: "Zamknij menu",
        langLabel: "Przełącznik języka",
        themeLabel: "Przełącznik motywu",
        themes: {
          light: "Jasny",
          dark: "Ciemny",
          retro: "Retro"
        },
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
        eyebrow: "Frontend oparty na jakości, produkcie i odpowiedzialnym dowożeniu",
        role: "Frontend Developer z doświadczeniem w Django i wdrożeniach",
        summary:
          "Tworzę interfejsy, które są czytelne, spokojne i dopracowane w codziennym użyciu. Najmocniej działam tam, gdzie frontendowa jakość łączy się z dostępnością, produktowym myśleniem i techniczną odpowiedzialnością po wdrożeniu.",
        status: "Otwartość na role frontendowe i pracę przy produktach webowych",
        highlights: [
          "Dostępne UI i uporządkowane flow użytkownika",
          "Django, Linux, Docker i wsparcie wdrożeń",
          "AI jako wsparcie pracy, nie zastępstwo za weryfikację"
        ],
        primaryCta: "Zobacz projekty",
        secondaryCta: "Pobierz CV",
        stats: [
          {
            value: "Jakość frontendu",
            label: "Czytelna hierarchia, przemyślane interakcje i interfejsy, które dobrze pracują z realną treścią."
          },
          {
            value: "Odpowiedzialne dowożenie",
            label: "Implementacja, poprawki, wdrożenie i dalsze dopracowanie traktowane jako jedna odpowiedzialność."
          },
          {
            value: "AI z kontrolą",
            label: "Korzystam z Codex, Cursor i Claude, żeby pracować szybciej, ale finalny efekt zawsze sprawdzam samodzielnie."
          }
        ],
        profileLabel: "Szybki profil",
        profileAlt: "Portret Macieja Stencla",
        profileFallbackAlt: "Miejsce na zdjęcie profilowe Macieja Stencla",
        profileMeta: [
          { label: "Baza", value: "Lublin, Polska" },
          { label: "Najlepsze dopasowanie", value: "Frontend, platformy webowe, produkty oparte o Django" },
          { label: "Styl pracy", value: "Spokojne dowożenie, mocny review, praktyczna odpowiedzialność" }
        ]
      },
      sections: {
        about: {
          tag: "O mnie",
          heading: "Frontend, który ma sens także po wdrożeniu",
          intro:
            "Najlepsza praca frontendowa nie kończy się na wyglądzie. Liczą się też struktura, dostępność, wydajność i to, czy rozwiązanie da się spokojnie utrzymać."
        },
        skills: {
          tag: "Umiejętności",
          heading: "Narzędzia i praktyki, które pomagają mi dowozić porządną pracę",
          intro:
            "Najmocniej działam na styku jakości interfejsu, webowego delivery i technicznej odpowiedzialności za efekt końcowy."
        },
        experience: {
          tag: "Doświadczenie",
          heading: "Praktyka w obszarze dostępności, platform webowych i projektów produktowych",
          intro:
            "Liczy się dla mnie nie tylko nazwa stanowiska, ale zakres pracy: interfejsy, utrzymanie, poprawki, wdrożenia i jakość na produkcji."
        },
        projects: {
          tag: "Projekty",
          heading: "Wybrane realizacje pokazujące, jak projektuję, buduję i sprawdzam efekty",
          intro:
            "To nie są przypadkowe makiety. Każdy projekt pokazuje konkretny sposób pracy, odpowiedzialność techniczną i dbałość o detal."
        },
        education: {
          tag: "Edukacja",
          heading: "Zaplecze informatyczne wsparte praktyką projektową",
          intro:
            "Studia dały mi dobrą bazę techniczną, ale największy rozwój przyniosło budowanie, poprawianie i dowożenie własnych projektów."
        },
        development: {
          tag: "Rozwój",
          heading: "Workflow, który przyspiesza pracę, ale nie oddaje kontroli nad jakością",
          intro:
            "Cenię narzędzia i nawyki, które pomagają pracować szybciej, ale bez rezygnacji z odpowiedzialności za wynik."
        },
        contact: {
          tag: "Kontakt",
          heading: "Porozmawiajmy o roli, produkcie albo konkretnej współpracy",
          intro:
            "To portfolio jest w pełni frontendowe. Formularz nie udaje backendu, tylko otwiera przygotowany draft wiadomości."
        }
      },
      about: {
        storyTitle: "Jak pracuję",
        story: [
          "Najbliżej mi do frontendu, ale patrzę szerzej niż tylko na warstwę wizualną. Zależy mi na tym, jak interfejs prowadzi użytkownika, jak pracuje z realną treścią i czy po wdrożeniu nadal jest czytelny, szybki i łatwy do utrzymania.",
          "Pracowałem przy serwisach publicznych i wewnętrznych, wdrożeniach dostępności, stronach wielojęzycznych, CMS-ach oraz aplikacjach webowych opartych o Django. Mam też praktykę przy Linuxie, Nginxie, Dockerze, SSL i produkcyjnym debugowaniu.",
          "Korzystam z narzędzi takich jak Codex, Cursor czy Claude, gdy pomagają szybciej zrobić research, prototyp, refaktoryzację albo analizę kodu. Traktuję je jednak jako wsparcie. Finalne rozwiązanie zawsze wymaga mojej oceny, poprawek i odpowiedzialności po mojej stronie."
        ],
        principlesTitle: "Czego można się po mnie spodziewać",
        principles: [
          "Czytelnych interfejsów z dbałością o semantykę, spacing i flow użytkownika.",
          "Praktycznych decyzji opartych na utrzymywalności, a nie wyłącznie na efekcie wizualnym.",
          "Swobody w poruszaniu się między frontendem, szczegółami backendu i podstawami wdrożeń.",
          "Świadomego użycia AI: szybko tam, gdzie pomaga, krytycznie tam, gdzie liczy się jakość."
        ]
      },
      skills: {
        groups: [
          {
            title: "Frontend",
            copy: "Tworzenie interfejsów, które są czytelne, responsywne, dostępne i po prostu dobrze się z nich korzysta w realnym produkcie.",
            items: [
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
              "Responsive layout",
              "Accessible UI",
              "Design systems",
              "Interaction polish"
            ]
          },
          {
            title: "Backend i API",
            copy: "Logika aplikacji i integracje, które wspierają produktowy flow zamiast go komplikować.",
            items: [
              "Python",
              "Django",
              "REST API",
              "Java",
              "Spring Boot",
              "Authentication flows",
              "Stripe webhooks",
              "Data-driven features"
            ]
          },
          {
            title: "Delivery i infrastruktura",
            copy: "Wystarczająco mocne zaplecze systemowe, żeby wdrażać, diagnozować problemy i wspierać mniejsze oraz średnie stacki webowe.",
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
            title: "Workflow i jakość",
            copy: "Nowoczesne narzędzia wykorzystywane świadomie, z review i pełną odpowiedzialnością za efekt końcowy.",
            items: [
              "Code review",
              "Debugging",
              "Refaktoryzacja",
              "Dokumentacja techniczna",
              "Codex",
              "Cursor",
              "Claude",
              "AI-assisted development"
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
              "Rozwijałem i utrzymywałem serwisy oparte o Django oraz narzędzia wewnętrzne z uwzględnieniem wymagań dostępności i potrzeb instytucji.",
              "Wspierałem środowiska Linux i Nginx, konfigurację SSL/TLS oraz spokojny przepływ od developmentu do produkcji.",
              "Zajmowałem się wielojęzycznością, utrzymaniem CMS-ów, wsparciem wdrożeń, dokumentacją i codzienną niezawodnością systemów."
            ]
          },
          {
            period: "2024 - obecnie",
            type: "Praca niezależna",
            role: "Twórca produktów webowych i freelancer techniczny",
            company: "Samodzielne projekty w standardzie komercyjnym",
            summary:
              "Buduję praktyczne produkty webowe end to end, łącząc frontend, logikę backendową, płatności i wdrożenie.",
            bullets: [
              "Wdrażałem aplikacje oparte o Django, Stripe Checkout, webhooki, Docker, Nginx i hosting na VPS.",
              "Tworzyłem użyteczne narzędzia i workflowy, między innymi wokół płatności, short linków i uporządkowanej pracy na danych.",
              "Korzystałem z asystentów AI przy researchu, refaktoryzacji i debugowaniu, ale finalne rozwiązania zawsze przechodziły przeze mnie przed wdrożeniem."
            ]
          },
          {
            period: "2023 - obecnie",
            type: "Praktyka projektowa",
            role: "Realizacja projektów frontend i full-stack",
            company: "Portfolio, studia i praca nad własnym warsztatem",
            summary:
              "Własne projekty traktuję jak poligon do budowania realnych nawyków delivery, a nie jednorazowe demo.",
            bullets: [
              "Projektowałem interfejsy z lepszą hierarchią, spokojniejszym spacingiem i pewniejszym zachowaniem na mobile.",
              "Implementowałem flow oparte o API, logikę po stronie użytkownika i struktury kodu, które da się rozwijać bez chaosu.",
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
        filters: ["Django", "Python", "JavaScript", "Angular", "Java", "Docker", "Accessibility", "Stripe"],
        items: [
          {
            type: "Platforma live",
            title: "ShowTheCash",
            summary:
              "Platforma webowa związana z płatnościami, z dopracowaną ścieżką użytkownika, integracją Stripe i wdrożeniem przygotowanym do stabilnego działania na co dzień.",
            stack: ["Django", "JavaScript", "Stripe", "Docker", "Nginx", "VPS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Stripe"],
            features: [
              "Flow checkoutu spięty z webhookową weryfikacją płatności",
              "Konteneryzowane wdrożenie za Nginxem z SSL i hostingiem VPS",
              "Spokojny frontend nastawiony na czytelność procesu, a nie wizualny hałas"
            ],
            repoUrl: "https://github.com/Macstenc/showthecash-platform",
            liveUrl: "https://showthecash.com/",
            image: "assets/img/project-showthecash.svg",
            imageAlt: "Podgląd projektu ShowTheCash"
          },
          {
            type: "Praca platformowa",
            title: "Accessible University Web Suite",
            summary:
              "Prace nad dostępnością i utrzymaniem serwisów publicznych oraz wewnętrznych, z naciskiem na wielojęzyczność i jakość kolejnych iteracji.",
            stack: ["Django", "JavaScript", "Accessibility", "Docker", "CMS"],
            filters: ["Django", "Python", "JavaScript", "Docker", "Accessibility"],
            features: [
              "Implementacja i wsparcie z myśleniem o dostępności w środowisku zbliżonym do sektora publicznego",
              "Obsługa wielojęzyczności i stopniowe poprawianie istniejących platform",
              "Utrzymanie obejmujące CMS-y, hosting Linux i wsparcie wdrożeń"
            ],
            repoUrl: "https://github.com/Macstenc/accessible-web-suite",
            liveUrl: "https://welcome.uws.edu.pl/pl/",
            image: "assets/img/project-accessible-suite.svg",
            imageAlt: "Podgląd projektu dostępnej platformy uczelnianej"
          },
          {
            type: "Koncepcja full-stack",
            title: "Smart Commerce Recommender",
            summary:
              "Koncepcja aplikacji e-commerce rozwijana po to, żeby przećwiczyć flow produktowe, rekomendacje i integrację full-stack, a nie tylko sam wygląd UI.",
            stack: ["Angular", "Java", "Spring Boot", "MongoDB", "Docker"],
            filters: ["Angular", "Java", "Docker"],
            features: [
              "Logika rekomendacji spięta z pełniejszym przepływem zakupowym",
              "REST API, autoryzacja, obsługa zamówień i konteneryzowane środowisko lokalne",
              "Interfejs traktowany jako ćwiczenie z projektowania produktu, nie jednorazowa makieta"
            ],
            repoUrl: "https://github.com/Macstenc/smart-commerce-engine",
            liveUrl: "",
            image: "assets/img/project-commerce-engine.svg",
            imageAlt: "Podgląd projektu Smart Commerce Recommender"
          },
          {
            type: "Utility tooling",
            title: "Link Shortener & Content Toolkit",
            summary:
              "Niewielki zestaw narzędzi w stylu produktowym, zbudowany wokół short linków, pracy na treści i uporządkowanych workflowów administracyjnych.",
            stack: ["Python", "Django", "JavaScript", "PostgreSQL"],
            filters: ["Django", "Python", "JavaScript"],
            features: [
              "Generowanie short linków z prostym przepływem zarządzania",
              "Przetwarzanie i eksport treści inspirowane pracą nad crawlerami",
              "Czytelne, administracyjne UI dla zadań użytkowych i utrzymaniowych"
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
              "Zwracam uwagę na semantykę, hierarchię, kontrast i taki poziom dopracowania interakcji, który zostaje czytelny także przy realnym użyciu."
          },
          {
            title: "Praktyka delivery i wdrożeń",
            description:
              "Linux, Docker, Nginx, SSL i codzienne wsparcie produkcji nauczyły mnie patrzeć szerzej niż tylko na sam kod w edytorze."
          },
          {
            title: "AI-assisted development workflow",
            description:
              "Korzystam z narzędzi takich jak Codex, Cursor i Claude, żeby przyspieszyć research, prototypowanie, refaktoryzację i debugging. Finalny kod zawsze przechodzi jednak ręczne review, poprawki i weryfikację."
          },
          {
            title: "Samodzielna praca produktowa",
            description:
              "Najwięcej rozwoju daje mi budowanie projektów end to end i wracanie do nich po to, żeby poprawić strukturę, UX, wydajność oraz decyzje techniczne."
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
          "Ten formularz nie udaje wysyłki do backendu. Po prostu otwiera czytelny draft wiadomości w Twojej domyślnej aplikacji pocztowej.",
          "Jeśli wolisz, możesz też napisać do mnie bezpośrednio przez email, GitHub, LinkedIn albo stronę projektu live."
        ],
        formTitle: "Zacznij rozmowę",
        formIntro: "Opisz rolę, projekt lub problem, a strona przygotuje gotową wiadomość w Twojej aplikacji pocztowej.",
        fields: [
          { name: "name", label: "Twoje imię", type: "text", placeholder: "Jan Kowalski", required: true, autocomplete: "name" },
          { name: "email", label: "Twój email", type: "email", placeholder: "jan@firma.pl", required: true, autocomplete: "email" },
          { name: "subject", label: "Temat", type: "text", placeholder: "Rola frontend developera w Example Studio", required: true, autocomplete: "organization-title" },
          { name: "message", label: "Wiadomość", type: "textarea", placeholder: "Napisz kilka zdań o roli, projekcie albo możliwości współpracy.", required: true, autocomplete: "off" }
        ],
        submitLabel: "Otwórz draft emaila",
        statusMessage:
          "Powinna otworzyć się Twoja aplikacja pocztowa z uzupełnioną wiadomością. Jeśli nic się nie wydarzy, napisz bezpośrednio na macstenc@gmail.com.",
        subjectPrefix: "Kontakt z portfolio",
        bodyIntro: "Cześć Maciej,"
      },
      footer: {
        summary:
          "Portfolio frontendowe nastawione na czytelność, jakość dowożenia i techniczną odpowiedzialność za efekt końcowy.",
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
        backToTop: "Do góry"
      }
    }
  }
};
