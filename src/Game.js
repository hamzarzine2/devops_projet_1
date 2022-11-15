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
      if(this.isStrike(this.arrayScore[i])){
          this.addStrike(i);
      }
      if(this.isSpare(this.arrayScore[i])){
        this.addSpare(i);
      }
      this.scoreTotal+=this.arrayScore[i].throw1 + this.arrayScore[i].throw2
    }

    return this.scoreTotal;
  }

  isStrike(score){
    if(score.throw1===10)return true;
    return false;
  }

  isSpare(score){
    if(score.throw1+score.throw2 ===10 && score.throw1 != 10)return true;
    return false;
  }

  addStrike(i){
    if(this.arrayScore[i+1].throw1===10){
      this.scoreTotal+=this.arrayScore[i+1].throw1+this.arrayScore[i+2].throw1;
    }else{
      this.scoreTotal+=this.arrayScore[i+1].throw1+this.arrayScore[i+1].throw2;
    }
  }

  addSpare(i){
    this.scoreTotal+=this.arrayScore[i+1].throw1
  }

  addFalseRoll(number){
    for(let i = 0 ; i<number; i+=1){    
      this.turnPlayed++;
      this.scoreTurn={
        throw1:0,
        throw2:0
      }
      this.arrayScore.push(this.scoreTurn);
    }
  }
}
