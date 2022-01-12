import {calculator} from './index'

test('Sum calculator', () => {
  expect(calculator.sum(3,2)).toBe(5)
})

test('Substrack calculator', () => {
  expect(calculator.substrack(4,2)).toBe(2)
})

test('multiply calculator', () => {
  expect(calculator.multiply(7,8)).toBe(56)
})

test('divide calculator', () => {
  expect(calculator.divide(26,2)).toBe(13)
})