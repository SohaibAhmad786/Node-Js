// Modules


// const {irfan,hassan}=require('./4-names')
// const sayhi=require('./5-utils')

// sayhi("Sohaib")
// sayhi(irfan)
// sayhi(hassan)

const name = require('./4-names')
const sayhi = require('./5-utils')
const alternativeFlavour=require('./6-alternative-flavour')
require('./7-mind-gernade')



console.log(alternativeFlavour) // { items: [ 'item1', 'item2', 'item3' ], singlePerson: { name: 'bob' } }
console.log(alternativeFlavour.items[0]) //item1
console.log(alternativeFlavour.singlePerson.name) //bob

sayhi("Sohaib")
sayhi(name.irfan)
sayhi(name.hassan)