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
const most_popular_product: IProductService[] = [
  {
    image: '/images/product_1.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  },
  {
    image: '/images/product_1.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  },
  {
    image: '/images/product_2.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  },
  {
    image: '/images/product_2.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  },
  {
    image: '/images/product_3.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  }, {
    image: '/images/product_3.jpeg',
    title: 'Vicaragua Coffee Beans',
    price: '$29'
  }
]

</script>

<template>
  <div class="px-36">
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
      <div class="absolute flex h-full w-full flex-col items-center justify-center">
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
    <section class="flex flex-col items-center pb-28 -mt-20">
      <button class="md:h-11 bg-secondary mt-4 w-32 text-white text-base shadow-lg ">
        Popular Product
      </button>
      <h3 class="text-[55px] mb-12">
        Cafena Popular Product
      </h3>
      <div class="flex gap-14 justify-between flex-wrap">
        <div class="h-32 min-w-96 max-w-xl drop-shadow-md" v-for="(item,index) in most_popular_product">
          <card-most-popular-card-product :product="item"/>
        </div>
      </div>
    </section>
  </div>
  <section class="bg-white w-full flex px-40 gap-10 py-9 h-screen max-h-[674px]">
    <div class="h-full flex flex-col justify-center ">
      <h3 class="text-[55px] mb-9 max-w-2xl">
        COFFEE MACHINE,BUY FOR HOME
      </h3>
      <p class="text-[#6F6F6F] max-w-md">
        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam
        venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
      </p>
      <p class="mt-4 max-w-md">
        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum
        id tellus mmodo mattis.
      </p>
      <button class="md:h-11 bg-secondary mt-4 w-32 text-white text-base shadow-lg mt-10 ">
        Discover Now
      </button>
    </div>
    <div class="relative">
      <div
          class="bg-gradient-to-t to-[#7D4934] z-10 from-[#000000] w-[366px] min-h-[600px] cursor-pointer rounded-full flex flex-col items-center justify-center relative">
        <div class="w-[313px] h-[414px] z-10">
          <NuxtImg src="/images/cofee.png" class="w-full h-full object-cover object-center"/>
        </div>
      </div>
      <div class="absolute w-[366px] min-h-[600px] bg-black -z-2 rounded-full top-0 -left-6 cursor-pointer "/>

    </div>

  </section>

  <div class="px-36">
    <div class="flex items-center w-full justify-between">
      <h3 class="font-medium text-[55px] text-black">
        Cafena Best Product
      </h3>
      <button class="md:h-11 bg-secondary mt-4 min-w-32 px-4 text-white text-base shadow-lg ">
        Cafena Best Product
      </button>
    </div>
    <div>
      <CardBestProductCard  />
    </div>

  </div>
</template>

<style scoped>

</style>