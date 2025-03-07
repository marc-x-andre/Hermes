<template>
  <div class="landing">
    <n-page-header title="Tendencies" class="header">
      <template #avatar>
        <n-avatar src="/favicon.webp" style="background-color: white" />
      </template>
      <n-button @click="$router.go(-1)"> Back </n-button>
    </n-page-header>
    <n-grid :cols="1" x-gap="12">
      <n-gi class="welcome" span="500 300">
        <n-space vertical>
          <n-tabs type="line" animated placement="left">
            <n-tab-pane name="general" tab="General" class="panel">
              <General :settings="settings" />
            </n-tab-pane>
            <n-tab-pane name="account" tab="Account" class="panel">
              <Account :settings="settings" />
            </n-tab-pane>
            <n-tab-pane name="premium" tab="Premium" class="panel">
              <Premium :settings="settings" />
            </n-tab-pane>
          </n-tabs>
        </n-space>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import Account from "./Account.vue";
import General from "./General.vue";
import Premium from "./Premium.vue";
import { useSettingsStore } from "../../stores/user/settings";

const userSettingsV2Store = useSettingsStore();
const { settings } = storeToRefs(userSettingsV2Store);

if (settings.value === undefined) {
  userSettingsV2Store.fetchSettings();
}

setTimeout(() => {
  userSettingsV2Store.saveSettings({
    gratitude: true,
    moon: true,
    weather: true,
    customChecklist: ["Buy groceries", "Buy groceries", "Buy groceries"],
  });
}, 1000);
</script>

<style lang="sass" scoped>
.header
  position: absolute
  padding: 2em
.welcome, .description
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
.welcome
  width: 80%
  max-width: 500px
  display: flex
  flex-direction: column
  align-items: center
  flex-wrap: nowrap
  margin: auto

.panel
  margin-left: 12px
  width: 500px
  height: 300px
</style>
