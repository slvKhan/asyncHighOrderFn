import index from '../src/index.js';

test('test1', () => {
	expect(index()).toBe('hello, from map!');
})