const { log } = require("console");
const { createReadStream } = require("fs");


const stream = createReadStream(
    "./content/subfolder/bigdata.txt",
    {
        options: 9000,
        encoding: 'utf8'
    }
);

stream.on("data",(result)=>{
    console.log(result);
})











// const {writeFileSync} = require("fs")
// for (let i = 0; i < 100000; i++) {
//     writeFileSync('./content/subfolder/bigdata.txt', `Hello world`, {
//         flag: 'a',
//     },);
// }