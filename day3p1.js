
const FS = require('fs') ;
const ALPH = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
FS.readFile("C:\\Users\\Maxime P\\Desktop\\input", 'utf-8', (err, data) => {
    let sum = 0 ;
    let sameChar = 'a' ; 
    data.split("\n").forEach(elem => {
        let backback1 = elem.substring(0, elem.length/2) ;
        let backpack2 = elem.substring(elem.length/2, elem.length) ;
        backback1.split("").forEach(char => {
            if (backpack2.includes(char)) {
                sameChar = char ; 
            }
        })
        sum += (ALPH.indexOf(sameChar) + 1) 
    })
    console.log("somme finale =>" + sum) ;
}) 


