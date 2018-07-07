function Monster () {
  Character.apply(this, arguments);
}

Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;


Monster.prototype.getDamage = function() {

  if ( this.shouldUseSkill() ) {
    this.counter--;
    return this.damage*2;
  }

  return this.damage;
}

Monster.NAMES = ['Monster1', 'Monster2', 'Monster3'];

Monster.GOBLIN_LIFE = 250;
Monster.GOBLIN_DMG = 80;

Monster.ORKS_LIFE = 300;
Monster.ORKS_DMG = 90;

Monster.VAMPIRE_LIFE = 200;
Monster.VAMPIRE_DMG = 100;

Monster.GOBLIN_CLAN = {
  name: 'Гоблин',
  life: Monster.GOBLIN_LIFE,
  damage: Monster.GOBLIN_DMG,
}

Monster.ORKC_CLAN = {
  name: 'Толпа орков',
  life: Monster.ORKS_LIFE,
  damage: Monster.ORKS_DMG,
}

Monster.VAMPIRE_CLAN = {
  name: 'Вампир',
  life: Monster.VAMPIRE_LIFE,
  damage: Monster.VAMPIRE_DMG,
}

function goblinFactory(name) {
  return new Monster(name, Monster.GOBLIN_CLAN, Monster.GOBLIN_LIFE,
    Monster.GOBLIN_DMG);
}

function orksFactory(name) {
  return new Monster(name, Monster.ORKC_CLAN, Monster.ORKS_LIFE,
    Monster.ORKS_DMG);
}

function vampierFactory(name) {
  return new Monster(name, Monster.VAMPIRE_CLAN, Monster.VAMPIRE_LIFE,
    Monster.VAMPIRE_DMG);
}
