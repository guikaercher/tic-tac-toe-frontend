const prodUrl = 'https://kaercher-tic-tac-toe.herokuapp.com'
const devUrl = 'http://localhost:3000'
const socket = io(devUrl)

const click = () => {
    const playerName = document.getElementById('player-name-text').value
    socket.emit('player-register', {player: playerName});
}

socket.on('welcome', (msg) => {
    console.log(msg);
    window.location.href = `http://127.0.0.1:8080/game`;
});

window.onload = () => {
    const playerNameBtn = document.getElementById('player-name-btn');
    playerNameBtn.addEventListener('click', event => click())
}
