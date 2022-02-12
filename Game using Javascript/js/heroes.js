let hero;

function Hero(name, health, chakra, strength, agility, speed) {
  this.name = name;
  this.health = health;
  this.chakra = chakra;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let HeroMoves = {
  calcAttack: function() {
    let getHeroSpeed = hero.speed;
    let getEnemySpeed = enemy.speed;

    let heroAttack = function() {
      let calcBaseDamage;
      if (hero.chakra > 0) {
        calcBaseDamage = hero.strength * hero.chakra / 100;
      } else {
        calcBaseDamage = hero.strength * hero.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(hero.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.chakra > 0) {
        calcBaseDamage = enemy.strength * enemy.chakra / 100;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    let getHeroHealth = document.querySelector(".health-hero");
    let getEnemyHealth = document.querySelector(".health-enemy");

    if (getHeroSpeed >= getEnemySpeed) {
      let heroAttackValues = heroAttack();
      let totalDamageHero = heroAttackValues[0] * heroAttackValues[1];
      enemy.health = enemy.health - totalDamageHero;
      alert(hero.name + " hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again. ");
        //getHeroHealth.innerHTML = "Health: " + hero.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        let enemyAttackValues = enemyAttack();
        let totalDamageEnemy = enemyAttackValues[0] * enemyAttackValues[1];
        hero.health = hero.health - totalDamageEnemy;
        alert(enemy.name + " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

        if (hero.health <= 0) {
          getHeroHealth.innerHTML = "Health: 0";
          alert(hero.name + " lost!! Refresh browser to play again. ")
        } else {
          getHeroHealth.innerHTML = "Health: " + hero.health;
        }
      }
    } else {
      let enemyAttackValues = enemyAttack();
      let totalDamageHero = enemyAttackValues[0] * enemyAttackValues[1];
      hero.health = hero.health - totalDamageHero;
      alert(enemy.name + " hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");

      if (hero.health <= 0) {
        alert("You Loose! Refresh browser to play again. ");
        //getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getHeroHealth.innerHTML = 'Health: 0';
      } else {
        getHeroHealth.innerHTML = 'Health: ' + hero.health;
        let heroAttackValues = heroAttack();
        let totalDamageEnemy = heroAttackValues[0] * heroAttackValues[1];
        enemy.health = enemy.health - totalDamageEnemy;
        alert(hero.name + " hit " + heroAttackValues[0] + " damage " + heroAttackValues[1] + " times.");

        if (enemy.health <= 0) {
          getEnemyHealth.innerHTML = "Health: 0";
          alert(hero.name + " win !! Refresh browser to play again. ")
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  }
}
