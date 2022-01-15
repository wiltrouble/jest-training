import {orderWeight} from './index'

test('Order Weight ', () => {
  expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")).toBe("11 11 2000 10003 22 123 1234000 44444444 9999")
})