const translations = {
en: {
    title: "Hi, I'm <span class='highlight';'>Carla<br>Cueto</span>",

    subtitle: "Frontend Developer and Translator",

    description: "I create responsive websites and multilingual content.",

    inforow1: "Based in Brazil",
    inforow2: "Available Now",

    about: "About",

    quote: "Creating modern digital experiences.",

    sectiontext:
        "I am a freelance frontend developer focused on minimal modern interfaces, responsive layouts, and sleek user experiences. I enjoy combining clean design with multilingual communication and creative branding.",

    projects: "Projects",

    work: "Selected Work",

    web1: "Institutional Website",

    web1desc:
        "Modern responsive website for a fictional organization.",

    web2: "Researcher Portfolio",

    web2desc:
        "Minimal academic portfolio focused on accessibility and design.",

    services: "Services",

    servicesTitle: "What I Offer",

    contact: "Contact",

    contactTitle: "Let's Work Together",

    contactText:
        "Available for freelance frontend development, translation, and creative digital projects.",

    socials: "Socials",

    follow: "Follow me",


 },
pt: {
    title: "Olá, eu sou <span class= 'highlight';' ><br>Carla Cueto</span>",
    subtitle: 'Desenvolvedora Frontend e Tradutora',

    description: 'Eu crio sites responsivos e conteúdo multilíngue.',

    inforow1: 'Baseada no Brasil',
    inforow2: 'Disponível agora',

    about: 'Sobre',

    quote: 'Criando experiências digitais modernas.',

    sectiontext:
        'Sou uma desenvolvedora frontend freelancer focada em interfaces minimalistas, layouts responsivos e experiências modernas.',

    projects: 'Projetos',

    work: 'Projetos Selecionados',

    web1: 'Website Institucional',
    web1desc: 'Website moderno e responsivo para uma organização fictícia.',

    web2: 'Portfólio de Pesquisador',
    web2desc: 'Portfólio acadêmico minimalista focado em acessibilidade e design.',

    services: 'Serviços',
    servicesTitle: 'O Que Eu Ofereço',

    contact: 'Contato',
    contactTitle: 'Vamos Trabalhar Juntos',
    contactText:
        'Disponível para desenvolvimento frontend freelancer, tradução e projetos digitais criativos.',

    socials: 'Redes Sociais',
    follow: 'Me siga',
},
es: {
    title: 'Hola, soy Carla <br> Cueto',
    subtitle: 'Desarrolladora Frontend y Traductora',

    description: 'Creo sitios web responsivos y contenido multilingüe.',

    inforow1: 'Basada en Brasil',
    inforow2: 'Disponible ahora',

    about: 'Acerca de',

    quote: 'Creando experiencias digitales modernas.',

    sectiontext:
        'Soy una desarrolladora frontend freelance enfocada en interfaces minimalistas, diseños responsivos y experiencias modernas.',

    projects: 'Proyectos',

    work: 'Trabajos Seleccionados',

    web1: 'Sitio Institucional',
    web1desc: 'Sitio moderno y responsivo para una organización ficticia.',

    web2: 'Portafolio de Investigador',
    web2desc: 'Portafolio académico minimalista enfocado en accesibilidad y diseño.',

    services: 'Servicios',
    servicesTitle: 'Lo Que Ofrezco',

    contact: 'Contacto',
    contactTitle: 'Trabajemos Juntos',
    contactText:
        'Disponible para desarrollo frontend freelance, traducción y proyectos digitales creativos.',

    socials: 'Redes Sociales',
    follow: 'Sígueme'
}

};
function changeLanguage(language) {

    document.getElementById("title").innerHTML =
        translations[language].title;

    document.getElementById("subtitle").textContent =
        translations[language].subtitle;

    document.getElementById("description").textContent =
        translations[language].description;

    document.getElementById("inforow1").textContent =
        translations[language].inforow1;

    document.getElementById("inforow2").textContent =
        translations[language].inforow2;

    document.getElementById("about-tag").textContent =
        translations[language].about;

    document.getElementById("quote").textContent =
        translations[language].quote;

    document.getElementById("sectiontext").textContent =
        translations[language].sectiontext;

    document.getElementById("projects-tag").textContent =
        translations[language].projects;

    document.getElementById("work").textContent =
        translations[language].work;

    document.getElementById("web1").textContent =
        translations[language].web1;

    document.getElementById("web1desc").textContent =
        translations[language].web1desc;

    document.getElementById("web2").textContent =
        translations[language].web2;

    document.getElementById("web2desc").textContent =
        translations[language].web2desc;

    document.getElementById("follow").textContent =
        translations[language].follow;

    document.getElementById("services-tag").textContent =
        translations[language].services;

    document.getElementById("services-title").textContent =
        translations[language].servicesTitle;

    document.getElementById("contact-tag").textContent =
        translations[language].contact;

    document.getElementById("contact-title").textContent =
        translations[language].contactTitle;

    document.getElementById("contact-text").textContent =
        translations[language].contactText;
}
changeLanguage("en");
