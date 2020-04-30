const map = (coll, cb) => {
	const iter = (collection, acc) => {
		if (collection.length === 0) {
			return [];
		}

		const [head, ...tail] = collection;
		const newAcc = [...acc, cb(head)];
		if (tail.length === 0) {
			return newAcc;
		}

		return iter(tail, newAcc);
	};
	return iter(coll, []);
};

export default map;
