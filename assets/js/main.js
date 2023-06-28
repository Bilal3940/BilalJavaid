//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

//Home delay
sr.reveal(".button", { delay: 200 });
sr.reveal(".linguagensProjeto", { delay: 400 });
sr.reveal(".imagem-espaco-delay", { delay: 200 });
sr.reveal(".imagem-iuri-delay", { delay: 600 });
sr.reveal(".scroll-delay", { delay: 1000 });
//Sobre mim delay
sr.reveal(".imagem-delay", {});
sr.reveal(".titulo-delay", { delay: 200 });
sr.reveal(".descricao-delay", { delay: 400 });
sr.reveal(".cards-interval", { interval: 400 });

//Animação conhecimentos
var texto1 = document.querySelector(".description");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML is a marking-based language, where we mark the elements to define which information the page will display.";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS is a style sheet language composed of layers, created with the purpose of stylizing HTML pages.";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript is a structured interpreted programming language, high-level script with weak and multiparadigm dynamic typing.";
});

document.querySelector(".laravel").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Laravel is a powerful and popular PHP web application framework that I am highly proficient in as a full-stack developer. With its elegant syntax, rich set of features, and robust ecosystem, Laravel allows for efficient and scalable web application development";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "React is an open source JavaScript library focused on creating user interfaces on web pages.";
});

document.querySelector(".mongodb").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "MongoDB is a popular NoSQL database that I am proficient in working with as a full-stack developer. With its flexible document-oriented architecture, MongoDB allows for efficient storage and retrieval of data in a scalable and high-performance manner.";
});

document.querySelector(".nodejs").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Node.js is a powerful runtime environment built on Chrome's V8 JavaScript engine. As a full-stack      developer,   I possess a strong command of Node.js and its ecosystem. With my expertise, I can efficiently build server-side applications, develop RESTful APIs, and handle data persistence using this versatile runtime environment.";
});
document.querySelector(".express").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Express.js is a lightweight and flexible web application framework for Node.js that I am highly proficient in as a full-stack developer. With its minimalist design and powerful features, Express.js allows for the rapid development of robust and scalable web applications.";
});
document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Microsoft Office is a set of computer applications mainly used for business or office purposes.MS Office helps simplify basic office tasks and improve work productivity.";
  });

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `*Hover the card to Read*`;
  });
}
