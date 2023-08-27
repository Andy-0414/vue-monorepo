<script lang="ts" setup>
import { adaptive } from "../color/index";
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>

<template>
  <div id="test">{{ isDark ? "dark" : "light" }}</div>
</template>

<style lang="scss">
#test {
  background: v-bind("adaptive.background");
  transition: all 0.3s ease;
}
</style>
