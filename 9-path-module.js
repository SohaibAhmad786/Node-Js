const path= require("path")

// Window use path seperator backslash \   
console.log(path.sep);

// go to specific file/folder from current directory
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath);

//get the last file (name with extension) from the filePath with basename()  
const base=path.basename(filePath)
console.log(base);

// create a path from the local disk to soecific file/folder
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);