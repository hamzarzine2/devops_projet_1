const Game = require("../src/Game");

describe("Tests for a score calculator in a bowling game with spare and strike", () => {
  let game; 
  beforeEach(()=> (game=new Game))
  let turn;
  let score1;
  let score2;

  it("should update score ", () => {
    givenTurn(0);
    givenScore(3,0);

    whenRoll(score1,score2);

    expect(game.score()).toBe(3);
    expect(game.turnPlayed).toBe(1);
  });
  
  it("throw is a strike", () => {
    givenTurn(0);
    givenScore(10,0);

    whenRoll(score1,score2);
    whenRoll(1,1)
    whenRoll(2,2)
    

    expect(game.score()).toBe(18);
    expect(game.turnPlayed).toBe(3);
  });

  it("throw is a spare", () => {
    givenTurn(0);
    givenScore(9,1);

    whenRoll(score1,score2);
    whenRoll(4,4)
    

    expect(game.score()).toBe(22);
    expect(game.turnPlayed).toBe(2);
  });  


  function givenTurn(t){
    turn=t;
  }
  function givenScore(s1,s2) {
    score1 = s1;
    score2=s2;
  }
  function whenRoll(s1,s2) {
    game.roll(s1,s2);
  }

});
