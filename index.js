const { PokemonMaster } = require("./pokemonMaster")
const { ElectricType, FireType, GrassType, NormalType, WaterType } = require("./subPokemon")

const pikachu = new ElectricType("Pikachu", 16, { ThunderShock: 34, 
DoubleKick: 20 }, 
100)

const charizard = new FireType("Charizard", 45, {
    FireBlast: 67,
    SeismicToss: 45
}, 100)

const bulbasuar = new GrassType("Bulbasuar", 5, {
    Tackle: 4,
    VineWhip: 9
})

const snorlax = new NormalType("Snorlax", 20, {
    Lick: 9,
    Glare: 12
})

const squirtle = new WaterType("Squirtle", 19, {
  WaterGun: 36,
  Bubblebean: 10,
},
100)

const ash = new PokemonMaster("Ash", 12)
const misty = new PokemonMaster("Misty", 14)

ash.catchPokemon(pikachu)
ash.catchPokemon(charizard)
ash.catchPokemon(bulbasuar)
ash.catchPokemon(snorlax)
misty.catchPokemon(squirtle)

ash.challenge(misty)
