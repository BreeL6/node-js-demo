const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
        const second = result
        writeFile(
            './content/result-asyn.txt',
            `Here is the result:${first},${second}`, (err, result) => {
                //必须写callback
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next task')

