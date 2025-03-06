<template>
  <n-h3> My Account </n-h3>
  <n-button type="error" dashed> Delete My Account </n-button>
  {{ settings }}
</template>

<script setup lang="ts">
import type { Settings } from "@/stores/user/settings";

const props = defineProps<{
  settings?: Settings;
}>();
</script>

<style lang="sass" scoped></style>
