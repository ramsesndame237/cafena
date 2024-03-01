<script setup lang="ts">
import type {IProductService} from "~/interfaces/app";

import {Swiper, SwiperSlide} from 'swiper/vue';
import {ref} from 'vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Navigation} from 'swiper/modules';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {format} from "date-fns";

useHead({
  script: [{
    src: "https://cdn.jsdelivr.net/gh/somanchiu/Keyless-Google-Maps-API@v6.6/mapsJavaScriptAPI.js",
    defer: true,
  }]
})

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
const best_product = [
  {
    image: '/images/best_product_1.png',
    title: 'Vicaragua Coffee Beans',
    price: '$25'
  },
  {
    image: '/images/best_product_2.png',
    title: 'Americano Coffee',
    price: '$25'
  },
  {
    image: '/images/best_product_3.png',
    title: 'Virgin Coffee Gred',
    price: '$25'
  },
]

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const date = ref(new Date())
let map = ref(null)
onMounted(() => {
  // const mapOptions = {
  //   zoom: 18,
  //   center: new window.google.maps.LatLng(43.758773, -79.391785),
  //   disableDefaultUI: true,
  //   zoomControl: true
  // };
  // const mapper = new window.google.maps.Map(map.value, mapOptions);
  // const position = new window.google.maps.LatLng(43.758773, -79.391785)
  // const marker = new window.google.maps.Marker({position})
  // marker.setMap(mapper)
  map = new google.maps.Map(map.value, {
    center: {lat: 43.758773, lng: -79.391785},
    zoom: 8
  });
})

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
    <section
        class="w-full h-dvh bg-[url('/images/background_service.jpeg')] bg-contain bg-center bg-no-repeat relative">
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

  <section class="px-36">
    <div class="flex items-center w-full justify-between py-20">
      <h3 class="font-medium text-[55px] text-black">
        Cafena Best Product
      </h3>
      <button class="md:h-11 bg-secondary mt-4 min-w-32 px-4 text-white text-base shadow-lg ">
        Cafena Best Product
      </button>
    </div>
    <div class="flex gap-7">
      <div class="h-screen max-h-[454px] max-w-sm" v-for="(product,index) in  best_product">
        <CardBestProductCard :product="product" :key="index"/>
      </div>
    </div>
    <div class="flex items-center flex-col">
      <button class="md:h-11 bg-secondary mt-4 min-w-32 px-4 text-white text-base shadow-lg ">
        CUSTOMER FEEDBACK
      </button>
      <h3 class="text-[55px] mb-12">
        OUR CUSTOMER REVIEW
      </h3>
      <div class="max-w-full mb-4">
        <swiper
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            :autoplay="true"
            @slideChange="onSlideChange"
            :modules="[Navigation,Autoplay]"
        >

          <swiper-slide v-for="(item,index) in 5" :key="index" class="cursor-pointer">
            <div class="flex flex-col items-center justify-center">
              <p class="text-center max-w-3xl">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem opposed to using 'Content here, content here..
              </p>
              <div class="size-20 rounded-full overflow-hidden mt-9 ">
                <NuxtImg src="/images/women_2.jpg" class="w-full h-full object-center object-cover"/>
              </div>
              <h6 class="mt-4">
                Rasalida Williamson
              </h6>
            </div>
          </swiper-slide>
          <div class="absolute w-full  flex  justify-between top-0 h-full">
            <div
                class="swiper-button-prev !size-14 rounded-full border-[#D48A5C] border after:content-none after:hidden">
              <Icon name="mdi:chevron-left" class="text-[#D48A5C]" size="15"></Icon>
            </div>
            <div
                class="swiper-button-next !size-14 rounded-full border-[#D48A5C] border after:content-none after:hidden">
              <Icon name="mdi:chevron-right" class="text-[#D48A5C]"></Icon>
            </div>
          </div>
        </swiper>
      </div>
      <div class="mt-20 w-full h-[392px] bg-white grid grid-cols-2">
        <div class="col-span-1 ">
          <div style="height: 100%; width: 100%;" ref="map"></div>
        </div>
        <div class="col-span-1 flex items-center flex-col justify-center px-20">
          <h6 class="text-[#D48A5C] text-lg mt-10 font-['Open_Sans']">
            Reservation
          </h6>
          <span class="text-3xl font-normal mb-5 mt-2.5">
            BOOKING A TABLE
          </span>
          <div class="w-full">
            <Textfield type="number" :placeholder="'4 Person'" suffix-icon="mdi:notebook-outline"
                       classes="h-12 flex items-center text-[#5C5C5C] bg-[#F4F1EE]"
                       input-classes="bg-[#F4F1EE] grow text-[#5C5C5C] outline-0 pl-1"/>
            <Popover v-slot="{ open }" class="relative">
              <PopoverButton
                  class="bg-[#F4F1EE] outline-0 h-12 w-full my-2.5 flex justify-between items-center pl-1 pr-4">
                <span class="text-[#5C5C5C]">
                  {{ format(date, 'd MMM, yyy') }}
                </span>
                <Icon name="mdi:calendar-month-outline" size="25" class="text-[#D48A5C]"></Icon>

              </PopoverButton>
              <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel
                    class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl bg-[#F6F2EE]"
                    v-slot="{ close }"
                >
                  <DatePicker v-model="date" @close="close"/>
                </PopoverPanel>

              </transition>
            </Popover>
            <Textfield type="email" :placeholder="'Email'" suffix-icon="mdi:email"
                       classes="h-12 flex items-center text-[#5C5C5C] bg-[#F4F1EE]"
                       input-classes="bg-[#F4F1EE] text-[#5C5C5C] grow outline-0 pl-1"/>
            <div class="flex items-center w-full mt-5  justify-center">
              <button class="md:h-11 bg-secondary  min-w-32 px-4 text-white text-base shadow-lg  ">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center flex-col mb-24">
        <button class="md:h-11 bg-secondary mt-4 min-w-32 px-4 text-white text-base shadow-lg ">
          FROM OUR BLOG
        </button>
        <h3 class="text-[55px] mb-12">
          OUR NEWS & ARTICLES
        </h3>
        <div class="flex gap-7 pb-2">
          <div v-for="item in 3" class="max-w-[350px] max-h-[454px] bg-[#1C1A1A] cursor-pointer">
            <div class="w-full max-h-[305px]">
              <NuxtImg :src="`images/restaurant_${item}.jpeg`" class="w-full h-full object-cover object-center"/>
            </div>
            <div class="pl-7 mt-5 text-white">
              <span class="text-[#EAB665] text-base">
                By :
                <span class="text-white">Cafena / Burger / Apr 30, 2022</span>
              </span>
              <p class="text-xl max-w-64 my-1.5">
                Build A Cool Morning With
                Cafena Coffee
              </p>
              <span class="text-[#EAB665] text-base">
                READ MORE
                <Icon name="mdi:arrow-right"></Icon>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
[type="date"] {
  @apply bg-[#F4F1EE] h-12 w-full my-2 outline-0 px-1 pr-4
}

</style>