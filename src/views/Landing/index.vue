<template>
  <div class="landing">
    <n-page-header title="Hermes" class="header">
      <template #avatar>
        <n-avatar src="/favicon.webp" style="background-color: white" />
      </template>
    </n-page-header>

    <n-grid :cols="1" x-gap="12">
      <n-gi class="welcome">
        <n-image
          width="100"
          src="/favicon.webp"
          style="background-color: white"
        />
        <h1>Welcome to Hermes</h1>
        <p>A personal dashboard</p>
        <n-space>
          <n-button @click="signInPopup" type="primary">
            <template #icon>
              <n-icon>
                <LogoGoogle />
              </n-icon>
            </template>
            Log In
          </n-button>
        </n-space>
        <n-divider />
        <p class="muteted">
          We're excited to announce that Hermes is now in a closed beta phase.
          This means that we're inviting a select group of users to test our
          application and provide feedback before its official launch. Thank you
          for your support and we can't wait to share our vision of Hermes with
          the world!
        </p>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { LogoGoogle } from "@vicons/ionicons5";
import { useAuthStore } from "@/stores/auth";
const { signInPopup } = useAuthStore();
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
  // padding: 0 1.5rem
.welcome
  width: 60%
  max-width: 400px
  display: flex
  flex-direction: column
  align-items: center
  flex-wrap: nowrap
  margin: auto
  .muteted
    opacity: 0.8
    font-size: 0.65rem
    text-align: justify
</style>
