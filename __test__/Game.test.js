const Game = require("../src/Game");

describe("Tests for a score calculator in a bowling game with spare and strike", () => {
  const game = new Game();
  let turn;
  let score;

  it("should update score ", () => {
    givenTurn(0);
    givenScore(3,2);

    whenRoll(score);

    expect(game.scoreTotal).toBe(5);
    expect(game.turnPlayed).toBe(1);
  });



  function givenTurn(t){
    turn=t;
  }
  function givenScore(s) {
    score = s;
  }
  function whenRoll(s) {
    game.roll(score);
  }

});
