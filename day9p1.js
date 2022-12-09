const { generatePrimeSync } = require('crypto')
const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday9.txt', { encoding: 'utf-8'}).trim()


let gride = []
function coord(x, y) {
    this.x = x;
    this.y = y;
}

//initial pos
let x = 1 
let y = 1
let rope = {
    ropeX:x,
    ropeY:y
}
let tail = {
    tailX:x,
    tailY:y
}
gride.push(new coord(tail.tailX, tail.tailY))

data.replace(/(\r)/gm,'').split('\n').forEach(line => {
    let directionData = line.split(' ')
    const DISTANCE = directionData[1]
    const DIRECTION = directionData[0]

    for (let i=0 ; i<DISTANCE ; i++) {
        switch (DIRECTION) {
            case 'R' :
                rope.ropeX ++  
                //ne pas se déplacer si la droite occupée par la CORDE
                if (rope.ropeX == (tail.tailX+2))  {
                    //ne se déplacer que si la CORDE demeure sur la même ligne
                    if (rope.ropeY == tail.tailY) {
                        tail.tailX ++
                        if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                            gride.push(new coord(tail.tailX, tail.tailY))

                    }
                } 
                break 

            case 'L' :
                rope.ropeX --  
                //ne pas se déplacer si la gauche occupée par la CORDE
                if (rope.ropeX == (tail.tailX-2))  {
                    //ne se déplacer que si la CORDE demeure sur la même ligne
                    if (rope.ropeY == tail.tailY) {
                        tail.tailX --
                        if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                            gride.push(new coord(tail.tailX, tail.tailY))

                    }
                }
                break 

            //gestion du HAUT (y++)
            case 'U' :
                rope.ropeY ++ 
                //ne pas se déplacer si la gauche occupée par la CORDE
                if (rope.ropeY == (tail.tailY+2))  {
                    //ne se déplacer que si la CORDE demeure sur la même ligne
                    if (rope.ropeX == tail.tailX) {
                        tail.tailY ++
                        if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                            gride.push(new coord(tail.tailX, tail.tailY))

                    }
                }
                break 

            default :
                rope.ropeY -- 
                //ne pas se déplacer si la gauche occupée par la CORDE
                if (rope.ropeY == (tail.tailY-2))  {
                    //ne se déplacer que si la CORDE demeure sur la même ligne
                    if (rope.ropeX == tail.tailX) {
                        tail.tailY --
                        if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                            gride.push(new coord(tail.tailX, tail.tailY))

                    }
                }
        } 
  
        //gestion de la diagonale HAUT DROITE
        if (rope.ropeX == (tail.tailX+2) && rope.ropeY == (tail.tailY+1) ||
            rope.ropeX == (tail.tailX+1) && rope.ropeY == (tail.tailY+2)) {
            tail.tailX ++ 
            tail.tailY ++ 
            if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                gride.push(new coord(tail.tailX, tail.tailY))

        }

        //gestion de la diagonale HAUT GAUCHE
        if (rope.ropeX == (tail.tailX-2) && rope.ropeY == (tail.tailY+1) ||
            rope.ropeX == (tail.tailX-1) && rope.ropeY == (tail.tailY+2)) {
            tail.tailX -- 
            tail.tailY ++ 
            if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                gride.push(new coord(tail.tailX, tail.tailY))

        }

        //gestion de la diagonale BAS GAUCHE
        if (rope.ropeX == (tail.tailX-2) && rope.ropeY == (tail.tailY-1) ||
            rope.ropeX == (tail.tailX-1) && rope.ropeY == (tail.tailY-2)) {
            tail.tailX -- 
            tail.tailY -- 
            if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY ))) 
                gride.push(new coord(tail.tailX, tail.tailY))

        }

        //gestion de la diagonale BAS DROITE
        if (rope.ropeX == (tail.tailX+2) && rope.ropeY == (tail.tailY-1) ||
            rope.ropeX == (tail.tailX+1) && rope.ropeY == (tail.tailY-2)) {
            tail.tailX ++ 
            tail.tailY -- 
            if (!gride.some( coord => (coord.x == tail.tailX && coord.y == tail.tailY )))
                gride.push(new coord(tail.tailX, tail.tailY))

        }
    }
})

//result
console.log('Rope visited ' + gride.length + ' positions différentes !')


