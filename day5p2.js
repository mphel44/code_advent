const FS = require('fs')
let stacks = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[]
}


FS.readFile('inputs/inputday5.txt', 'utf-8', (err, data) => {
    let parts = data.split('\n\n')
    parts[0].split('\n').forEach(line => {
        line.split('').forEach((char, i) => {
            if (isNaN(char)) {
                switch (i) {
                    case 1 : stacks[1].push(char) ; break ;
                    case 5 : stacks[2].push(char) ; break ;
                    case 9 : stacks[3].push(char) ; break ;
                    case 13 : stacks[4].push(char) ; break ;
                    case 17 : stacks[5].push(char) ; break ;
                    case 21 : stacks[6].push(char) ; break ;
                    case 25 : stacks[7].push(char) ; break ;
                    case 29 : stacks[8].push(char) ; break ;
                    case 33 : stacks[9].push(char) ; break ;
                    default : break ;
                }
            }
        })
    })

    parts[1].split('\n').forEach(line => { 
        let values = line.split(' ')
        let tempStack = [] 
        for (let i = 1 ; i <= values[1] ; i++) {
            tempStack.push(stacks[values[3]][0])
            stacks[values[3]].shift()
        }
        for (let i = 1 ; i <= values[1] ; i++) {
            stacks[values[5]].unshift(tempStack.pop())
        }
    })
    console.log(stacks)
})