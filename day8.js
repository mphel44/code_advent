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
console.log("LARGEUR => " + forest[0].length)
console.log("HAUTEUR => " + forest.length)


let exteriorVisibleTrees = ((forest.length * 2)-4) + (forest[0].length*2)

let interiorVisibleTrees = []
data.replace(/(\r)/gm,'').split('\n').forEach((line, y) => {
    line.split('').forEach((tree, x) => {
 

        //CHECK SUR LA DROITE 
        if (x>0 && x<(forest[0].length-1) && y>0 && y<(forest.length-1)) {

            let visible = true 
            console.log('nouvelle ligne')

            for (let i = x; i<forest[0].length-x; i++) {
                if (tree <= forest[y][i]) {
                    //console.log('Arbre DROITE [' + y + '][' + x + '] plus petit que' + forest[y][i])
                    visible = false ;
                }
            }
    
            //CHECK SUR LA GAUCHE 
            for (let i = x; i>=0 ; i--) {
                if (tree <= forest[y][i]) {
                    //console.log(tree)
                    //console.log('Arbre GAUCHE [' + y + '][' + x + ']')
                    visible = false ;
                }
            }
        

            //CHECK VERS LE BAS 
            for (let i = y; i<forest.length-y; i++) {
                if (tree <= forest[i][x]) {
                    //console.log('Arbre BAS [' + y + '][' + x + ']')
                    visible = false ;
                }
            }
            //CHECK SUR LE HAUT 
            for (let i = y; i>=0 ; i--) {
                if (tree <= forest[i][x]) {
                    //console.log('Arbre HAUT [' + y + '][' + x + ']')
                    visible = false ;
                }
            }

            if (visible) {
                console.log('arbre[' + y + '][' + x + '] est visible de lexterieur')
                interiorVisibleTrees.push(tree)
            }
        }


    })
})

console.log('arbres les plus grands :')
console.log(interiorVisibleTrees.length)
let visibleTrees = exteriorVisibleTrees + interiorVisibleTrees.length
