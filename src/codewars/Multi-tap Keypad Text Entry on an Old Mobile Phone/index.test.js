import {presses} from './index'
test('LOL should write with 9 pushes', () => {
  expect(presses('LOL')).toBe(9)
})