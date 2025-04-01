const player = require('play-sound')();
const battleMusic = "./assets/pokemon-battle.mp3"

const c = require('ansi-colors');

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { challengerPokemonSelect, rivalPokemonSelect } = require("./selectPokemon")
const { selectAttacks } = require("./selectAttacks")

async function beginBattle(challenger, rival) {

    player.play(battleMusic)

  let challengerChoice = await challengerPokemonSelect(challenger)
  let rivalChoice = await rivalPokemonSelect(rival)


  while(challengerChoice.health > 0 && rivalChoice.health > 0){

      let challengerAttackChoice = await selectAttacks(Object.keys(challengerChoice.moves))
      challengerChoice.attack(rivalChoice, challengerAttackChoice)

      if(rivalChoice.health > 0) { 
          let rivalAttackChoice = await selectAttacks(Object.keys(rivalChoice.moves))
          rivalChoice.attack(challengerChoice, rivalAttackChoice)
        } else {
            console.log(c.yellow(`${challengerChoice.name} beats ${rivalChoice.name}!!`))
            console.log(c.yellow(`${challenger.name} wins!!`))
        }
    }

    if(challengerChoice.health < 0){
      console.log(c.green(`${rivalChoice.name} beats ${challengerChoice.name}!!`))
      console.log(c.green(`${rival.name} wins!!`))
    }


  rl.close()
}

module.exports = {
  beginBattle,
}
