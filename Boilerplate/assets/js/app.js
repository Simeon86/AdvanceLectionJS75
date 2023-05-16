// Rock, Paper, Scissor

function rockPaperScissor(player1, player2) {
    if(player1 === player2)
        return `It's a draw`;

    if(player1 === 'rock' && player2 === 'scissor')
        return `Player1 Wins`;
    if(player1 === 'rock' && player2 === 'paper')
        return `Player2 Wins`;

    if(player1 === 'scissor' && player2 === 'rock')
        return `Player2 Wins`;  
    if(player1 === 'scissor' && player2 === 'paper')
        return `Player1 Wins`;

    if(player1 === 'paper' && player2 === 'scissor')
        return `Player2 Wins`;  
    if(player1 === 'paper' && player2 === 'rock')
        return `Player1 Wins`;
}

console.log(rockPaperScissor('rock', 'scissor'))
console.log(rockPaperScissor('paper', 'scissor'))
console.log(rockPaperScissor('paper', 'rock'))
console.log(rockPaperScissor('rock', 'rock'))