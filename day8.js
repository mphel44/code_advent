const FS = require('fs') 


const data = FS.readFileSync('inputs/inputday8.txt', { encoding: 'utf-8'}).trim()

let forest = []

data.replace(/(\r)/gm,'').split('\n').forEach((line, y) => {
    forest[y] = []
    line.split('').forEach((tree, x) => {
        forest[y][x] = tree ;
    })
})
const LARGEUR = (forest[0].length)
const HAUTEUR = forest.length


let exteriorVisibleTrees = ((HAUTEUR * 2)-4) + (LARGEUR*2)

let interiorVisibleTrees = []
let maxScenicScore = 1 ;
let maxX
let maxY
data.replace(/(\r)/gm,'').split('\n').forEach((line, y) => {
    line.split('').forEach((tree, x) => {
        let visibleRight = true
        let visibleLeft = true
        let visibleDown = true
        let visibleUp = true
        let scenicScore = 1 
        if ((x > 0 && x < (LARGEUR-1)) && (y > 0 && y < (HAUTEUR-1))) {         
            //CHECK SUR LA DROITE 
            for (let i = x+1; i< LARGEUR ; i++) {
                //console.log('(x=' + x + ', y=' + y +') qui vaut ' + tree + ' son voisin de droite vaut ' + forest[y][i])
                if (tree <= forest[y][i]) {
                    //console.log('(' + x + ',' + y +') qui vaut ' + tree + 
                    //' est PAS visible sur la DROITE face à ' + forest[y][i])
                    visibleRight = false 
                    scenicScore = scenicScore * (i - x)
                    break
                } 
            }
    
            //CHECK SUR LA GAUCHE 
            for (let i = x-1; i>=0 ; i--) {
                if (tree <= forest[y][i]) {
                    //console.log('(' + x + ',' + y +') qui vaut ' + tree + ' n\'est pas visible sur la GAUCHE à cause de ' + forest[y][i])
                    visibleLeft = false 
                    scenicScore = scenicScore * (x - i)
                    break
                }
            }
        

            //CHECK VERS LE BAS 
            for (let i=y+1; i<HAUTEUR; i++) {
                if (tree <= forest[i][x]) {
                    //console.log('(' + x + ',' + y +') qui vaut ' + tree + 
                    //' n\'est pas visible sur le BAS à cause de ' + forest[i][x] + '(' + y + ',' + i +')')
                    visibleDown = false 
                    scenicScore = scenicScore * (i-y)
                    break
                }
            }
            //CHECK SUR LE HAUT 
            for (let i=y-1; i>=0 ; i--) {
                if (tree <= forest[i][x]) {
                    //console.log('(' + x + ',' + y +') qui vaut ' + tree + 
                    //' n\'est pas visible sur le HAUT à cause de ' + forest[i][x] + '(' + y + ',' + i +')')
                    visibleUp = false 
                    scenicScore = scenicScore * (y-i)
                    break
                }
            }

            if (visibleRight) {
                scenicScore = scenicScore * (LARGEUR-1 - x)
            }
            if (visibleLeft) {
                scenicScore = scenicScore * x
            }
            if (visibleDown) {
                scenicScore = scenicScore * (HAUTEUR-1 - y)
            }
            if (visibleUp) {
                scenicScore = scenicScore * (y)
            }


            if (visibleRight || visibleLeft || visibleDown || visibleUp) {
                interiorVisibleTrees.push(tree)
            }
 
        }

        if (maxScenicScore < scenicScore) {
            maxScenicScore = scenicScore
            maxX = x
            maxY = y
        }
    })
})

//console.log('arbres les plus grands :')
let visibleTrees = exteriorVisibleTrees + interiorVisibleTrees.length
console.log('Il y a ' + visibleTrees + ' arbres visibles depuis l\'extérieur')
console.log('Le scenic score le plus élevé est de ' + maxScenicScore)
console.log('Il s\'agit de l\'arbre situé en (' + maxX + ',' + maxY + ') de valeur de ' + forest[maxY][maxX])
