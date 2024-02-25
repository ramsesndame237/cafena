<script setup lang="ts">
import type {IProductService} from "~/interfaces/app";

const props = withDefaults(defineProps<{product:IProductService}>(),{})

</script>

<template>
<div class="bg-white shadow-lg p-6 cursor-pointer">
  <div class="bg-[#13131A] flex items-center justify-center w-full h-full mb-8">
    <NuxtImg :src="product.image" />
  </div>
  <div class="flex flex-col gap-4 text-[#1C1A1A]">
    <h6>
      Rating :
      <Icon name="mdi:star-outline" class="text-[#EAB665] cursor-pointer" size="15" v-for="(item,index) in 5" :key="item"></Icon>
    </h6>
    <h6 class="text-2xl">
      {{ product.title }}
    </h6>
    <h6>
      Price : <span class="text-[#EAB665]">
      {{ product.price }}
    </span>
    </h6>
  </div>
</div>
</template>

<style scoped>

</style>