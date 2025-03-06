<template>
  <n-h3> Premium Feature </n-h3>
  {{ settings }}
</template>

<script setup lang="ts">
import type { Settings } from "@/stores/user/settings";

const props = defineProps<{
  settings?: Settings;
}>();
</script>

<style lang="sass" scoped></style>
