module.exports = class Game {
  turnPlayed=0;
  scoreTotal=0;

  roll (score) {
    this.scoreTotal+=score;
    this.turnPlayed++;
  }

  score(){
    return this.scoreTotal;
  }





}
