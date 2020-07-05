const prodUrl = 'https://kaercher-tic-tac-toe.herokuapp.com'
const devUrl = 'http://localhost:3000'
const socket = io(devUrl)

const click = () => {
    const playerName = document.getElementById('player-name-text').text
    socket.emit('player-register', {player: playerName});
}

socket.on('redirect', (destination) => {
    window.location.href = destination;
});

window.onload = () => {
    const playerNameBtn = document.getElementById('player-name-btn');
    playerNameBtn.addEventListener('click', event => click())
}
