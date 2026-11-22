/* =========================================================================
   BuildSafe — Landing Page
   Interacciones con el usuario (apartado 5.3 del informe).
   Se ejecutan una vez que el documento HTML terminó de cargarse.
   ========================================================================= */

/* Marca que JavaScript está activo. El contenido solo se oculta para animarlo
   si el script corre; sin JavaScript todo se muestra de inmediato. */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------------
       1. Botón Iniciar Sesión
       Simula el acceso de un líder comunitario a la plataforma.
       Relación: US31, US38, US48
       --------------------------------------------------------------- */
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", () => {
        const usuario = prompt(
            "Por favor, ingrese su código de Líder Comunitario BuildSafe:"
        );
        if (usuario && usuario.trim() !== "") {
            alert(`¡Bienvenido al sistema ejecutivo, líder ${usuario}!`);
        } else if (usuario === "") {
            alert("Error: El código de acceso no puede estar vacío.");
        }
    });

    /* ---------------------------------------------------------------
       2. Botón Iniciar evaluación
       Simula el inicio del proceso de evaluación de la vivienda.
       Relación: US01, US06
       --------------------------------------------------------------- */
    const btnEvaluacion = document.getElementById("btnEvaluacion");

    btnEvaluacion.addEventListener("click", () => {
        alert(
            "Abriendo el formulario digital de inspección sísmica.\n\n" +
            "Recuerde que el resultado es una evaluación preliminar y orientativa: " +
            "no reemplaza la revisión de un ingeniero."
        );
    });

    /* ---------------------------------------------------------------
       3. Botón Solicitar acceso
       Confirma el envío de la solicitud de acceso comunitario.
       Relación: US33
       --------------------------------------------------------------- */
    const btnAcceso = document.getElementById("btnAcceso");

    btnAcceso.addEventListener("click", () => {
        alert(
            "Su solicitud ha sido enviada correctamente.\n\n" +
            "Un asesor técnico de BuildSafe se pondrá en contacto con su organización."
        );
    });

    /* ---------------------------------------------------------------
       4. Detección del estado de conexión
       El estado se comunica con texto y color, nunca solo con color.
       Relación: US06, US20, US28, RNF03
       --------------------------------------------------------------- */
    const estado = document.getElementById("estadoConexion");
    const estadoTexto = document.getElementById("estadoTexto");

    function verificarConexion() {
        if (navigator.onLine) {
            estado.classList.remove("estado-offline");
            estado.classList.add("estado-online");
            estadoTexto.textContent = "Conexión Estable · Sincronizado";
        } else {
            estado.classList.remove("estado-online");
            estado.classList.add("estado-offline");
            estadoTexto.textContent = "Sin conexión · Guardado local";
        }
    }

    window.addEventListener("online", verificarConexion);
    window.addEventListener("offline", verificarConexion);

    verificarConexion();

    /* ---------------------------------------------------------------
       5. Animaciones de aparición
       Las tarjetas de características y los pasos de la metodología
       aparecen de forma progresiva al entrar en pantalla.
       Si el usuario pidió movimiento reducido, se muestran de inmediato.
       --------------------------------------------------------------- */
    const animables = document.querySelectorAll(".tarjeta, .paso");
    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (movimientoReducido || !("IntersectionObserver" in window)) {
        animables.forEach((el) => el.classList.add("visible"));
    } else {
        const observador = new IntersectionObserver(
            (entradas, obs) => {
                entradas.forEach((entrada, i) => {
                    if (entrada.isIntersecting) {
                        setTimeout(() => {
                            entrada.target.classList.add("visible");
                        }, i * 90);
                        obs.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        animables.forEach((el) => observador.observe(el));
    }

});
