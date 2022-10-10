const app = Vue.createApp({
   data() {
      return {
         player: { hp: 100, hp_max: 100, power: 8 },
         monster: { hp: 100, hp_max: 100, power: 12 },
         battle_log: [],
      };
   },
   methods: {
      playerAttack() {
         damage = Math.floor(Math.random() * this.player.power);
         this.battle_log.push(`Player hits Monster for ${damage}`);
         this.monster.hp -= damage;
         this.monsterAttack();
      },
      monsterAttack() {
         damage = Math.floor(Math.random() * this.monster.power);
         this.battle_log.push(`Monster hits Player for ${damage}`);
         this.player.hp -= damage;
      },
      specialAttack() {
         damage = Math.floor(Math.random() * this.player.power * 3);
         this.battle_log.push(`Player CRUSHES Monster for ${damage}`);
         this.monster.hp -= damage;
         this.monsterAttack();
      },
      heal() {
         heal = 33;
         this.battle_log.push(`Player heals for ${heal}`);
         this.player.hp += heal;
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
