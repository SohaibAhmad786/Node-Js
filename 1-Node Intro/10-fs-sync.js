const { readFileSync, writeFileSync } = require('fs')

// Read any file from any where
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const test = readFileSync('./content/subfolder/test.txt', 'utf8')

// Write/Create a new file anywhere

//this technique will override the data in the file
writeFileSync("./content/result-sync.txt", "HELLO THIS IS MY READ SYNC FILE WHICH IS CREATED WITH FUNCTION")

//this technique will append the data in the file, we will pass the flag key to append data
writeFileSync('./content/subfolder/test2.txt', 'Some text goes here and its create by writeFileSync', {
    flag: 'a',
},);

const result = readFileSync('./content/result-sync.txt', 'utf8')
const test2 = readFileSync('./content/subfolder/test2.txt', 'utf8')

// console.log(first,second,test);

