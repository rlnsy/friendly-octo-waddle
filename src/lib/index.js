import * as _a_ from "./a.out.js";

const MAX_FILE_READ = 2048;

const makeFunctions = (_m_) => {
	return {
		add: (a,b) => _m_._add(a,b),
		vfs: {
				write: (name, data) => {
					const _name = _m_.allocate(_m_.intArrayFromString(name), _m_.ALLOC_NORMAL);
					const _data = _m_.allocate(_m_.intArrayFromString(data), _m_.ALLOC_NORMAL);
					return _m_._vfs_write(_name, _data);
				},
				read: (name) => {
					const _name = _m_.allocate(_m_.intArrayFromString(name), _m_.ALLOC_NORMAL);
					const _buf = _m_._malloc(MAX_FILE_READ * 4);
					const result = _m_._vfs_read(_name, _buf);
					const data = _m_.UTF8ToString(_buf);
					_m_._free(_buf);
					return { result, data };
				},
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
