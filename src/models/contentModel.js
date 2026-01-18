
export const content = {
    en: {
        meta: {
            title: "Propeak | English on Demand"
        },
        hero: {
            subtitle: "SPEAK FREELY",
            title: "English on <span>Demand</span>",
            description: "Connect with a Native Speaker in 2 minutes. No booking required. Sessions are 20 minutes long. Available 7:00 AM – 10:00 PM.",
            buttons: [
                { text: "Start Now", link: "#0", class: "flat-btn btn-active" },
                { text: "Learn More", link: "#0", class: "fill-btn" }
            ],
            images: {
                main: "/assets/img/header/header-img.png",
                shapes: [
                    "/assets/img/shapes/Ellipse-01.png",
                    "/assets/img/shapes/Ellipse-02.png",
                    "/assets/img/shapes/Vector-15.png",
                    "/assets/img/header/plane.png",
                    "/assets/img/icon/location.png"
                ]
            }
        },
        features: [
            {
                iconClass: "fa-regular fa-calendar-xmark",
                title: "No Appointments Needed",
                description: "Forget about rigid schedules. Just log in and start speaking whenever you have a moment.",
                link: "#0"
            },
            {
                iconClass: "fa-solid fa-users",
                title: "Native Speakers",
                description: "Learn from people who speak English natively. Tutors from USA, UK, Canada, and Australia.",
                link: "#0"
            },
            {
                iconClass: "fa-regular fa-clock",
                title: "Short Sessions",
                description: "20-minute sessions are perfect for maintaining focus and fitting into a busy day.",
                link: "#0"
            }
        ],
        feedbacks: {
            subtitle: "FEEDBACK",
            title: "What our <span>students</span> say",
            students: [
                { name: "Anna Kowalska", university: "IT Manager", image: "/assets/img/sections/students/student-01.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Peter Jones", university: "Student", image: "/assets/img/sections/students/student-02.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Kate Wilson", university: "Freelancer", image: "/assets/img/sections/students/student-03.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Mark Smith", university: "Entrepreneur", image: "/assets/img/sections/students/student-04.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" }
            ]
        },
        destinations: {
            title: "Our Tutors' Origins",
            description: "We work with certified tutors from major English-speaking countries.",
            items: [
                { name: "USA", image: "/assets/img/sections/destination/usa.png" },
                { name: "UK", image: "/assets/img/sections/destination/australia.png" }, // "australia.png" is actually the UK flag
                { name: "Canada", image: "/assets/img/sections/destination/canda.png" },
                { name: "Australia", image: "/assets/img/sections/destination/usa.png" } // Temporary placeholder until AU flag is found
            ]
        },
        about: {
            subtitle: "ABOUT US",
            title: "Why Choose Propeak?",
            paragraphs: [
                "Propeak is designed for busy professionals and students who want to improve their English speaking skills without the hassle of scheduling.",
                "We believe that the best way to learn a language is by speaking it. That's why we provide instant access to Native Speakers, giving you the freedom to learn on your own terms."
            ],
            stats: [
                { value: "50", label: "Tutors", suffix: "+" },
                { value: "15", label: "Students", suffix: "k+" },
                { value: "98", label: "Satisfaction", suffix: "%" }
            ],
            image: "/assets/img/sections/about/student-in-library.png"
        },
        categories: {
            subtitle: "CATEGORIES",
            title: "Popular Topics",
            disciplines: [
                { name: "Business", image: "/assets/img/sections/desipline/business.png" },
                { name: "Travel", image: "/assets/img/sections/desipline/foresty.png" },
                { name: "Technology", image: "/assets/img/sections/desipline/pc.png" },
                { name: "Culture", image: "/assets/img/sections/desipline/art.png" },
                { name: "Medicine", image: "/assets/img/sections/desipline/first-aid-kit.png" },
                { name: "Law", image: "/assets/img/sections/desipline/law.png" }
            ]
        },
        steps: {
            subtitle: "HOW IT WORKS",
            title: "Start in 3 Steps",
            items: [
                { name: "Login", iconClass: "fa-solid fa-right-to-bracket" },
                { name: "Choose Tutor", iconClass: "fa-solid fa-user-check" },
                { name: "Start Speaking", iconClass: "fa-solid fa-comments" }
            ]
        },
        news: {
            subtitle: "BLOG",
            title: "Latest News",
            items: [
                { title: "How to overcome the language barrier?", date: "Jan 12, 2024", time: "5 min read", image: "/assets/img/h-blog/01.png" },
                { title: "Benefits of speaking with Native Speakers", date: "Jan 05, 2024", time: "4 min read", image: "/assets/img/h-blog/02.png" },
                { title: "English for Business - Tips & Tricks", date: "Dec 28, 2023", time: "6 min read", image: "/assets/img/h-blog/03.png" }
            ]
        },
        faq: {
            subtitle: "FAQ",
            title: "Frequently Asked Questions",
            description: "Have questions? Check the answers below.",
            items: [
                { question: "1. Do I need to book in advance?", answer: "No, Propeak is completely on-demand. Just log in and connect with an available tutor instantly." },
                { question: "2. How long is a lesson?", answer: "Each session lasts 20 minutes. It's the perfect duration for a focused conversation." },
                { question: "3. Can I choose my tutor?", answer: "Yes, you can browse available tutors and choose the one you'd like to talk to." },
                { question: "4. What if I'm a beginner?", answer: "Our tutors are experienced in teaching all levels, from beginner to advanced. You are in good hands!" }
            ]
        },
        footer: {
            about: "Connect with Native Speakers instantly. No appointments, just English on Demand.",
            quickLinks: {
                title: "Quick Links",
                links: [
                    { text: "Home", url: "/" },
                    { text: "About Us", url: "#about" },
                    { text: "Features", url: "#features" },
                    { text: "Login", url: "#login" }
                ]
            },
            legal: {
                title: "Legal",
                links: [
                    { text: "Privacy Policy", url: "#" },
                    { text: "Terms of Service", url: "#" },
                    { text: "Cookie Policy", url: "#" }
                ]
            },
            contact: {
                title: "Contact Us"
            },
            copyright: "© 2026 Propeak. All rights reserved."
        }
    },
    pl: {
        meta: {
            title: "Propeak | Angielski na Żądanie"
        },
        hero: {
            subtitle: "MÓW SWOBODNIE",
            title: "Angielski na <span>Żądanie</span>",
            description: "Połącz się z Native Speakerem w 2 minuty. Bez rezerwacji. Sesje trwają 20 minut. Dostępne 7:00 – 22:00.",
            buttons: [
                { text: "Rozpocznij", link: "#0", class: "flat-btn btn-active" },
                { text: "Więcej", link: "#0", class: "fill-btn" }
            ],
            images: {
                main: "/assets/img/header/header-img.png",
                shapes: [
                    "/assets/img/shapes/Ellipse-01.png",
                    "/assets/img/shapes/Ellipse-02.png",
                    "/assets/img/shapes/Vector-15.png",
                    "/assets/img/header/plane.png",
                    "/assets/img/icon/location.png"
                ]
            }
        },
        features: [
            {
                iconClass: "fa-regular fa-calendar-xmark",
                title: "Bez Umawiania",
                description: "Zapomnij o sztywnych grafikach. Zaloguj się i zacznij rozmawiać, kiedy tylko masz chwilę.",
                link: "#0"
            },
            {
                iconClass: "fa-solid fa-users",
                title: "Native Speakerzy",
                description: "Ucz się od osób, dla których angielski jest językiem ojczystym. Lektorzy z USA, UK, Kanady i Australii.",
                link: "#0"
            },
            {
                iconClass: "fa-regular fa-clock",
                title: "Krótkie Sesje",
                description: "20-minutowe sesje są idealne, aby utrzymać koncentrację i wpasować naukę w napięty grafik.",
                link: "#0"
            }
        ],
        feedbacks: {
            subtitle: "OPINIE",
            title: "Co mówią nasi <span>studenci</span>",
            students: [
                { name: "Anna Kowalska", university: "IT Manager", image: "/assets/img/sections/students/student-01.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Piotr Nowak", university: "Student", image: "/assets/img/sections/students/student-02.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Kasia Wiśniewska", university: "Freelancer", image: "/assets/img/sections/students/student-03.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" },
                { name: "Marek Wójcik", university: "Przedsiębiorca", image: "/assets/img/sections/students/student-04.png", video: "https://www.youtube.com/watch?v=c7XEhXZ_rsk" }
            ]
        },
        destinations: {
            title: "Skąd są nasi lektorzy",
            description: "Współpracujemy z certyfikowanymi lektorami z głównych krajów anglojęzycznych.",
            items: [
                { name: "USA", image: "/assets/img/sections/destination/usa.png" },
                { name: "Wlk. Brytania", image: "/assets/img/sections/destination/australia.png" },
                { name: "Kanada", image: "/assets/img/sections/destination/canda.png" },
                { name: "Australia", image: "/assets/img/sections/destination/usa.png" }
            ]
        },
        about: {
            subtitle: "O NAS",
            title: "Dlaczego Propeak?",
            paragraphs: [
                "Propeak został stworzony dla zapracowanych profesjonalistów i studentów, którzy chcą poprawić swój angielski bez problemów z planowaniem.",
                "Wierzymy, że najlepszym sposobem na naukę języka jest mówienie. Dlatego zapewniamy natychmiastowy dostęp do Native Speakerów."
            ],
            stats: [
                { value: "50", label: "Lektorów", suffix: "+" },
                { value: "15", label: "Studentów", suffix: "k+" },
                { value: "98", label: "Zadowolenia", suffix: "%" }
            ],
            image: "/assets/img/sections/about/student-in-library.png"
        },
        categories: {
            subtitle: "KATEGORIE",
            title: "Popularne Tematy",
            disciplines: [
                { name: "Biznes", image: "/assets/img/sections/desipline/business.png" },
                { name: "Podróże", image: "/assets/img/sections/desipline/foresty.png" },
                { name: "Technologia", image: "/assets/img/sections/desipline/pc.png" },
                { name: "Kultura", image: "/assets/img/sections/desipline/art.png" },
                { name: "Medycyna", image: "/assets/img/sections/desipline/first-aid-kit.png" },
                { name: "Prawo", image: "/assets/img/sections/desipline/law.png" }
            ]
        },
        steps: {
            subtitle: "JAK TO DZIAŁA",
            title: "Zacznij w 3 Krokach",
            items: [
                { name: "Zaloguj się", iconClass: "fa-solid fa-right-to-bracket" },
                { name: "Wybierz Lektora", iconClass: "fa-solid fa-user-check" },
                { name: "Zacznij Mówić", iconClass: "fa-solid fa-comments" }
            ]
        },
        news: {
            subtitle: "BLOG",
            title: "Aktualności",
            items: [
                { title: "Jak pokonać barierę językową?", date: "12 Sty, 2024", time: "5 min czytania", image: "/assets/img/h-blog/01.png" },
                { title: "Zalety rozmów z Native Speakerami", date: "05 Sty, 2024", time: "4 min czytania", image: "/assets/img/h-blog/02.png" },
                { title: "Angielski w Biznesie - Porady", date: "28 Gru, 2023", time: "6 min czytania", image: "/assets/img/h-blog/03.png" }
            ]
        },
        faq: {
            subtitle: "FAQ",
            title: "Często Zadawane Pytania",
            description: "Masz pytania? Sprawdź odpowiedzi poniżej.",
            items: [
                { question: "1. Czy muszę rezerwować wcześniej?", answer: "Nie, Propeak działa na żądanie. Po prostu zaloguj się i połącz z dostępnym lektorem." },
                { question: "2. Jak długo trwa lekcja?", answer: "Każda sesja trwa 20 minut. To idealny czas na skoncentrowaną rozmowę." },
                { question: "3. Czy mogę wybrać lektora?", answer: "Tak, możesz przeglądać dostępnych lektorów i wybrać tego, z którym chcesz rozmawiać." },
                { question: "4. Co jeśli jestem początkujący?", answer: "Nasi lektorzy mają doświadczenie w nauczaniu na wszystkich poziomach. Jesteś w dobrych rękach!" }
            ]
        },
        footer: {
            about: "Połącz się z Native Speakerami natychmiast. Bez wizyt, po prostu Angielski na Żądanie.",
            quickLinks: {
                title: "Szybkie Linki",
                links: [
                    { text: "Strona Główna", url: "/" },
                    { text: "O Nas", url: "#about" },
                    { text: "Funkcje", url: "#features" },
                    { text: "Logowanie", url: "#login" }
                ]
            },
            legal: {
                title: "Prawne",
                links: [
                    { text: "Polityka Prywatności", url: "#" },
                    { text: "Regulamin", url: "#" },
                    { text: "Polityka Cookies", url: "#" }
                ]
            },
            contact: {
                title: "Kontakt"
            },
            copyright: "© 2026 Propeak. Wszelkie prawa zastrzeżone."
        }
    }
};
