function lorenzMap(x, y, z, sigma, beta, rho) {
    const dt = 0.01; // Tasa de cambio
    const dx = sigma * (y - x) * dt;
    const dy = (x * (rho - z) - y) * dt;
    const dz = (x * y - beta * z) * dt;
    return [x + dx, y + dy, z + dz];
}
// Función para barajar las cartas usando el sistema de Lorenz
function shuffleCards(cards) {
    const sigma = 10; // Parámetro de Lorenz
    const beta = 8 / 3; // Parámetro de Lorenz
    const rho = 28; // Parámetro de Lorenz
    let x = Math.random(); // Estado inicial
    let y = Math.random();
    let z = Math.random();
    const indices = new Set(); // Usamos un Set para asegurar que los índices sean único
    // Generamos índices únicos hasta que tengamos el tamaño de las cartas
    while (indices.size < cards.length) {
        [x, y, z] = lorenzMap(x, y, z, sigma, beta, rho);
        const index = Math.floor(Math.abs(x * 1000)) % cards.length; // Generamos un índice en el rango de las cartas
        indices.add(index); // Agregamos el índice al Set
    }
    // Convertimos el Set a un array para poder indexar las cartas
    const uniqueIndices = Array.from(indices);
    // Creamos un array para las cartas barajadas
    const shuffledCards = new Array(cards.length);
    for (let i = 0; i < uniqueIndices.length; i++) {
        shuffledCards[i] = cards[uniqueIndices[i]]; // Colocamos la carta en la posición generada
    }
    return shuffledCards;
}
// Inicializar el juego
function initializeGame() {
    const cards = document.querySelectorAll('.tarjeta'); // Seleccionamos las tarjetas
    const cardArray = Array.from(cards); // Convertimos a array
    // Barajamos las cartas
    const shuffledCards = shuffleCards(cardArray);
    // Colocamos las cartas barajadas de nuevo en el tablero
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ""; // Limpiar el tablero antes de agregar las cartas
    setTimeout(() => {
        shuffledCards.forEach((card) => {
        tablero.appendChild(card); // Añadimos las cartas barajadas al tablero
        });

        // Reiniciar el reloj
        restartClock();
    }, 100);

}
window.onload = function() {
    initializeGame(); // Inicializa el juego
    startClock(); // Inicia el cronómetro
};
// Inicializamos el juego y el cronómetro al cargar la página



