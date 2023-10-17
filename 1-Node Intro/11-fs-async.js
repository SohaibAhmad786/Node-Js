const { readFile, writeFile } = require('fs')

readFile(
    './content/first.txt',
    'utf8',
    (error, result) => {
        if (error) return;
        const first = result
        readFile(
            './content/second.txt',
            'utf8',
            (error, result) => {
                if (error) return;
                const second = result

                writeFile(
                    './content/result-async.txt',
                    "HELLO THIS IS MY READ ASYNC FILE WHICH IS CREATED WITH FUNCTION",
                    {
                        flag: "a"
                    },
                    (error, result) => {
                        if (error) {
                            console.log(error);
                            return;
                        }
                        console.log(result);
                    }
                )
            }
        )
    }
)