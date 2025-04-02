const { Pokemon } = require("./pokemon")

class ElectricType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Electric", moves, health)
        this.weakness = ["Rock"]
        this.strengths = ["Water", "Flying"]
        this.ineffective = ["Ghost"]
    }
}

class FireType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Fire", moves, health)
        this.weakness = ["Fire", "Water", "Rock"]
        this.strengths = ["Grass", "Ice", "Bug"]
        this.ineffective = []
    }
}

class GrassType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Grass", moves, health)
        this.weakness = ["Water", "Ground", "Rock"]
        this.strengths = ["Fire", "Ice", "Bug"]
        this.ineffective = []
    }
}

class NormalType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Normal", moves, health)
        this.weakness = ["Rock"]
        this.strengths = ["Grass", "Ice", "Bug"]
        this.ineffective = ["Ghost"]
    }
}



class WaterType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Water", moves, health)
        this.weakness = ["Water", "Dragon"]
        this.strengths = ["Grass", "Ice", "Bug"]
        this.ineffective = ["Ground"]
    }
}

class DragonType extends Pokemon{
    constructor(name, level, moves, health){
        super(name, level, "Dragon", moves, health)
        this.weakness = ["Fairy", "Ice"]
        this.strengths = ["Fire", "Water", "Electric"]
        this.ineffective = ["Steel"]
    }
}


module.exports = {
    ElectricType, 
    FireType,
    GrassType,
    NormalType, 
    WaterType,
    DragonType
}