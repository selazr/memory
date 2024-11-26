let hh = 0; // Inicializa las horas en 0
let mm = 0; // Inicializa los minutos en 0
let ss = 0; // Inicializa los segundos en 0
let interval; // Variable para almacenar el intervalo del cronómetro

function updateClock() {
    // Incrementar los segundos
    ss++;
    // Si los segundos llegan a 60, incrementar los minutos y reiniciar los segundos
    if (ss >= 60) {
        ss = 0;
        mm++;
    }
    // Si los minutos llegan a 60, incrementar las horas y reiniciar los minutos
    if (mm >= 60) {
        mm = 0;
        hh++;
    }
    // Formatear las horas, minutos y segundos
    let formattedHH = (hh < 10) ? "0" + hh : hh;
    let formattedMM = (mm < 10) ? "0" + mm : mm;
    let formattedSS = (ss < 10) ? "0" + ss : ss;
    // Crear la cadena de tiempo
    let time = formattedHH + ":" + formattedMM + ":" + formattedSS;
    // Mostrar el tiempo en el elemento con id "reloj"
    let watch = document.querySelector('#reloj');
    watch.innerHTML = time;
}

function startClock() {
    // Inicia el cronómetro solo si no está ya corriendo
    if (!interval) {
        interval = setInterval(updateClock, 1000);
    }
}

function restartClock() {
    // Detiene el cronómetro si ya está corriendo
    clearInterval(interval);
    interval = null; // Resetea la variable interval
    // Reiniciar las variables del cronómetro
    hh = 0;
    mm = 0;
    ss = 0;
    // Actualiza el reloj inmediatamente
    updateClock();
    // Reinicia el cronómetro
    startClock();
}
