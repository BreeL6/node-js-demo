const { Bree, Jack } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenad');

sayHi('GXR');
// sayHi(names.Bree);
// sayHi(names.Jack);

sayHi(Bree);
sayHi(Jack);

console.log(data);
console.log(data.items[0]);
sayHi(data.items[0]);

console.log(data.singlePerson.name)