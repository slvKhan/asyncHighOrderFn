import map from '../src/map.js';
import filter from '../src/filter.js';

test('myMap', () => {
	const callback = el => el * 2;
	const callback2 = el => el + 1;
	const list = [1, 5, 7, -5, 0];

	expect(map(list, callback)).toEqual(list.map(callback));
	expect(map(list, callback2)).toEqual(list.map(callback2));
});

test('myFilter', () => {
	const list = [1, 5, 7, -5, 0];
	const callback = el => el > 4;
	expect(filter(list, callback)).toEqual(list.filter(callback));
});
