const FS = require('fs') ;
const ROCK = "A" ; 
const PAPER = "B" ; 
const SCISSORS = "C" ; 

let url ="C:\\Users\\Maxime P\\Desktop\\input" ;
let data ; 
let score = 0 ; 

try {
    data = FS.readFileSync(url, 'utf-8');
} catch (err) {
    console.error('Erreur lors de la récupération des éléments du fichier !');
}


let tableauParties = data.split("\n");

tableauParties.forEach(resoudre) ;


//A X - rock
//B Y - paper
//C Z - scissors
function resoudre(item, index) {
    let opponentPlay = item.charAt(0) ;
    let myPlay = item.charAt(2) ;
    
    switch (myPlay) {
        case "X" :
            switch (opponentPlay) {
                case "A" : 
                    score += 3 ;
                    break ;
                case "B" : 
                    score += 1 ;
                    break ;
                case "C" : 
                    score += 2 ;
                    break ;
            }
            break  ;
        case "Y" :
            switch (opponentPlay) {
                case "A" : 
                    score += 1 ;
                    break ;
                case "B" : 
                    score += 2 ;
                    break ;
                case "C" : 
                    score += 3 ;
                    break ;
            }
            score += 3 ; 
            break ;
        case "Z" : 
            switch (opponentPlay) {
                case "A" : 
                    score += 2 ;
                    break ;
                case "B" : 
                    score += 3 ;
                    break ;
                case "C" : 
                    score += 1 ;
                    break ;
            }
            score += 6  ;
            break  ;
    }
    

    /* switch (myPlay) {
        case "X" : 
            score ++ ; 
            myPlay = ROCK ;
            break  ;
        case "Y" : 
            score += 2 ; 
            myPlay = PAPER ;
            break ;
        case "Z" : 
            score += 3 ; 
            myPlay = SCISSORS ;
            break ;
        default : console.error("erreur dans le switch à l'index" + index) ;
    }

    if (opponentPlay === myPlay) {
        score += 3 ; 
    }
    if ((myPlay === ROCK && opponentPlay === SCISSORS) ||
        (myPlay === PAPER && opponentPlay === ROCK) ||
        (myPlay === SCISSORS && opponentPlay === PAPER)) {
        score += 6 ; 
    }  */
}

console.log("Score final = " + score) ; 



