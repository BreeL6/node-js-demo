const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);
writeFileSync(
    './content/result-syn.txt',
    `Here is the result:${first},${second}`,
    //    optional选项：add
    { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')