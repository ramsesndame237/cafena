<script setup lang="ts">


import type {TextFieldInterface} from "~/interfaces/app";

const props = withDefaults(defineProps<TextFieldInterface>(), {
  type:'text',
  placeholder:''
})
</script>

<template>
  <div :class="classes">
    <Icon v-if="props.prefixIcon" :name="props.prefixIcon"></Icon>
    <input :type="props.type" :placeholder="props.placeholder" :class="['h-full',inputClasses]">
    <Icon v-if="suffixIcon" size="25" class="text-[#D48A5C] mr-4" :name="suffixIcon"></Icon>
  </div>
</template>

<style scoped>

</style>