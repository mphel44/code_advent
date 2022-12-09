const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday9.txt', { encoding: 'utf-8'}).trim()


let gride = []
let position = []

//initial pos
let x = 1 
let y = 1
gride.push([x,y])

data.replace(/(\r)/gm,'').split('\n').forEach(line => {
    let directionData = line.split(' ')
    switch (directionData[0]) {
        case 'R' :
        case 'L' :
        case 'D' :
        default :
    }

        if (isNaN(char)) {




            console.log(char + ' est la DIRECTION à prendre')
        } else {
            console.log(char + ' est la distance à parcourir ! ')
        }


})




//result
console.log('Rope visited ' + gride.length + ' positions !')

