const os=require('os')


//info about current user in Operating System
const user=os.userInfo();
console.log(user);


//methods return the uptime in seconds uptime stands for 
//when our system turn on till now 
console.log(`The system uptime is ${os.uptime()}`);

const currentUser={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freMem:os.freemem(),
}
console.log(currentUser);

