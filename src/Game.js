module.exports = class Game {
  turnPlayed=0;
  scoreTotal=0;
  arrayScore= [];
  scoreTurn;
  
  roll(score1,score2) {
    this.scoreTurn={
      throw1:score1,
      throw2:score2
    }

    this.arrayScore.push(this.scoreTurn);
    this.turnPlayed++;
  }

  score() {
    for(let i = 0 ; i<this.turnPlayed; i+=1){
      console.log(this.arrayScore[i])
      if(this.isStrike(this.arrayScore[i])){
        this.scoreTotal+=this.arrayScore[i+1].throw1+this.arrayScore[i+1].throw2;
      }
      this.scoreTotal+=this.arrayScore[i].throw1 + this.arrayScore[i].throw2
    }

    return this.scoreTotal;
  }

  isStrike(score){
    if(score.throw1===10)return true;
    return false;
  }




}
