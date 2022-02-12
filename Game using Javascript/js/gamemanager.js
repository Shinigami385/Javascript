let GameManager = {
  setGameStart: function(name) {
    this.resetHero(name);
    this.setPreFight();
  },
  resetHero: function(name) {
    switch (name) {
      case "Naruto":
        hero = new Hero(name, 200, 0, 200, 100, 50);
        break;
      case "Sasuke":
        hero = new Hero(name, 100, 0, 100, 150, 200);
        break;
      case "Kakashi":
        hero = new Hero(name, 80, 0, 50, 200, 50);
        break;
      case "Neji":
        hero = new Hero(name, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".heroes");
    getInterface.innerHTML = '<img src="img/avatar-heroes/' + name.toLowerCase() +
      '.jpg" class="img-avatar"><div style = "width:220px; height:160px; "><h3>' + name +
      '</h3><p class = "health-hero">Health: ' + hero.health +
      '</p><p>Mana: ' + hero.mana +
      '</p><p>Strength: ' + hero.strength +
      '</p><p>Agility: ' + hero.agility +
      '</p><p>Speed: ' + hero.speed +
      '</p></div>';
    getInterface.style['flex-direction'] = 'row';
    getInterface.style['gap'] = '0px';
    getInterface.style['padding-bottom'] = '10px';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href = "#" class = "btn-prefight"' +
      'onclick="GameManager.setFight()">Search for an Enemy! </a>';
    getArena.style.visibility = "visible";

  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemies");

    getHeader.innerHTML = '<p>Task: Fight!!</p>';
    getActions.innerHTML = '<a href = "#" class = "btn-setfight"' +
      'onclick="HeroMoves.calcAttack()"> Attack! </a>';

    let randomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (randomEnemy) {
      case 0:
        enemy = new Enemy("Deidara", 100, 0, 50, 60, 100);
        break;
      case 1:
        enemy = new Enemy("Kakuzu", 200, 0, 70, 90, 20);
        break;
    }

    getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemy.name.toLowerCase() +
      '.jpg" class="img-avatar"><div><h3>' + enemy.name +
      '</h3><p class = "health-enemy">Health: ' + enemy.health +
      '</p><p>Mana: ' + enemy.mana +
      '</p><p>Strength: ' + enemy.strength +
      '</p><p>Agility: ' + enemy.agility +
      '</p><p>Speed: ' + enemy.speed +
      '</p></div>';

  }
}
