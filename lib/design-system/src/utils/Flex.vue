<script lang="ts" setup>
import type { CSSProperties } from "vue";

withDefaults(
  defineProps<{
    direction?: CSSProperties["flex-direction"];
    justify?: CSSProperties["justify-content"];
    align?: CSSProperties["align-items"];
    gap?: CSSProperties["gap"];
  }>(),
  {
    direction: "row",
    justify: "flex-start",
    align: "flex-start",
    gap: 0,
  }
);
</script>
<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: v-bind("direction");
  justify-content: v-bind("justify");
  align-items: v-bind("align");
  gap: v-bind("gap");
}
</style>
