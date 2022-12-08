const FS = require('fs')

const formattedInput = FS.readFileSync('inputs/inputday6', { encoding: 'utf-8'}).trim()
for (let index = 0; index < formattedInput.split('').length; index++) {
    let present = false 
    formattedInput.substring(index, index+14).split('').forEach((char) => {
        if (formattedInput.substring(index, index+14).replace(char, '').includes(char)){
            present = true
        }
    })
    if (!present) {
        console.log('Résultat => ' + (index+14))
        break
    }
}