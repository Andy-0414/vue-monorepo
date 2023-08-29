<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    id="app"
    @click="
      {
        toggleDark();
      }
    "
  >
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@vue-monorepo/design-system/color";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.25s;
}
html,
body,
#app {
  width: 100%;
  height: 100vh;
}

#app {
  background: var(--background);
  color: var(--grey100);
}
</style>
