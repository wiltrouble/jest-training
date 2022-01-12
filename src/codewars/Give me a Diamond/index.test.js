import { diamond } from './index'

test('Give me a Diamond with null', () => {
  expect(diamond('')).toBe(null)
})

test('Give me a Diamond with 5', () => {
  expect(diamond(3)).toBe(" *\n***\n *\n")
})

test('Give me a Diamond with 5', () => {
  expect(diamond(-3)).toBe(null)
})
