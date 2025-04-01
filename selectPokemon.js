const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const challengerPokemonSelect = (challenger) => {
    return new Promise((resolve) => {

        rl.question(
            `
            Challenger! Select a Pokemon! \n
            1. ${challenger.caughtPokemon[0]?.name || "No pokemon" } \n
            2. ${challenger.caughtPokemon[1]?.name || "No pokemon" } \n
            3. ${challenger.caughtPokemon[2]?.name || "No pokemon" } \n
            4. ${challenger.caughtPokemon[3]?.name || "No pokemon" } \n
            `, number => {
                let challengerChoice = challenger.caughtPokemon[parseInt(number-1)]
                resolve(challengerChoice)
                
            }
        )
    })
}


const rivalPokemonSelect = (rival) => {
    return new Promise((resolve) => {

        rl.question(
            `
            Rival! Select a Pokemon! \n
            1. ${rival.caughtPokemon[0]?.name || "No pokemon" } \n
            2. ${rival.caughtPokemon[1]?.name || "No pokemon" } \n
            3. ${rival.caughtPokemon[2]?.name || "No pokemon" } \n
            4. ${rival.caughtPokemon[3]?.name || "No pokemon" } \n
            `, number => {
                let rivalChoice = rival.caughtPokemon[parseInt(number-1)]
                resolve(rivalChoice)
                
            }
        )
    })
}

module.exports = {
    challengerPokemonSelect,
    rivalPokemonSelect
}