import { 
  uniqueOrder, 
  uniqueInOrder, 
  uniqueInOrder2 } from './index'

test('Test 1', () => {
  expect(uniqueOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B'])
})

test('Test 2', () => {
  expect(uniqueOrder('1223')).toStrictEqual(['1', '2', '3'])
})

test('Test 3', () => {
  expect(uniqueOrder([1,2,2,3])).toStrictEqual([1, 2, 3])
})

test('Test 1', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B'])
})

test('Test 2', () => {
  expect(uniqueInOrder('1223')).toStrictEqual(['1', '2', '3'])
})

test('Test 3', () => {
  expect(uniqueInOrder([1,2,2,3])).toStrictEqual([1, 2, 3])
})

test('Test 1', () => {
  expect(uniqueInOrder2('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B'])
})

test('Test 2', () => {
  expect(uniqueInOrder2('1223')).toStrictEqual(['1', '2', '3'])
})

test('Test 3', () => {
  expect(uniqueInOrder2([1,2,2,3])).toStrictEqual([1, 2, 3])
})
