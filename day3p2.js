const { group } = require('console');
const FS = require('fs') ;
const ALPH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

FS.readFile("C:\\Users\\Maxime P\\Desktop\\input", 'utf-8', (err, data) => {
    let sum = 0 ;
    let compteur = 0 ; 
    let groupBP = [] ;
    let sameChars ; 
    let sameChar ; 
    data.split("\n").forEach(elem => {
        compteur ++ ; 
        groupBP.push(elem) ;
        if (groupBP.length == 3) {
            groupBP[0].split("").forEach(char => {
                if (groupBP[1].includes(char)) {
                    sameChars += char ; 
                }
            }) 
            sameChars.split("").forEach(char => {
                if (groupBP[2].includes(char)) {
                    sameChar = char ;
                }
            })
            sum += (ALPH.indexOf(sameChar) + 1) 
        }
        if (compteur%3 == 0) {
            groupBP = [] ;
        }
    })
    console.log("somme finale =>" + sum) ;
}) 
