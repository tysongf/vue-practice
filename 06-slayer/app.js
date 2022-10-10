const app = Vue.createApp({
   data() {
      return {
         player: { hp: 50, hp_max: 50, power: 6, special: 0 },
         monster: { hp: 50, hp_max: 50, power: 8 },
         currentRound: 0,
         battle_log: [],
      };
   },
   computed: {
      monsterBarStyles() {
         return { width: (this.monster.hp / this.monster.hp_max) * 100 + "%" };
      },
      playerBarStyles() {
         return { width: (this.player.hp / this.player.hp_max) * 100 + "%" };
      },
      gameIsOver() {
         return this.player.hp <= 0 || this.monster.hp <= 0;
      },
   },
   methods: {
      playerAttack() {
         this.player.special++;
         damage = Math.floor(Math.random() * this.player.power);
         this.battle_log.push(`Player hits Monster for ${damage}`);
         this.monster.hp -= damage;
         this.monsterAttack();
      },
      monsterAttack() {
         if (this.monster.hp < 0) return;
         damage = Math.floor(Math.random() * this.monster.power);
         this.battle_log.push(`Monster hits Player for ${damage}`);
         this.player.hp -= damage;
      },
      specialAttack() {
         damage =
            Math.floor(Math.random() * this.player.power) +
            this.player.special * 2;
         this.player.special = 0;
         this.battle_log.push(`Player CRUSHES Monster for ${damage}`);
         this.monster.hp -= damage;
         this.monsterAttack();
      },
      heal() {
         heal = 33;
         this.battle_log.push(`Player heals for ${heal}`);
         this.player.hp = Math.min(this.player.hp + heal, this.player.hp_max);
         this.monsterAttack();
      },
      surrender() {
         this.battle_log.push(`Player Surrenders`);
         this.battle_log.push(`Monster executes Player`);
         this.player.hp = 0;
      },
   },
});

app.mount("#game");
