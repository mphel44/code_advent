const FS = require('fs') 
const data = FS.readFileSync('inputs/inputday11.txt', { encoding: 'utf-8'}).trim()
let monkeys = []
const MONKEYTURN = data.replace(/(\r)/gm,'').split('\n\n')
const ENDGAME = 20

//CLASSES
class Monkey {
    constructor(number, holdingItems, operation, test, trueThrowing, falseThrowing, inspected) {
        this.number = number
        this.holdingItems = holdingItems
        this.operation = operation
        this.test = test
        this.trueThrowing = trueThrowing
        this.falseThrowing = falseThrowing
        this.inspected = inspected
    }
}

class Item {
    constructor(worryLevel) {
        this.worryLevel = worryLevel
    }
}

class Operation {
    constructor(operator, value) {
        this.operator = operator
        this.value = value
    }
}

//main
MONKEYTURN.forEach(turn => {
    let actions = turn.split('\n')
    objetMaker(actions)
})


for (let i = 0; i < ENDGAME ; i++) {
    jouerRound() ;
}
resultat()

//METHODES 

function objetMaker(round){
    //monkey number
    let number = round[0].replace(':', '').split(' ')[1]
    //monkey items
    let items = []
    round[1].replace(/,/g,'').split(' ').forEach(elem => {
        if (!isNaN(elem) && elem !='') {
            let item = new Item(BigInt(elem))    
            items.push(item)
        }
    })
    //monkey operation
    let opline = round[2].split(' ')
    let operator = opline[6] == '+' ? function(a,b) { return a+b} : function(a,b) { return a*b}
    let operation = new Operation(operator, opline[7]) 
    //monkey test
    let test = BigInt(round[3].split(' ')[5])
    //monkey throwing
    let trueThrowing = round[4].split(' ')[9]
    let falseThrowing = round[5].split(' ')[9]
    let inspected = 0 
    let monkey = new Monkey(number, items, operation, test, trueThrowing, falseThrowing, inspected)
    monkeys.push(monkey)
}

function jouerRound() {
    monkeys.forEach(monkey => {
        //detainedObjet(monkey) 
        let items = monkey.holdingItems        
        while (monkey.holdingItems.length >0) {
            monkey.inspected ++ 
            let item = items[0]
            if (!isNaN(monkey.operation.value)) {
                item.worryLevel = monkey.operation.operator(BigInt(monkey.operation.value), BigInt(item.worryLevel))
            } else {
                item.worryLevel = monkey.operation.operator(BigInt(item.worryLevel), BigInt(item.worryLevel))
            }
            //console.log(item.worryLevel)
            //testcheck
            if (BigInt(item.worryLevel) % BigInt(monkey.test) == 0) {
                monkeys[monkey.trueThrowing].holdingItems.push(item)
                monkey.holdingItems.shift()
            } else {
                monkeys[monkey.falseThrowing].holdingItems.push(item)
                monkey.holdingItems.shift()
            }
        }

    })
}

function resultat() {
    let premier = 0 
    let second = 0 
    let monkeyBusiness = 0 
    monkeys.forEach(monkey => {
        if (monkey.inspected > second)
            second = monkey.inspected
        if (monkey.inspected > premier) {
            second = premier 
            premier = monkey.inspected
        }

    })
    monkeyBusiness = premier * second
    console.log('MonkeyBusiness === ' + monkeyBusiness)
}