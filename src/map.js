const map = (coll, cb) => {
	const res = [];
	for (const el of coll) {
		res.push(cb(el));
	}
	return res
};

export default map;
