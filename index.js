const { PokemonMaster } = require("./pokemonMaster")
const { ElectricType, FireType, GrassType, NormalType, WaterType, DragonType } = require("./subPokemon")

const pikachu = new ElectricType("Pikachu", 16, {
    ThunderShock: 34,
    DoubleKick: 20,
    ElectricShock: 23,
    Zapp: 19
  }, 100)

const charizard = new FireType("Charizard", 45, {
    FireBlast: 67,
    SeismicToss: 45,
    Fly: 40,
    HeatWave: 60
  }, 100)

const bulbasaur = new GrassType("Bulbasaur", 5, {
    Tackle: 4,
    VineWhip: 9,
    LeechSeed: 5,
    SleepPowder: 7
  }, 60)

const snorlax = new NormalType("Snorlax", 20, {
    Lick: 9,
    Glare: 12,
    BodySlam: 50,
    Rest: 0
  }, 150)

const squirtle = new WaterType("Squirtle", 19, {
    WaterGun: 36,
    Bubblebeam: 10,
    Bite: 15,
    RapidSpin: 20
  }, 100)

const dragonite = new DragonType("Dragonite", 50, {
    DragonClaw: 60,
    HyperBeam: 120,
    ThunderPunch: 50,
    AquaTail: 50
  }, 100)

const poliwag = new WaterType("Poliwag", 32, {
    Bubblebeam: 20,
    Hypnosis: 20,
    Leech: 45,
    Bash: 23
}, 100)

const ash = new PokemonMaster("Ash", 12)
const misty = new PokemonMaster("Misty", 14)

ash.catchPokemon(pikachu)
ash.catchPokemon(charizard)
ash.catchPokemon(bulbasaur)
ash.catchPokemon(snorlax)
misty.catchPokemon(squirtle)

ash.challenge(misty)
