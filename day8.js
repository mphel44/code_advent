const FS = require('fs') 


const data = FS.readFileSync('inputs/inputday8.txt', { encoding: 'utf-8'}).trim()

let forest = []

data.replace(/(\r)/gm,'').split('\n').forEach((line, y) => {
    forest[y] = []
    line.split('').forEach((tree, x) => {
        forest[y][x] = tree ;
    })
})
console.log(forest)


let exteriorVisibleTrees = ((forest.length * 2)-4) + (forest[0].length*2)

let interiorVisibleTrees = []
data.replace(/(\r)/gm,'').split('\n').forEach((line, y) => {
    line.split('').forEach((tree, x) => {
        let visible = true 
        //CHECK SUR LA DROITE 
        if (x != 0 && x != forest[0].length-1) {
            for (let i = x+1; i<forest[0].length-x-1; i++) {
                if (tree <= forest[y][i]) {
                    visible = false ;
                }
            }
    
            //CHECK SUR LA GAUCHE 
            for (let i = x-1; i>=1 ; i--) {
                if (tree < forest[y][i]) {
                    visible = false ;
                }
            }
        }

        if (y != 0 && y != forest.length-1) {

            //CHECK VERS LE BAS 
            for (let i = y+1; i<forest.length-y-1; i++) {
                if (tree < forest[i][x]) {
                    visible = false ;
                }
            }
            //CHECK SUR LE HAUT 
            for (let i = y-1; i>=1 ; i--) {
                if (tree < forest[i][x]) {
                    visible = false ;
                }
            }
        }

        if (visible) {
            interiorVisibleTrees.push(tree)
        }
    })
})

console.log('arbres les plus grands :')
console.log(interiorVisibleTrees.length)
let visibleTrees = exteriorVisibleTrees + interiorVisibleTrees.length
