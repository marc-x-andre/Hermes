<template>
  <n-h3> Settings </n-h3>
  {{ settings }}

  <n-form ref="formRef" :model="model" :rules="rules">
    <n-form-item-gi :span="12" label="Switch" path="sendNewsletter">
      <n-switch v-model:value="model.sendNewsletter" />
    </n-form-item-gi>
    <n-form-item-gi :span="12">
      <n-button @click="validate"> Validate </n-button>
    </n-form-item-gi>
  </n-form>
</template>

<script setup lang="ts">
import type { Settings } from "@/stores/user/settings";
import { reactive, ref } from "vue";

const props = defineProps<{
  settings?: Settings;
}>();

const formRef = ref(null);
const model = reactive({
  sendNewsletter: false,
  sendBirthdayNotification: false,
});
const rules = {
  sendNewsletter: [
    {
      validator: (rule, value) => {
        if (value === undefined) {
          return new Error("Please fill in this field");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
  sendBirthdayNotification: [
    {
      validator: (rule, value) => {
        if (value === undefined) {
          return new Error("Please fill in this field");
        }
        return true;
      },
      trigger: "blur",
    },
  ],
};

const validate = async (e) => {
  e.preventDefault();
  try {
    await formRef.value.validate();
    console.log(model);
    props.settings = model;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="sass" scoped></style>
