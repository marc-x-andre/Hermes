<script setup>
import { useApiStore } from "@/stores/api";
import AppHeaderUser from "./AppHeaderUser.vue";
const api = useApiStore();
</script>

<template>
  <n-page-header title="Hermes" subtitle="A personal dashboard">
    <template #avatar>
      <n-avatar src="/favicon.webp" style="background-color: white" />
    </template>
    <template #default>
      <n-space>
        <template v-if="api.loading">
          <n-skeleton
            v-for="i in 3"
            :key="i"
            :width="isMobile ? '42px' : '78px'"
            :size="isMobile ? 'tiny' : 'medium'"
            :sharp="false"
          />
        </template>
        <template v-else>
          <router-link to="/">
            <n-button :size="isMobile ? 'tiny' : 'medium'">Landing</n-button>
          </router-link>
          <router-link to="/dash">
            <n-button :size="isMobile ? 'tiny' : 'medium'">Dashboard</n-button>
          </router-link>
          <router-link to="/new">
            <n-button :size="isMobile ? 'tiny' : 'medium'">New</n-button>
          </router-link>
          <router-link to="/settings">
            <n-button :size="isMobile ? 'tiny' : 'medium'">Settings</n-button>
          </router-link>
        </template>
      </n-space>
    </template>
    <template #extra>
      <AppHeaderUser />
    </template>
  </n-page-header>
</template>

<style lang="sass">
@import vars
.n-layout-header
  z-index: 100
  a
    text-decoration: none

.n-page-header
  padding: 1em
  gap: 0.5rem
  flex-direction: column
  +fromTablet()
    padding: 1.5em
    flex-direction: row
</style>
