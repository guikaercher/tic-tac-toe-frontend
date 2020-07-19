const prodUrl = 'https://kaercher-tic-tac-toe.herokuapp.com'
const devUrl = 'http://localhost:3000'
const socket = io(devUrl)

const click = () => {
    const player = document.getElementById('player-name-text').value
    socket.emit('player-register', { player });
}

socket.on('redirect-to-game', (data) => {
    const { player, room } = data
    console.log(`Player ${player} entered the room ${room}`);
    window.location.href = `${window.location.href}game?player=${player}&room_available=${room}`
});

window.onload = () => {
    const playerNameBtn = document.getElementById('player-name-btn');
    playerNameBtn.addEventListener('click', event => click())
}
