function Character(name, clan, life, damage){
  this.life = life;
  this.damage = damage;
  this.maxLife = life;
  this.counter = 2;
  this.name = name;
  this.clan = clan;
  this.poison = this.getPoison();
}

Character.prototype.setLife = function(dmg) {
  this.life -= dmg;
}

Character.prototype.getDamage = function() {
  return this.damage;
}

Character.prototype.attack = function(obj) {
  obj.setLife(this.getDamage());
}

Character.prototype.isAlive = function() {
  return this.life > 0;
}

Character.prototype.getLife = function() {
  return this.life;
}

Character.prototype.shouldUseSkill = function() {
  return (this.life < this.maxLife/2 && this.counter > 0);
}

Character.prototype.refresh = function(){
  this.life = this.maxLife;
  this.counter = 2;
}

Character.prototype.shouldUseOppositeSkill = function(){
  if (this.poison){
    this.useOppositeSkill();
  }
}
Character.prototype.useOppositeSkill = function(){
  if (this instanceof Hero){
    this.getDamage = Monster.prototype.getDamage;
  }
  else if (this instanceof Monster){
    this.setLife = Hero.prototype.setLife;
  }
}

 Character.prototype.getPoison = function() {
  if (Math.random() > 0.5) {
    return true;
  }
  else return false;
}

