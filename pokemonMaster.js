const { beginBattle } = require("./battle")

class PokemonMaster {
    constructor(name, age) {
        this.name = name,
        this.age = age,
        this.badges = 0,
        this.wins = 0,
        this.losses = 0
        this.caughtPokemon = []
    }

    introduce() {
        console.log(`Hi! I'm ${name}!`)
    }

    catchPokemon(pokemon) {
        pokemon.caught = true
        this.caughtPokemon.push(pokemon)
        console.log(`Way to go! ${this.name} caught a level ${pokemon.level} ${pokemon.name}`)
    }

    challenge(rival) {
        console.log(`Let's battle ${rival.name}!`)
        beginBattle(this, rival)
    }
}

module.exports = {
    PokemonMaster
}