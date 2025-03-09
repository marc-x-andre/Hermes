<script setup lang="ts">
import LastAddedCard from "@/components/DataCard/LastAddedCard.vue";
import AllEntriesCard from "@/components/DataCard/AllEntriesCard.vue";
import FavoritesOfMomentCard from "@/components/DataCard/FavoritesOfMomentCard.vue";
import GoalCard from "@/components/DataCard/GoalCard.vue";
import MainLayout from "@/layout/MainLayout.vue";
import CalTracking from "@/components/DataCard/CalTracking.vue";
</script>

<template>
  <MainLayout class="dashboard">
    <n-space vertical size="large">
      <div>
        <n-h1 style="margin: 0">Hi Marc!</n-h1>
        <n-space justify="space-between">
          <n-text class="lighter">How are you doing?</n-text>
          <n-text class="lighter">12034 entries</n-text>
        </n-space>
      </div>

      <n-grid y-gap="24" x-gap="24" cols="1 768:2 1000:3">
        <n-gi span="1">
          <GoalCard
            :goal="{
              title: 'Save $100`000',
              progress: 81,
              deadline: '2026-03-15',
              icon: '/logo/money-bag.png',
            }"
          />
        </n-gi>
        <n-gi span="1">
          <GoalCard
            :goal="{
              title: 'Run 31k in 2025',
              progress: 0,
              deadline: '2025-10-01',
              icon: '/logo/person-running.png',
            }"
          />
        </n-gi>
        <n-gi span="1">
          <GoalCard
            :goal="{
              title: 'Complete this project',
              progress: 10,
              deadline: '2028-10-01',
              icon: '/logo/sparkles.webp',
            }"
          />
        </n-gi>
        <n-gi span="3">
          <CalTracking />
        </n-gi>
        <n-gi span="2">
          <FavoritesOfMomentCard />
        </n-gi>
        <n-gi>
          <LastAddedCard />
        </n-gi>
        <n-gi span="3">
          <AllEntriesCard />
        </n-gi>
      </n-grid>
    </n-space>
  </MainLayout>
</template>

<style lang="sass">
.dashboard
  .box
    height: 100%
</style>
