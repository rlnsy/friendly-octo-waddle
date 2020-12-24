const _a_ = require("./a.out.js");

_a_().then((instance) => {
	console.log(instance.ccall("add", 'number', ['number', 'number'], [2,2]));	
})
