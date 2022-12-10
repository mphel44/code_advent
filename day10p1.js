

const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday10.txt', { encoding: 'utf-8'}).trim()

let cycle = 0
let x = 1 
let signalStrength = 0 

data.replace(/(\r)/gm,'').split('\n').forEach((line, index) => { 
    let lineSplit = line.split(' ')
    if (lineSplit[1] != null) {
        cycle ++
        if (cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) 
            signalStrength += (x * cycle)
    }
    cycle ++
    if (cycle == 20 || cycle == 60 || cycle == 100 || cycle == 140 || cycle == 180 || cycle == 220) 
        signalStrength += (x * cycle)
    if (lineSplit[1] != null)
        x += Number(lineSplit[1])
})
console.log(signalStrength)
