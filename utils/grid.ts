import { isUndefined } from 'lodash-es'
import type { DisplayThresholds } from 'vuetify'

const colTrue = function (
  threshold: keyof DisplayThresholds = 'xs',
) {
  const defValue = {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  }
  if (threshold !== 'xs') {
    return emoCss({
      [useBreakpoints(threshold)]: defValue,
    })
  }
  return emoCss(defValue)
}

const colAuto = function (
  threshold: keyof DisplayThresholds = 'xs',
) {
  const defValue = {
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
    maxWidth: 'none',
    width: 'auto',
  }
  if (threshold !== 'xs') {
    return emoCss({
      [useBreakpoints(threshold)]: defValue,
    })
  }

  return emoCss(defValue)
}

const trueOrAuto = function (
  val: true | 'auto',
  threshold: undefined | keyof DisplayThresholds = undefined,
) {
  if (val === true)
    return colTrue(threshold)
  else return colAuto(threshold)
}

const calcPercentage = function (val: any, columns: number) {
  return `${100 / (columns / parseNumber(val))}%`
}

export const makeContainer = function (
  spacing: {
    x: number
    y: number
  },
) {
  return emoCss({
    position: 'relative',
    padding: `${spacing.y}px ${spacing.x}px`,
  })
}

export const makeRow = function (
  spacing: {
    x: number
    y: number
  },
) {
  return emoCss({
    'display': 'flex',
    'marginLeft': spacing.x * -1,
    'marginTop': spacing.y * -1,
    'width': `calc(100% + ${spacing.x}px)`,
    '> .ka-col': {
      paddingLeft: spacing.x,
      paddingTop: spacing.y,
    },
  })
}

export const makeProperty = function (
  property: 'alignItems' | 'alignContent' | 'justifyContent' | 'flexDirection' | 'flexWrap',
  val: any = undefined,
  threshold: keyof DisplayThresholds = 'xs',
) {
  if (isUndefined(val))
    return null

  if (threshold === 'xs') {
    return emoCss({
      [property]: val,
    })
  }

  return emoCss({
    [useBreakpoints(threshold)]: {
      [property]: val,
    },
  })
}

export const makeCol = function (
  val: boolean | number | string | undefined,
  columns: number,
  threshold: keyof DisplayThresholds = 'xs',
) {
  if (val) {
    if (val === true || val === 'auto')
      return trueOrAuto(val, threshold)
    const defValue = {
      flexGrow: 0,
      flexBasis: calcPercentage(val, columns),
      maxWidth: calcPercentage(val, columns),
    }
    return threshold !== 'xs'
      ? emoCss({
        [useBreakpoints(threshold)]: defValue,
      })
      : emoCss(defValue)
  }
}
