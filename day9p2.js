const { generatePrimeSync } = require('crypto')
const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday9.txt', { encoding: 'utf-8'}).trim()


let gride = []
let totalRope = []
function node(name, coord) {
    this.name = name
    this.coord = coord
}
function coord(x, y) {
    this.x = x
    this.y = y
}
//initial pos
let x = 0 
let y = 0
//Génération de la corde
for (let i = 0; i < 10 ; i++) {
    totalRope.push(new node(i, new coord(x,y)))
}
//prise en compte de la position initiale de 9
gride.push(new coord(totalRope[9].coord.x, totalRope[9].coord.y))

data.replace(/(\r)/gm,'').split('\n').forEach(line => {
    let directionData = line.split(' ')
    const DISTANCE = directionData[1]
    const DIRECTION = directionData[0]

    for (let i=0 ; i<DISTANCE ; i++) {
        for (let j=0 ; j <= totalRope.length-1 ; j++) {
            switch (DIRECTION) {
                case 'R' :
                    mouvementDroite(j, totalRope)
                    break
                case 'L' :
                    mouvementGauche(j, totalRope)
                    break 
                case 'U' :
                    mouvementHaut(j, totalRope)
                    break 
                default :
                    mouvementBas(j, totalRope)
            }
            //une direction différente peut cause un +2
            
            if (j!=0) {
                //gestion de la diagonale HAUT DROITE
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x+2) && totalRope[j-1].coord.y == (totalRope[j].coord.y+1) ||
                totalRope[j-1].coord.x == (totalRope[j].coord.x+1) && totalRope[j-1].coord.y == (totalRope[j].coord.y+2) ||
                totalRope[j-1].coord.x == (totalRope[j].coord.x+2) && totalRope[j-1].coord.y == (totalRope[j].coord.y+2)) {
                    //console.log('Nous sommes dans une DIAG HAUT DROIT') 
                    diagonalHautDroit(j, totalRope)
                }
                //gestion de la diagonale HAUT GAUCHE
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x-2) && totalRope[j-1].coord.y == (totalRope[j].coord.y+1) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x-1) && totalRope[j-1].coord.y == (totalRope[j].coord.y+2) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x-2) && totalRope[j-1].coord.y == (totalRope[j].coord.y+2)) {
                    //console.log('Nous sommes dans une DIAG HAUT GAUCHE') 
                    diagonalHautGauche(j, totalRope)
                }
                //gestion de la diagonale BAS GAUCHE
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x-2) && totalRope[j-1].coord.y == (totalRope[j].coord.y-1) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x-1) && totalRope[j-1].coord.y == (totalRope[j].coord.y-2) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x-2) && totalRope[j-1].coord.y == (totalRope[j].coord.y-2)) {
                    //console.log('Nous sommes dans une DIAG BAS GAUCHE') 
                    diagonalBasGauche(j, totalRope)
                }

                //gestion de la diagonale BAS DROITE
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x+2) && totalRope[j-1].coord.y == (totalRope[j].coord.y-1) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x+1) && totalRope[j-1].coord.y == (totalRope[j].coord.y-2) ||
                    totalRope[j-1].coord.x == (totalRope[j].coord.x+2) && totalRope[j-1].coord.y == (totalRope[j].coord.y-2)) {
                    //console.log('Nous sommes dans une DIAG BAS DROIT') 
                    diagonalBasDroit(j, totalRope)
                }

                //si x= et y+ HAUT
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x) && totalRope[j-1].coord.y == (totalRope[j].coord.y+2)){
                    pushTop(j, totalRope)
                }
                //si x= et y- BAS
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x) && totalRope[j-1].coord.y == (totalRope[j].coord.y-2)){
                    pushBot(j, totalRope)
                }
                //si x= et y- DROITE
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x+2) && totalRope[j-1].coord.y == (totalRope[j].coord.y)){
                    pushRight(j, totalRope)
                }
                //si x= et y- BAS
                if (totalRope[j-1].coord.x == (totalRope[j].coord.x-2) && totalRope[j-1].coord.y == (totalRope[j].coord.y)){
                    pushLeft(j, totalRope)
                }

            } 
        }  
    }
})

//result
console.log('Rope visited ' + gride.length + ' positions différentes !')



function mouvementDroite(j, totalRope){
    if (j==0) {
        totalRope[j].coord.x ++ 
    } else {
        if (totalRope[j-1].coord.x == (totalRope[j].coord.x+2))  {
            //ne se déplacer que si la CORDE demeure sur la même ligne
            if (totalRope[j].coord.y == totalRope[j-1].coord.y) {
                totalRope[j].coord.x ++

                //prise en compte que si position 9
                if (j==9) {
                    if (!gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y ))) {
                        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
                    }
                } 
            }
        } 
    }
}

function mouvementGauche(j, totalRope){
    if (j==0) {
        totalRope[j].coord.x --  
    } else {
        if (totalRope[j-1].coord.x == (totalRope[j].coord.x-2))  {
            if (totalRope[j].coord.y == totalRope[j-1].coord.y) {
                totalRope[j].coord.x --
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
            }
        } 
    } 
}

function mouvementHaut(j, totalRope){
    if (j==0) {
        totalRope[j].coord.y ++ 
    } else {
        if (totalRope[j-1].coord.y == (totalRope[j].coord.y+2))  {
            if (totalRope[j].coord.x == totalRope[j-1].coord.x) {
                totalRope[j].coord.y ++
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
            }
        }
    }
}

function mouvementBas(j, totalRope){
    if (j==0) {
        totalRope[j].coord.y -- 
    } else {
        //ne pas se déplacer si la gauche occupée par la CORDE
        if (totalRope[j-1].coord.y == (totalRope[j].coord.y-2))  {
            //ne se déplacer que si la CORDE demeure sur la même ligne
            if (totalRope[j].coord.x == totalRope[j-1].coord.x) {
                totalRope[j].coord.y --
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))

            }
        }
    }
}

//console.log(gride)

function diagonalHautDroit(j, totalRope){
    totalRope[j].coord.x ++ 
    totalRope[j].coord.y ++ 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function diagonalHautGauche(j, totalRope){
    totalRope[j].coord.x -- 
    totalRope[j].coord.y ++ 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function diagonalBasGauche(j, totalRope){
    totalRope[j].coord.x -- 
    totalRope[j].coord.y -- 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y ))) 
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function diagonalBasDroit(j, totalRope){
    totalRope[j].coord.x ++ 
    totalRope[j].coord.y -- 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function pushTop(j, totalRope){
    totalRope[j].coord.y ++ 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function pushBot(j, totalRope){
    totalRope[j].coord.y -- 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function pushRight(j, totalRope){
    totalRope[j].coord.x ++ 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}

function pushLeft(j, totalRope){
    totalRope[j].coord.x -- 
    if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j].coord.y )))
        gride.push(new coord(totalRope[j].coord.x, totalRope[j].coord.y))
}
