

const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday10.txt', { encoding: 'utf-8'}).trim()

let cycle = 0
let x = 1 
let signalStrength = 0 
let screen = new Array(6)
console.log(screen.length)
for (let j = 0; j < screen.length ; j++) {
    screen[j] = new Array(40); 
    for (let i = 0; i < 40; i++) {
        screen[j][i] = '.'        
    }
    //console.log('ligne n° ' + j + ' == > ' + screen[j])
}
let ligneTab = 0 

//console.log(screen)

data.replace(/(\r)/gm,'').split('\n').forEach((line, index) => { 
    
    
    if (cycle == x-1 || cycle == x || cycle == x+1) {
        drawTable(cycle)
    } else {
        drawNothing(cycle)
    }

    let lineSplit = line.split(' ')
    if (lineSplit[1] != null) 
        cycle ++
        if (cycle == 40) {
            cycle = 0 
            ligneTab ++ 
        }
        if (cycle == x-1 || cycle == x || cycle == x+1) {
            console.log('cycle vaut ' + cycle)
            console.log('x vaut ' + x)
            drawTable(cycle)
        } else {
            drawNothing(cycle)
        }
    
    cycle ++
    if (cycle == 40) {
        cycle = 0 
        ligneTab ++ 
    }
        

    if (lineSplit[1] != null)
        x += Number(lineSplit[1])
})
for (let j = 0; j < screen.length ; j++) {
    console.log(' == > ' + screen[j])
}
//console.log(screen)




function drawTable(cycle){
    screen[ligneTab][cycle] = '#'
}
function drawNothing(cycle){
    screen[ligneTab][cycle] = ' '
}