board =Array(9).fill(null)
firstPlayer = 'X';


function playMove(position) {
    if (board[position] === null) {
        board[position] = firstPlayer;
        firstPlayer = firstPlayer === 'X' ? '0' : 'X';
        return true;     
    }
    return false;
}
function checkWin() {
    const winCondition = [
        [0,1,2] , [3,4,5], [6,7,8], //lines
        [0,3,6] , [1,4,7], [2,5,8], //columns
        [0,4,8] , [2,4,6] //diagonals
    ];

    for (const condition of winCondition) {
        const [a,b,c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];

        }
    }
    if (!board.includes(null)) return 'draw';
    return null;
    
}

module.exports = {playMove, checkWin};
