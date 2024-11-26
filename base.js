var firstcard = null;
var secondcard = null;
var lockboard = false;
var matched = 0;
const totalParejas = 12; // Número total de parejas

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        if (lockboard) return;
        if (tarjeta.classList.contains('flipped')) return;
        
        tarjeta.classList.add('flipped');
        
        if (!firstcard) {
            // Asignamos la primera carta
            firstcard = tarjeta;
        } else {
            // Asignamos la segunda carta
            secondcard = tarjeta;
            lockboard = true;  // Bloqueamos el tablero mientras comparamos
            verparejas();
        }
    });
});

function verparejas() {
    const nfirstcard = firstcard.querySelector('img').getAttribute('name');
    const nsecondcard = secondcard.querySelector('img').getAttribute('name');

    if (nfirstcard === nsecondcard) {
        // Las cartas coinciden
        matched++;
        resetboard();
        console.log(matched);
        
        // Verificar si el juego ha terminado
        if (matched === totalParejas) {
            acabajuego();
        }
    } else {
        // Las cartas no coinciden, las volteamos después de un pequeño retraso
        setTimeout(() => {
            firstcard.classList.remove('flipped');
            secondcard.classList.remove('flipped');
            resetboard();
        }, 1000);
    }
}

function resetboard() {
    // Restablecemos las variables y desbloqueamos el tablero
    firstcard = null;
    secondcard = null;
    lockboard = false;
}

function acabajuego() {
    setTimeout(() => {
        alert("¡Has ganado!");
        lockboard = true;  // Bloquear el tablero cuando el juego termine
        volteartodas();
    }, 1000);
}
function volteartodas() {
    setTimeout(() => {
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.remove('flipped');
        });
    }, 1000);
    

}
function Buttonstart() {
    resetboard();
    restartClock();
    volteartodas();
}

function pierde() {
    setTimeout(() => {
        alert("¡Has perdido!");
        lockboard = true;  // Bloquear el tablero cuando el juego termine
        volteartodas();
    }, 1000);
}