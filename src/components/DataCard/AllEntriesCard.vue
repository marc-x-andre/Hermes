<template>
  <DataCard title="All Entries" icon="/logo/computer-disk.webp" color="#eeead5">
    <n-data-table :columns="columns" :pagination="true" :bordered="false" />
  </DataCard>
</template>

<script setup lang="ts">
import DataCard from "@/components/DataCard/DataCard.vue";

const columns = [
  {
    title: "No.",
    key: "userId",
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Note",
    key: "note",
  },
  {
    title: "Price Bt",
    key: "priceBt",
  },
  {
    title: "Price At",
    key: "priceAt",
  },
];

const data = [
  { userId: 3, name: "Wonderwall", note: "4:18" },
  { userId: 4, name: "Don't Look Back in Anger", note: "4:48" },
  { userId: 12, name: "Champagne Supernova", note: "7:27" },
];
</script>
