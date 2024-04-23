import type { DisplayThresholds } from 'vuetify'
import { useDisplay } from 'vuetify'

export const useBreakpoints = function (threshold: keyof DisplayThresholds) {
  const display = useDisplay()
  const thresholds = display.thresholds.value
  return `@media (min-width: ${thresholds[threshold]}px)`
}
