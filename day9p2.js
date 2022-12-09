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
let x = 1 
let y = 1

//Génération de la corde
for (let i = 0; i < 10 ; i++) {
    totalRope.push(new node(i, new coord(x,y)))
}

//prise en compte de la position initiale de 9
gride.push(totalRope[9].coord)





data.replace(/(\r)/gm,'').split('\n').forEach(line => {
    let directionData = line.split(' ')
    const DISTANCE = directionData[1]
    const DIRECTION = directionData[0]

    for (let i=0 ; i<DISTANCE ; i++) {

        for (let j=0 ; j <= totalRope.length ; j++) {
            console.log(totalRope[j].coord.y)
        }




        /*

        for (let j=0 ; j <= totalRope.length ; j++) {
            

            switch (DIRECTION) {
                case 'R' :
                    //la tete se déplace forcément
                    if (j==0) {
                        totalRope[j].coord.x ++ 

                    } else {

                        if (totalRope[j].coord.x == (totalRope[j-1].coord.x+2))  {

                            //ne se déplacer que si la CORDE demeure sur la même ligne
                            if (totalRope[j].coord.y == totalRope[j-1].coord.y) {
                                totalRope[j].coord.x ++

                                //prise en compte que si position 9
                                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
                            }
                        } 
                    }

                    //ne pas se déplacer si la droite occupée par la CORDE
                    
                    break 
    
                case 'L' :
                    if (j==0) {
                        totalRope[j].coord.x --  
                    } else {
                        //ne pas se déplacer si la gauche occupée par la CORDE
                        if (totalRope[j].coord.x == (totalRope[j].coord.x-2))  {
                            //ne se déplacer que si la CORDE demeure sur la même ligne
                            if (totalRope[j].coord.y == totalRope[j-1].coord.y) {
                                totalRope[j].coord.x --
                                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
                            }
                        }
                    }
                    
                    break 
    
                //gestion du HAUT (y++)
                case 'U' :
                    totalRope[j].coord.y ++ 
                    //ne pas se déplacer si la gauche occupée par la CORDE
                    if (totalRope[j].coord.y == (totalRope[j-1].coord.y+2))  {
                        //ne se déplacer que si la CORDE demeure sur la même ligne
                        if (totalRope[j].coord.x == totalRope[j].coord.x) {
                            totalRope[j-1].coord.y ++
                            if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                                gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
    
                        }
                    }
                    break 
    
                default :
                    totalRope[j].coord.y -- 
                    //ne pas se déplacer si la gauche occupée par la CORDE
                    if (totalRope[j].coord.y == (totalRope[j-1].coord.y-2))  {
                        //ne se déplacer que si la CORDE demeure sur la même ligne
                        if (totalRope[j].coord.x == totalRope[j].coord.x) {
                            totalRope[j-1].coord.y --
                            if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                                gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
    
                        }
                    }
            } 
      
            //gestion de la diagonale HAUT DROITE
            if (totalRope[j].coord.x == (totalRope[j].coord.x+2) && totalRope[j].coord.y == (totalRope[j-1].coord.y+1) ||
                totalRope[j].coord.x == (totalRope[j].coord.x+1) && totalRope[j].coord.y == (totalRope[j-1].coord.y+2)) {
                totalRope[j].coord.x ++ 
                totalRope[j-1].coord.y ++ 
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
    
            }
    
            //gestion de la diagonale HAUT GAUCHE
            if (totalRope[j].coord.x == (totalRope[j].coord.x-2) && totalRope[j].coord.y == (totalRope[j-1].coord.y+1) ||
                totalRope[j].coord.x == (totalRope[j].coord.x-1) && totalRope[j].coord.y == (totalRope[j-1].coord.y+2)) {
                totalRope[j].coord.x -- 
                totalRope[j-1].coord.y ++ 
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
    
            }
    
            //gestion de la diagonale BAS GAUCHE
            if (totalRope[j].coord.x == (totalRope[j].coord.x-2) && totalRope[j].coord.y == (totalRope[j-1].coord.y-1) ||
                totalRope[j].coord.x == (totalRope[j].coord.x-1) && totalRope[j].coord.y == (totalRope[j-1].coord.y-2)) {
                totalRope[j].coord.x -- 
                totalRope[j-1].coord.y -- 
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y ))) 
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
    
            }
    
            //gestion de la diagonale BAS DROITE
            if (totalRope[j].coord.x == (totalRope[j].coord.x+2) && totalRope[j].coord.y == (totalRope[j-1].coord.y-1) ||
                totalRope[j].coord.x == (totalRope[j].coord.x+1) && totalRope[j].coord.y == (totalRope[j-1].coord.y-2)) {
                totalRope[j].coord.x ++ 
                totalRope[j-1].coord.y -- 
                if (j==9 && !gride.some( coord => (coord.x == totalRope[j].coord.x && coord.y == totalRope[j-1].coord.y )))
                    gride.push(new coord(totalRope[j].coord.x, totalRope[j-1].coord.y))
            }
        }

        */
        
    }
})


//result
console.log('Rope visited ' + gride.length + ' positions différentes !')


