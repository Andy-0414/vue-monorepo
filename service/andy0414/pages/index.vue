<script lang="ts" setup>
import { Test } from "@vue-monorepo/design-system/component";
import { Flex } from "@vue-monorepo/design-system/utils";
</script>
<template>
  <div>
    <h1>Change Theme</h1>
    <Flex direction="column" :gap="40">
      <Test />
      <Test />
      <Test />
    </Flex>
  </div>
</template>
