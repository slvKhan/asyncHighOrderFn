const filter = (coll, cb) => {
	if (coll.length === 0) {
		return [];
	}
	const iter = ([head, ...tail], acc) => {
		const newAcc = cb(head) ? [...acc, head] : acc;
		if (tail.length === 0) {
			return newAcc;
		}
		return iter(tail, newAcc);
	};
	return iter(coll, []);
};

const filterAsync = (coll, fn, cb) => {
	if (coll.length === 0) {
		cb(coll);
		return;
	}
	const iter = ([head, ...tail], acc) => {
		const newAcc = fn(head) ? [...acc, head] : acc;
		if (tail.length === 0) {
			cb(newAcc);
			return;
		}
		setTimeout(iter, 0, tail, newAcc);
	};

	iter(coll, []);
};

export { filter, filterAsync };
