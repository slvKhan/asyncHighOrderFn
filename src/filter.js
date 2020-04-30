const filter = (coll, cb) => {
	if (coll.length === 0) {
		return [];
	}
	const iter = (collection, acc) => {
		const [head, ...tail] = collection;
		const newAcc = cb(head) ? [...acc, head] : acc;
		if (tail.length === 0) {
			return newAcc;
		}

		return iter(tail, newAcc);
	};
	return iter(coll, []);
};

export default filter;
