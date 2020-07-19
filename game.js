const prodUrl = 'https://kaercher-tic-tac-toe.herokuapp.com'
const devUrl = 'http://localhost:3000'
const socket = io(devUrl)

let symbol = 'O'
let playerName = null
let InRoom = null

const symbolDrawing = {
    X: '<img src="images/x.png" width="50px" height="50px">',
    O: '<img src="images/circle.png" width="50px" height="50px">'
}

const markSquare = (player, square) => {
    if (symbol === 'X') symbol = 'O'
    else if (symbol === 'O') symbol = 'X'
    console.log(symbol)
    document.getElementById(square).innerHTML = symbolDrawing[symbol];
}

socket.on('click-render', (data) => {
    const { player, square } = data
    markSquare(player, square)

});

const click = (event) => {
    console.log(event);
    const squareId = event.toElement.id
    console.log(InRoom)
    socket.emit('user-click', {
        player: playerName,
        square: squareId,
        room: InRoom
    });
}

socket.on('update-my-room', (data) => {
    console.log('updating my room');
    const { room } = data
    console.log(room);
    InRoom = room
});

window.onload = () => {
    const urlData = (location.search);
    const player = (urlData.split('&')[0]).replace('player=', '')
    const room = (urlData.split('&')[1]).replace('room_available=', '')
    playerName = player
    InRoom = room
    socket.emit('join-room', { player, room });
    const wrapper = document.getElementById('board');
    wrapper.addEventListener('click', event => click(event))
}



