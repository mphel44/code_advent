const FS = require('fs') 
const formattedInput = FS.readFileSync('inputs/inputday6', { encoding: 'utf-8'}).trim()

let resultat = day6(formattedInput)
console.log(resultat)

function day6(input) {
    let resultat = null ; 
    input.trim().split('').forEach((char, index) => {
        let traitement = input.substring(index, index+4)
        let present = false 
        traitement.split('').forEach((char) => {
            let compa = traitement.replace(char, '') 
            if (compa.includes(char)){
                present = true
            }
        })
        if (!present) {
            resultat = (index+4)
            return resultat
        }
    })
    return resultat
}