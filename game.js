const prodUrl = 'https://kaercher-tic-tac-toe.herokuapp.com'
const devUrl = 'http://localhost:3000'
const socket = io(devUrl)

let symbol = 'O'

const markSquare = (player, square) => {
    if (symbol === 'X') symbol = 'O'
    else if (symbol === 'O') symbol = 'X'
    console.log(symbol)
    document.getElementById(square).innerHTML = symbol;
}

socket.on('click-render', (data) => {
    const { player, square } = data
    markSquare(player, square)

});

const click = (event) => {
    console.log(event);
    const squareId = event.toElement.id
    socket.emit('user-click', {
        player: 1,
        square: squareId
    });
}

window.onload= () => {
    const wrapper = document.getElementById('board');
    wrapper.addEventListener('click', event => click(event))
}



