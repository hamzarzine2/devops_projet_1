const Game = require("../src/Game");

describe("Tests for a score calculator in a bowling game with spare and strike", () => {
    const game = new Game();
    let score;
    
   it("should update score ",()=>{
     turn=0;
     score=3;
     
     game.roll(score);

     expect(game.scoreTotal).toBe(3);
   })
});
