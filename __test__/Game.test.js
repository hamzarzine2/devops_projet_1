const Game = require("../src/Game");

describe("Tests for a score calculator in a bowling game with spare and strike", () => {
  const game = new Game();
  let turn;
  let score1;
  let score2;

  it("should update score ", () => {

    givenTurn(0);
    givenScore(3,2);

    whenRoll(score1,score2);

    expect(game.scoreTotal).toBe(5);
    expect(game.turnPlayed).toBe(1);
  });



  function givenTurn(t){
    turn=t;
  }
  function givenScore(s1,s2) {
    score1 = s1;
    score2 = s2;
  }
  function whenRoll(s1,s2) {
    game.roll(score1,score2);
  }

});
