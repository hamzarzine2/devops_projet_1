const Game = require("../src/Game");

describe("Tests for a score calculator in a bowling game with spare and strike", () => {
  let game;
  beforeEach(() => (game = new Game()));
  let turn;
  let score1;
  let score2;

  it("should update score ", () => {
    givenTurn(0);
    givenScore(3, 0);

    whenRoll(score1, score2);

    expect(game.score()).toBe(3);
    expect(game.turnPlayed).toBe(1);
  });

  it("throw is a strike", () => {
    givenTurn(0);
    givenScore(10, 0);

    whenRoll(score1, score2);
    whenRoll(1, 1);
    whenRoll(2, 2);

    expect(game.score()).toBe(18);
    expect(game.turnPlayed).toBe(3);
  });

  it("throw is a spare", () => {
    givenTurn(0);
    givenScore(9, 1);

    whenRoll(score1, score2);
    whenRoll(4, 4);

    expect(game.score()).toBe(22);
    expect(game.turnPlayed).toBe(2);
  });

  it("throw is a strike after a strike", () => {
    givenTurn(2);
    givenScore(10, 0);

    whenRoll(score1, score2);
    whenRoll(10, 0);
    whenRoll(1, 1);

    expect(game.score()).toBe(35);
    expect(game.turnPlayed).toBe(5);
  });

  it("throw is a spare after a spare", () => {
    givenTurn(4);
    givenScore(5, 5);

    whenRoll(score1, score2);
    whenRoll(5, 5);
    whenRoll(1, 1);

    expect(game.score()).toBe(28);
    expect(game.turnPlayed).toBe(7);
  });

  it("should return 300 after 10 strike", () => {
    givenTurn(0);
    givenScore(10,0);

    for (let index = 0; index < 12; index++) {
          whenRoll(score1, score2);
    }


    expect(game.score()).toBe(300);
    expect(game.turnPlayed).toBe(10);
  });

  it("should return 150 with a bonus turn after 10 spare", () => {
    givenTurn(0);
    givenScore(5,5);

    for (let index = 0; index < 11; index++) {
          whenRoll(score1, score2);
    }


    expect(game.score()).toBe(150);
    expect(game.turnPlayed).toBe(10);
  });

  it("should return 20 with each throw equals 1", () => {
    givenTurn(0);
    givenScore(1,1);

    for (let index = 0; index < 10; index++) {
          whenRoll(score1, score2);
    }


    expect(game.score()).toBe(20);
    expect(game.turnPlayed).toBe(10);
  });





  function givenTurn(t) {
    turn = t;
    game.addFalseRoll(t);
  }

  function givenScore(s1, s2) {
    score1 = s1;
    score2 = s2;
  }
  function whenRoll(s1, s2, t) {
    game.roll(s1, s2, t);
  }
});
