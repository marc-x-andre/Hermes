<script setup>
import DataCard from "@/components/DataCard/DataCard.vue";
import { format, isPast, differenceInDays } from "date-fns";

defineProps({
  goal: {
    type: Object,
    required: true,
    validator: (goal) => {
      return "title" in goal && "progress" in goal && "deadline" in goal;
    },
  },
});

function formatDeadline(deadline) {
  return format(new Date(deadline), "MMM dd, yyyy");
}

function isDeadlineSoon(deadline) {
  const daysUntilDeadline = differenceInDays(new Date(deadline), new Date());
  return daysUntilDeadline <= 7 || isPast(new Date(deadline));
}
</script>

<template>
  <DataCard :title="goal.title" :icon="goal.icon">
    <n-tag round strong type="success"> On track </n-tag>

    <n-text depth="3"> 100 / 100 </n-text>

    <div class="goal-details">
      <n-progress
        type="line"
        :percentage="goal.progress"
        :indicator-placement="'inside'"
        processing
      />
      <n-text
        class="deadline"
        :type="isDeadlineSoon(goal.deadline) ? 'warning' : 'default'"
      >
        Deadline: {{ formatDeadline(goal.deadline) }}
      </n-text>
    </div>
  </DataCard>
</template>

<style lang="sass" scoped>
.goal-details
  display: flex
  flex-direction: column
  gap: 8px
  margin-top: 8px

.deadline
  font-size: 0.9em
</style>
