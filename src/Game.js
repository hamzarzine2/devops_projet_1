module.exports = class Game {
  turnPlayed=0;
  scoreTotal=0;

  roll (score1,score2) {
    this.scoreTotal+=score1;
    this.scoreTotal+=score2;
    this.turnPlayed++;
  }

  score(){
    return this.scoreTotal;
  }





}
