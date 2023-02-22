const path = require('path');
console.log(path.dirname('/var/www/html/node_project/OsTutorial.js'));
console.log(path.basename('/var/www/html/node_project/OsTutorial.js'));
console.log(path.extname('/var/www/html/node_project/OsTutorial.js'));
console.log(path.parse('/var/www/html/node_project/OsTutorial.js'));

var {name,add} = require('./exportModule'); //help of object disturcturing

console.log(add(5,5))
console.log(name);