/*Padding top automatico igual a la altura del header*/

const headerNode = document.getElementsByClassName("navbar_altura")[0];

function marginTopAuto(entries) {
  const elemento_entry = entries[0];
  if (elemento_entry.target) {
    const mainNode = document.getElementsByTagName("main")[0];
    mainNode.style.paddingTop = `${elemento_entry.target.clientHeight}px`;
  }
}

/*navbar*/

function selectoresItemsMenu(evento) {
  const contenedorItemsMenu = document.querySelector(".navbar-nav");
  const itemsMenu = contenedorItemsMenu.children;
  for (let itemli of itemsMenu) {
    itemli.classList.remove("estilo_menu");
  }

  const elementoSeleccionado = evento.target;

  elementoSeleccionado.parentElement.classList.add("estilo_menu");

  if (window.innerWidth < 576) {
    document.querySelector(".navbar-toggler").click();
  }
}
const contenedorItemsMenu = document.querySelector(".navbar-nav");
const itemsMenu = contenedorItemsMenu.children;
for (let itemli of itemsMenu) {
  itemli.children[0].addEventListener("click", selectoresItemsMenu);
}

/*Desplazamiento a secciones */
function scrollToSection(evento) {
  evento.preventDefault();

  const alturaHeader =
    document.getElementsByClassName("navbar_altura")[0].offsetHeight;

  var targetElemento = document.getElementById(
    evento.target.getAttribute("href").substring(1)
  );

  if (targetElemento) {
    var offset = targetElemento.offsetTop - alturaHeader;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

