import { map, mapAsync } from '../src/map';
import { filter, filterAsync } from '../src/filter';

const list = [1, 5, 7, -5, 0];

test('myMap', () => {
	const callback = (el) => el * 2;
	const callback2 = (el) => el + 1;

	expect(map(list, callback)).toEqual(list.map(callback));
	expect(map(list, callback2)).toEqual(list.map(callback2));
});

test('asyncMap', () => {
	const callback = (el) => el * 2;

	mapAsync(list, callback, (res) => {
		expect(res).toEqual(list.map(callback));
	});
})

test('asyncFilter', () => {
	const callback = (el) => el > 4;

	filterAsync(list, callback, (res) => {
		expect(res).toEqual(list.filter(callback));
	});
})

test('myFilter', () => {
	const callback = (el) => el > 4;
	expect(filter(list, callback)).toEqual(list.filter(callback));
});
