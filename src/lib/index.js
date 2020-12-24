import * as _a_ from "./a.out.js";

const makeFunctions = (Module) => {
	return {
		add: (a,b) => Module._add(a,b),
		vfs: {
				write: (name, data) => Module._vfs_write(name, data),
		},
	};
};

const functions = async () => {
	return await (new _a_())
		.then((_m_) => makeFunctions(_m_))
		.catch((_e_) => {
				console.log("error loading binary");
		});
};

export default functions;
