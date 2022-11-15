module.exports = class Game {
  scoreTotal=0;

  roll (score) {
    this.scoreTotal+=score
  }

  score(){
    return this.scoreTotal;
  }


}
