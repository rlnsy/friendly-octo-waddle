const _fib_ = (n) => {
	if (n == 0 || n == 1) {
		return n;
	} else {
		return _fib_(n-1) + _fib_(n-2);
	}
}

// Returns the nth fibonacci number
export const fib = (n) => _fib_(n-1)

