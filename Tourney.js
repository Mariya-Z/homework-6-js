function Tourney(amount){
  this.participantsAmount = amount;
  this.Heros = [];
  this.Monsters = [];
}

Tourney.prototype.getParticipants = function() {
  return this.participants;
}

Tourney.prototype.getParticipantsAmount = function() {
  return this.participantsAmount;
}

Tourney.prototype.getL = function(){
  return this.participants.length;
}


Tourney.prototype.addCharacter = function(character) {
  if (this.Heros.length + this.Monsters.length < this.participantsAmount){
    if (Hero.NAMES.indexOf(character.name) != -1){
      this.Heros.push(character);
      return 'Герой ' + character.name + ' добавлен!';
    }
    else if (Monster.NAMES.indexOf(character.name) != -1){
      return 'Монстр ' + character.name + ' добавлен!';
    }
    else {
      return 'Участник ' + character.name + ' не прошел фейсконтроль!';
    }
  }
  else {
    return `На турнир зарегистрировано максимальное число участников!
      Попробуйте зарегистрироваться в следеущем турнире`;
  }
}

Tourney.prototype.getOpponents = function() {

}

Tourney.prototype.fight = function() {
  let figthNum = 0;
  let heroNum = 0;
  let monsterNum = 0;
  let participantsAmount = this.participantsAmount;
  let game;
  while (participantsAmount > 1  && this.Heros.length > 0 && this.Monsters.length > 0) {
    game = new Game(this.Heros[heroNum], this.Monsters[monsterNum]);
    ++figthNum;
    console.log('Битва №' + figthNum);
    // console.log('   hero '+ this.Heros.length + ', mon ' + this.Monsters.length );
    // console.log('   h = ' + heroNum + ', m = ' + monsterNum);
    game.fight(this.Heros[heroNum], this.Monsters[monsterNum]);
    if (this.Heros[heroNum] == game.winner) {
      console.log('Победитель битвы ' + figthNum + ' - ' + this.Heros[heroNum].name);
      this.Monsters.splice(monsterNum, 1);
      --participantsAmount;
    }
    else if (this.Monsters[monsterNum] == game.winner) {
      console.log('Победитель битвы ' + figthNum + ' - ' + this.Monsters[monsterNum].name);
      this.Heros.splice(heroNum, 1);
      --participantsAmount;
    }
    else {
      console.log('В битве ' + figthNum +' умерли оба участника!')
      this.Heros.splice(heroNum, 1);
      this.Monsters.splice(monsterNum, 1);

      participantsAmount -= 2;
    }
     if (heroNum >= this.Heros.length) {
        heroNum = 0;
      }
      if (monsterNum >= this.Monsters.length){
        monsterNum = 0;
      }
  }
}

Tourney.prototype.play = function() {
  this.participantsAmount = this.Heros.length + this.Monsters.length;
  if (!this.Monsters.length) {
    return 'Турнир не состоялся. Зарегистрировались только Герои!';
  }
  else if (!this.Heros.length) {
    return 'Турнир не состоялся. Зарегистрировались только Монстры!';
  }
  if (this.Heros.length >= 1 && this.Monsters.length >= 1) {
    this.fight();
  }
  return 0;
}

Tourney.prototype.showWinner = function() {
  if (this.Heros.length > 0) {
    return 'Победитель ' + this.Heros[0].name;
  }
  else if (this.Monsters.length > 0) {
    return 'Победитель ' + this.Monsters[0].name;
  }
    else {
    return 'Победитель не определен. Все участники погублив боях ';
  }
}

function tourneyFactory(num) {
  return new Tourney(num);
}

