
function Game(hero, monster) {
  this.hero = hero;
  this.monster = monster;
  this.winner = null;
}

Game.prototype.getHero = function() {
  return this.hero;
}

Game.prototype.getMonster = function() {
  return this.monster;
}

Game.prototype.getwinner = function() {
  this.winner;
}

Game.prototype.fight = function (hero, monster) {
  hero.shouldUseOppositeSkill();
  monster.shouldUseOppositeSkill();
  // console.log(hero.name + ' '  + hero.poison);
  // console.log(monster.name + ' ' + monster.poison);
  while (hero.isAlive() && monster.isAlive()) {
    hero.attack(monster);
    // console.log('Хп монстра: ' + monster.getLife());
    monster.attack(hero);
    // console.log('Хп героя: ' +hero.getLife());
  }
  if (hero.isAlive() && !monster.isAlive()){
    this.winner = this.hero;
  }
  else if (!hero.isAlive() && monster.isAlive()){
    this.winner = this.monster;
  }
  else {
    this.winner = 0;
  }
}

