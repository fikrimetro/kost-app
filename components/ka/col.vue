<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    xs?: boolean | number | string
    sm?: boolean | number | string
    md?: boolean | number | string
    lg?: boolean | number | string
    xl?: boolean | number | string
    xxl?: boolean | number | string
  }>(),
  {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  },
)

const columns = inject<number>('columns', 12)

const colClass = computed(() => (
  emoCx(
    makeCol(props.xs, columns, 'xs'),
    makeCol(props.sm, columns, 'sm'),
    makeCol(props.md, columns, 'md'),
    makeCol(props.lg, columns, 'lg'),
    makeCol(props.xl, columns, 'xl'),
    makeCol(props.xxl, columns, 'xxl'),
    'ka-col',
  )
))
</script>

<template>
  <div :class="colClass">
    <slot />
  </div>
</template>
