const { table } = require('console')
const FS = require('fs') 

const formattedInput = FS.readFileSync('inputs/inputday6', { encoding: 'utf-8'}).trim()
for (let index = 0; index < formattedInput.split('').length; index++) {
    let traitement = formattedInput.substring(index, index+4)
    let present = false 
    traitement.split('').forEach((char) => {
        let compa = traitement.replace(char, '') 
        if (compa.includes(char)){
            present = true
        }
    })
    if (!present) {
        console.log('Résultat => ' + (index+4))
        break
    }
}