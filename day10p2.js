const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday10.txt', { encoding: 'utf-8'}).trim()

let cycle = 0
let x = 1 
let screen = new Array(6)
for (let j = 0; j < screen.length ; j++) {
    screen[j] = new Array(40); 
    for (let i = 0; i < 40; i++) {
        screen[j][i] = '.'        
    }
}
let ligneTab = 0 

data.replace(/(\r)/gm,'').split('\n').forEach((line, index) => { 
    
    if (cycle == x-1 || cycle == x || cycle == x+1) 
        screen[ligneTab][cycle] = '#'

    let lineSplit = line.split(' ')
    if (lineSplit[1] != null) 
        cycle ++
        if (cycle == 40) {
            cycle = 0 
            ligneTab ++ 
        }
        if (cycle == x-1 || cycle == x || cycle == x+1) 
            screen[ligneTab][cycle] = '#'
    
    cycle ++
    if (cycle == 40) {
        cycle = 0 
        ligneTab ++ 
    }
    if (lineSplit[1] != null)
        x += Number(lineSplit[1])
})
screen.map(line => console.log('=> ' + line))