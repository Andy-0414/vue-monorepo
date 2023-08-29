<script lang="ts" setup>
defineProps<{
  size?: number;
}>();
</script>
<template>
  <div class="spacing"></div>
</template>
<style lang="scss" scoped>
.spacing {
  padding-bottom: v-bind(size);
}
</style>
