<script setup lang="ts">
import type {IProductService} from "~/interfaces/app";

const props = withDefaults(defineProps<{ product: IProductService }>(), {})

</script>

<template>
  <div class="border-4 relative w-full h-full border-[#414141]  relative flex items-center justify-end px-7">
    <div class=" min-w-96 text-end pl-24">
      <p class="text-3xl font-medium">
        {{product.title}}
      </p>
      <p class="font-semibold text-[#D48A5C] text-3xl">
        {{product.price}}
      </p>
    </div>
    <div class="h-40 w-40 rounded-full overflow-hidden absolute -top-6 -left-11">
      <NuxtImg :src="product.image" class="w-full h-full object-center object-cover"/>
    </div>

  </div>
</template>

<style scoped>

</style>