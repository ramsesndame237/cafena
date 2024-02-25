<script setup lang="ts">
import type {IProductService} from "~/interfaces/app";

const productService: IProductService[] = [
  {
    title: 'Best Coffee Flavor',
    image: 'service_1.jpeg',
    description: "Curabitur semper erat a lacusey sedny consequat,sit ametey."
  },
  {
    title: 'Proper Roasting',
    image: 'service_2.jpeg',
    description: "Curabitur semper erat a lacusey sedny consequat,sit ametey."
  },
  {
    title: 'Place to Get Lost',
    image: 'service_3.jpeg',
    description: "Curabitur semper erat a lacusey sedny consequat,sit ametey."
  }
]

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
  <section class="flex justify-between items-center w-full border-2 mt-24">
    <div class="max-w-sm bg-[#D48A5C] min-w-80 max-h-64 min-h-60 h-auto relative"
         v-for="(service,index) in productService" :key="index">
      <div class="max-w-sm  min-w-80 max-h-64 min-h-60 absolute -top-8 -right-6 overflow-hidden">
        <CardProductCard :title="service.title" :image="service.image" :description="service.description"
                         :index="index < 10 ? '0'+index+1 : (index+1) + ''"/>
      </div>
    </div>
  </section>
  <section class="w-full h-dvh bg-[url('/images/background_service.jpeg')] bg-contain bg-center bg-no-repeat relative">
    <div class="absolute flex h-full w-full flex-col items-center justify-center" >
      <h3 class="text-[55px] mb-4">
        Roasted CoffeeFor You
      </h3>
      <p class="max-w-2xl text-center">
        Donec et nibh maximus, congue est eu, mattis nunc. Praesent utquam quis quam venenatis fringilla. Morbi
        vestibulum id tellusmmodo mattis. Aliquam erat volutpat.
      </p>
      <button class="md:h-11 bg-secondary mt-4 w-32 text-white text-base shadow-lg ">Explore More</button>

    </div>

  </section>
</template>

<style scoped>

</style>