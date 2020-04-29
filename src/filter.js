const filter = (coll, cb) => {
	const res = [];
	for (const el of coll) {
		if (cb(el)) {
			res.push(el);
		}
	}
	return res
};

export default filter;
