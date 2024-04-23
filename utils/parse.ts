import { isNil, isNumber } from 'lodash-es'

export const parseNumber = function (
  val: any,
  type: 'int' | 'float' = 'int',
) {
  if (isNil(val) || val === '')
    return Number.NaN
  if (isNumber(val))
    return val
  let typ = Number.parseInt
  if (type === 'float')
    typ = Number.parseFloat
  return typ(val)
}
