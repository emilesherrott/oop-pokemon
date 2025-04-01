const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const selectAttacks = (attacks) => {
    return new Promise((resolve) => {

        rl.question(
            `
            Select an attack! \n
            1. ${attacks[0] || "No attack" } \n
            2. ${attacks[1] || "No attack" } \n
            3. ${attacks[2] || "No attack" } \n
            4. ${attacks[3] || "No attack" } \n
            `, attack => {
                let choice = attacks[attack-1]
                resolve(choice)
                
            }
        )
    })
}

module.exports = {
    selectAttacks
}