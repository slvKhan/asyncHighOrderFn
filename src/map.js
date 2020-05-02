const map = (coll, fn) => {
	if (coll.length === 0) {
		return [];
	}
	const iter = ([head, ...tail], acc) => {
		const newAcc = [...acc, fn(head)];
		if (tail.length === 0) {
			return newAcc;
		}

		return iter(tail, newAcc);
	};
	return iter(coll, []);
};

const mapAsync = (coll, fn, cb) => {
	if (coll.length === 0) {
		cb(coll);
		return;
	}
	const iter = ([head, ...tail], acc) => {
		const newAcc = [...acc, fn(head)];
		if (tail.length === 0) {
			cb(newAcc);
			return;
		}
		setTimeout(iter, 0, tail, newAcc);
	};

	iter(coll, []);
};

export { map, mapAsync };
