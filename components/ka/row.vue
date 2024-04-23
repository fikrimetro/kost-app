<script lang="ts" setup>
import type * as CSS from 'csstype'

const props = withDefaults(
  defineProps<{
    container?: boolean
    columns?: number | string
    spacing?: number | string
    xSpacing?: number | string
    ySpacing?: number | string
    // Align Items
    align?: CSS.Property.AlignItems
    alignSm?: CSS.Property.AlignItems
    alignMd?: CSS.Property.AlignItems
    alignLg?: CSS.Property.AlignItems
    alignXl?: CSS.Property.AlignItems
    alignXxl?: CSS.Property.AlignItems
    // Align Content
    alignContent?: CSS.Property.AlignContent
    alignContentSm?: CSS.Property.AlignContent
    alignContentMd?: CSS.Property.AlignContent
    alignContentLg?: CSS.Property.AlignContent
    alignContentXl?: CSS.Property.AlignContent
    alignContentXxl?: CSS.Property.AlignContent
    // Justify
    justify?: CSS.Property.JustifyContent
    justifySm?: CSS.Property.JustifyContent
    justifyMd?: CSS.Property.JustifyContent
    justifyLg?: CSS.Property.JustifyContent
    justifyXl?: CSS.Property.JustifyContent
    justifyXxl?: CSS.Property.JustifyContent
    // Direction
    direction?: CSS.Property.FlexDirection
    directionSm?: CSS.Property.FlexDirection
    directionMd?: CSS.Property.FlexDirection
    directionLg?: CSS.Property.FlexDirection
    directionXl?: CSS.Property.FlexDirection
    directionXxl?: CSS.Property.FlexDirection
    // wrap
    wrap?: CSS.Property.FlexWrap
    wrapSm?: CSS.Property.FlexWrap
    wrapMd?: CSS.Property.FlexWrap
    wrapLg?: CSS.Property.FlexWrap
    wrapXl?: CSS.Property.FlexWrap
    wrapXxl?: CSS.Property.FlexWrap
  }>(),
  {
    container: false,
    columns: 12,
    spacing: 0,
    direction: 'row',
    wrap: 'wrap',
  },
)

const columnsComp = computed(() => {
  return parseNumber(props.columns)
})
const spacingComp = computed(() => {
  const int = parseNumber(props.spacing)
  return Number.isNaN(int) ? 0 : int
})
const xSpacingComp = computed(() => {
  const int = parseNumber(props.xSpacing)
  return Number.isNaN(int) ? spacingComp.value : int
})
const ySpacingComp = computed(() => {
  const int = parseNumber(props.ySpacing)
  return Number.isNaN(int) ? spacingComp.value : int
})

const containerClass = computed(() => (
  emoCx(
    makeContainer({
      x: xSpacingComp.value,
      y: ySpacingComp.value,
    }),
    'ka-container',
  )
))

const rowClass = computed(() => (
  emoCx(
    makeRow({
      x: xSpacingComp.value,
      y: ySpacingComp.value,
    }),
    // Direction
    makeProperty('flexDirection', props.direction, 'xs'),
    makeProperty('flexDirection', props.directionSm, 'sm'),
    makeProperty('flexDirection', props.directionMd, 'md'),
    makeProperty('flexDirection', props.directionLg, 'lg'),
    makeProperty('flexDirection', props.directionXl, 'xl'),
    makeProperty('flexDirection', props.directionXxl, 'xxl'),
    // Wrap
    makeProperty('flexWrap', props.wrap, 'xs'),
    makeProperty('flexWrap', props.wrapSm, 'sm'),
    makeProperty('flexWrap', props.wrapMd, 'md'),
    makeProperty('flexWrap', props.wrapLg, 'lg'),
    makeProperty('flexWrap', props.wrapXl, 'xl'),
    makeProperty('flexWrap', props.wrapXxl, 'xxl'),
    // Align
    makeProperty('alignItems', props.align, 'xs'),
    makeProperty('alignItems', props.alignSm, 'sm'),
    makeProperty('alignItems', props.alignMd, 'md'),
    makeProperty('alignItems', props.alignLg, 'lg'),
    makeProperty('alignItems', props.alignXl, 'xl'),
    makeProperty('alignItems', props.alignXxl, 'xxl'),
    // Align Content
    makeProperty('alignContent', props.alignContent, 'xs'),
    makeProperty('alignContent', props.alignContentSm, 'sm'),
    makeProperty('alignContent', props.alignContentMd, 'md'),
    makeProperty('alignContent', props.alignContentLg, 'lg'),
    makeProperty('alignContent', props.alignContentXl, 'xl'),
    makeProperty('alignContent', props.alignContentXxl, 'xxl'),
    // Justify
    makeProperty('justifyContent', props.justify, 'xs'),
    makeProperty('justifyContent', props.justifySm, 'sm'),
    makeProperty('justifyContent', props.justifyMd, 'md'),
    makeProperty('justifyContent', props.justifyLg, 'lg'),
    makeProperty('justifyContent', props.justifyXl, 'xl'),
    makeProperty('justifyContent', props.justifyXxl, 'xxl'),
    'ka-row',
  )
))

provide('columns', columnsComp.value)
</script>

<template>
  <div
    v-if="container"
    :class="containerClass"
  >
    <div :class="rowClass">
      <slot />
    </div>
  </div>
  <div
    v-else
    :class="rowClass"
  >
    <slot />
  </div>
</template>
