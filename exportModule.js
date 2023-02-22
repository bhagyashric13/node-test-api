var add = function addition(a,b){
    return a+b;
}
var name = "bhagyashri";

module.exports = {add,name};

// IFFI used for module wrapperd scope is. It have local scope in indevidul file so that we can use easily
// (function(exports,require,module,__filename, __dirname,){

// });