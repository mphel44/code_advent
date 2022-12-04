const FS = require('fs')
FS.readFile('inputs/inputday4', 'utf-8', (err, data) => {
    let pairs = 0
    data.split('\n').forEach(line => {
        let sections = line.split(/[-,]+/) 
        if ((Number(sections[0]) >= Number(sections[2]) && Number(sections[0]) <= Number(sections[3])) ||
            (Number(sections[2]) >= Number(sections[0]) && Number(sections[2]) <= Number(sections[1]))) {
            pairs ++ 
        }
    })
    console.log('There are ' + pairs + ' pairs which overlaps.')
})