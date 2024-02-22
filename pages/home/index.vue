<script setup lang="ts">

</script>

<template>
  <section class="flex w-full mt-16">
    <div class="max-w-2xl">
      <h2 class="text-5xl md:leading-[70px] mb-8">
        ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
      </h2>
      <p class="leading-8 text-lg md:max-w-md font-normal font-[Open-Sans] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div class=" mt-14 max-w-80 flex items-center justify-between md:h-11  ">
        <button class=" h-full bg-secondary w-32 text-white text-base shadow-lg ">Explore More</button>
        <button class="border border-[#D48A5C] w-32 h-full bg-white text-black shadow-lg">Read More</button>
      </div>
    </div>
    <div class="max-w-lg md:min-h-96 cursor-pointer  grow ">
      <NuxtImg src="/images/hero_section.png" class="w-full h-full object-right aspect-square object-cover"/>
    </div>
  </section>
  <section>
    <div class="max-w-sm bg-[#D48A5C] max-h-64 min-h-60 h-auto relative">
      <div class="max-w-sm  max-h-64 min-h-60 absolute -top-8 -right-6">
        <CardProductCard title="Best Coffee Flavor" image="service_1.jpeg" description="Curabitur semper erat a lacusey sedny consequat,sit ametey." />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>