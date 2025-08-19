// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="inicio.html"><strong aria-hidden="true">1.</strong> Inicio</a></li><li class="chapter-item expanded "><a href="recursos.html"><strong aria-hidden="true">2.</strong> Bibliografía y Recursos</a></li><li class="chapter-item expanded "><a href="clases/index.html"><strong aria-hidden="true">3.</strong> Clases</a></li><li class="chapter-item expanded "><a href="guias/index.html"><strong aria-hidden="true">4.</strong> Guías</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="guias/guia1.html"><strong aria-hidden="true">4.1.</strong> Guía 1</a></li><li class="chapter-item expanded "><a href="guias/guia2.html"><strong aria-hidden="true">4.2.</strong> Guía 2</a></li><li class="chapter-item expanded "><a href="guias/guia3.html"><strong aria-hidden="true">4.3.</strong> Guía 3</a></li><li class="chapter-item expanded "><a href="guias/guia4.html"><strong aria-hidden="true">4.4.</strong> Guía 4</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/25C2/ejercicio_individual.html"><strong aria-hidden="true">5.</strong> Ejercicio Individual 2C 2025</a></li><li class="chapter-item expanded "><a href="proyecto/index.html"><strong aria-hidden="true">6.</strong> Proyectos Realizados</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/25C1/proyecto.html"><strong aria-hidden="true">6.1.</strong> 1C 2025 RustiDocs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/25C1/examen_final.html"><strong aria-hidden="true">6.1.1.</strong> Examen Final 1C 2025</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/24C1/proyecto.html"><strong aria-hidden="true">6.2.</strong> 1C 2024 Agentes Autonomos</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/24C1/examen_final.html"><strong aria-hidden="true">6.2.1.</strong> Examen Final 1C 2024</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/24C2/proyecto.html"><strong aria-hidden="true">6.3.</strong> 2C 2024 Aerolineas Rústicas</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/24C2/examen_final.html"><strong aria-hidden="true">6.3.1.</strong> Examen Final 2C 2024</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/23C1/proyecto.html"><strong aria-hidden="true">6.4.</strong> 1C 2023: Bitcoin</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/23C1/examen_final.html"><strong aria-hidden="true">6.4.1.</strong> Examen Final 1C 2023</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/23C2/proyecto.html"><strong aria-hidden="true">6.5.</strong> 2C 2023: Git</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/23C2/examen_final.html"><strong aria-hidden="true">6.5.1.</strong> Examen Final 2C 2023: Pull Requests</a></li><li class="chapter-item expanded "><a href="proyecto/23C2/examen_final_2.html"><strong aria-hidden="true">6.5.2.</strong> Examen Final 2C 2023: Releases</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/22C1/proyecto.html"><strong aria-hidden="true">6.6.</strong> 1C 2022: BitTorrent</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/22C1/proyecto_final_1C2022.html"><strong aria-hidden="true">6.6.1.</strong> Agregado al Proyecto - Finales Julio/Agosto 2022</a></li><li class="chapter-item expanded "><a href="proyecto/22C1/criterios_aprobacion.html"><strong aria-hidden="true">6.6.2.</strong> Criterios de aprobación</a></li><li class="chapter-item expanded "><a href="proyecto/22C1/entrega_intermedia.html"><strong aria-hidden="true">6.6.3.</strong> Entrega Intermedia</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/22C2/proyecto.html"><strong aria-hidden="true">6.7.</strong> 2C 2022: IRC</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/22C2/examen_final.html"><strong aria-hidden="true">6.7.1.</strong> Examen Final 2C 2022</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/anteriores/21C1/proyecto.html"><strong aria-hidden="true">6.8.</strong> 1C 2021: Redis</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/anteriores/21C1/agregado.html"><strong aria-hidden="true">6.8.1.</strong> Agregado al Proyecto</a></li></ol></li><li class="chapter-item expanded "><a href="proyecto/anteriores/21C2/proyecto.html"><strong aria-hidden="true">6.9.</strong> 2C 2021: MQTT</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proyecto/anteriores/21C2/finales_2022_feb_mar.html"><strong aria-hidden="true">6.9.1.</strong> Finales Febrero/Marzo 2022</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="rust_arg.html">Grupo Rust Argentina</a></li><li class="chapter-item expanded affix "><a href="nosotros.html">Nosotros</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
