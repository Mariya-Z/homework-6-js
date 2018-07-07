function Hero () {
  Character.apply(this, arguments);
}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.setLife = function(dmg) {
  if ( this.shouldUseSkill() ) {
    this.counter--;
  } else {
      this.life -= dmg;
    }
}

Hero.NAMES = ['Hero1', 'Hero2', 'Hero3'];

Hero.MUGGER_LIFE = 300;
Hero.MUGGER_DMG = 80;

Hero.TROOPER_LIFE = 200;
Hero.TROOPER_DMG = 100;

Hero.WIZARD_LIFE = 250;
Hero.WIZARD_DMG = 90;

Hero.MUGGER_CLAN = {
  name: 'Вор',
  life: Hero.MUGGER_LIFE,
  damage: Hero.MUGGER_DMG,
}

Hero.TROOPER_CLAN = {
  name: 'Воин',
  life: Hero.TROOPER_LIFE,
  damage: Hero.TROOPER_DMG,
}

Hero.WIZARD_CLAN = {
  name: 'Волшебник',
  life: Hero.WIZARD_LIFE,
  damage: Hero.WIZARD_DMG,
}

function muggerFactory(name) {
  return new Hero(name, Hero.MUGGER_CLAN, Hero.MUGGER_LIFE,
    Hero.MUGGER_DMG);
}

function trooperFactory(name) {
  return new Hero(name, Hero.TROOPER_CLAN, Hero.TROOPER_LIFE,
    Hero.TROOPER_DMG);
}

function wizardFactory(name) {
  return new Hero(name, Hero.WIZARD_CLAN, Hero.WIZARD_LIFE,
    Hero.WIZARD_DMG);
}
