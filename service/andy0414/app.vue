<script lang="ts" setup></script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@vue-monorepo/design-system/color";
@import "@vue-monorepo/design-system/scss";

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
