const {expect} = require('chai');
const {playMove,checkWin} = require('./tictac') 


describe('ticTacToe', () => {
        beforeEach(() => {
            board = Array(9).fill(null);
            firstPlayer = 'X';
        });

        it('should alternate players', () => {
            expect(firstPlayer).to.equal('X');
            playMove(0);
            expect(firstPlayer).to.equal('0');
            playMove(1);
            expect(firstPlayer).to.equal('X');
        });

        it('should not allow playing on occupied position', () => {
            expect(playMove(0)).to.be.true;
            expect(playMove(0)).to.be.false;
        });

        it('should detect winner in rows', () => {
            playMove(0);
            playMove(3);
            playMove(1);
            playMove(4);
            playMove(2);
            expect(checkWin()).to.equal('X');
        });

        it('should detect winner in columns', () => {
            playMove(0);
            playMove(1);
            playMove(3);
            playMove(4);
            playMove(6);
            expect(checkWin()).to.equal('X');

        });

        it('should detect winner in diagonals', () => {
            playMove(0);
            playMove(1);
            playMove(4);
            playMove(2);
            playMove(8);
            expect(checkWin()).to.equal('X');

        });

        it('should detect draw', () => {
            playMove(4);
            playMove(1);
            playMove(2);
            playMove(6);
            playMove(3);
            playMove(5);
            playMove(0);
            playMove(8);
            playMove(7);
            expect(checkWin()).to.equal('draw');
        });


    })

       
        
    
