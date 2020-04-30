const filter = (coll, cb) => {
	const iter = (collection, acc) => {
		if (collection.length === 0) {
			return [];
		}

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
