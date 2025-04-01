const c = require('ansi-colors');

class Pokemon {
  constructor(name, level, type, moves, health) {
    this.name = name
    this.level = level
    this.type = type
    this.moves = moves
    this.health = health
    this.caught = false
  }

  attack(opposition, attack) {
    // INEFFECTIVE ATTACK
    const chanceOfMissing = Math.random()
    if (chanceOfMissing > 0.8) {
        console.log(`Attack Missed`)
    } else {

        if (this.ineffective.includes(opposition.type)) {
            let ineffectiveDamage = 0
            console.log(c.red(`${this.name} attacks ${opposition.name} with ${attack}.`))
            console.log(`It does ${ineffectiveDamage} damange`)
            opposition.health -= ineffectiveDamage
            console.log("The attack is not effective")
            console.log(`${opposition.name} is left with ${opposition.health} health left`)
        } else if(this.weakness.includes(opposition.type)) {
            let weakDamage = this['moves'][attack] / 2
            console.log(c.red(`${this.name} attacks ${opposition.name} with ${attack}.`))
            console.log(`It does ${weakDamage} damange`)
            opposition.health -= weakDamage
            console.log("The attack isn't very effective")
            console.log(`${opposition.name} is left with ${opposition.health} health left`) 
        } else if(this.strengths.includes(opposition.type)) {
            let strongDamage = this['moves'][attack] * 1.5
            console.log(c.red(`${this.name} attacks ${opposition.name} with ${attack}.`))
            console.log(`It does ${strongDamage} damange`)
            opposition.health -= strongDamage
            console.log("The attack is very effective")
            console.log(`${opposition.name} is left with ${opposition.health} health left`)   
        } else {
            console.log(c.red(`${this.name} attacks ${opposition.name} with ${attack}.`))
            console.log(`It does ${this['moves'][attack]} damange`)
            opposition.health -= this['moves'][attack]
            console.log(`${opposition.name} is left with ${opposition.health} health left`)   
        }
    }
  }
}

module.exports = {
  Pokemon,
}
