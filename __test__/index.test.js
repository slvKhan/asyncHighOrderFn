import { map, mapAsync } from '../src/map';
import { filter, filterAsync } from '../src/filter';

const list = [1, 5, 7, -5, 0];
const callback = (el) => el * 2;
const callback2 = (el) => el + 1;
const callback3 = (el) => el > 4;

test('myMap', () => {
	expect(map(list, callback)).toEqual(list.map(callback));
	expect(map(list, callback2)).toEqual(list.map(callback2));
});

test('asyncMap', () => {
	mapAsync(list, callback, (res) => {
		expect(res).toEqual(list.map(callback));
	});
})

test('asyncFilter', () => {
	filterAsync(list, callback3, (res) => {
		expect(res).toEqual(list.filter(callback3));
	});
})

test('myFilter', () => {
	expect(filter(list, callback3)).toEqual(list.filter(callback3));
});
