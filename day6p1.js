const { table } = require('console')
const FS = require('fs') 

const formattedInput = FS.readFileSync('inputs/inputday6.txt', { encoding: 'utf-8'}).trim()
for (let index = 0; index < formattedInput.split('').length; index++) {
    let present = false 
    formattedInput.substring(index, index+4).split('').forEach((char) => {
        if (formattedInput.substring(index, index+4).replace(char, '').includes(char)){
            present = true
        }
    })
    if (!present) {
        console.log('Résultat => ' + (index+4))
        break
    }
}