// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on("response",
//     () => {
//         console.log("data received");
//     }
// )

// customEmitter.emit("response")


const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on("response",
    (name, id) => {
        console.log(`data received by user ${name} with id ${id}`);
    }
)

customEmitter.on("response",
    (name) => {
        console.log(`Some data received here too by ${name}`);
    }
)


customEmitter.emit("response", "Sohaib", 13)