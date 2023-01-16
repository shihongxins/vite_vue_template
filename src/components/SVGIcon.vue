<template>
  <svg aria-hidden="true" class="svg-icon" :width="width" :height="height" :color="props.color" :style="style">
    <use :xlink:href="symbolId" fill="currentcolor" />
  </svg>
</template>

<script lang="ts" setup>
  import { defineProps, computed } from "vue";
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: () => "1em",
    },
    width: {
      type: [String, Number],
      default: () => "",
    },
    height: {
      type: [String, Number],
      default: () => "",
    },
    color: {
      type: String,
      default: () => "currentcolor",
    },
  });
  const symbolId = computed(() => `#icon-${props.icon}`);
  const width = computed(() => props.width || props.size);
  const height = computed(() => props.height || props.size);
  const style = computed(() => {
    return {
      verticalAlign: height.value.toString().replace(/\d+(\.\d+)?/, (match) => {
        return parseFloat(match) * -0.15 + "";
      }),
    };
  });
</script>

<style>
  .svg-icon {
    position: relative;
    display: inline-block;
    vertical-align: -0.15em;
    fill: currentcolor;
  }
</style>
