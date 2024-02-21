<script setup lang="ts">
import type {IheaderMenu} from "~/interfaces/app";

const headerMenu: IheaderMenu[] = [
  {
    uri: '/about',
    name: 'About'
  },
  {
    uri: '/menu',
    name: 'Menu'
  },
  {
    uri: '/reservation',
    name: 'Reservation'
  },
  {
    uri: '/pages',
    name: 'Pages'
  },
  {
    uri: '/shop',
    name: 'Shop'
  },
  {
    uri: '/contact',
    name: 'Contact'
  },

]

</script>

<template>
  <header class="w-full bg-primary h-20 flex items-center justify-between" >
    <div class="max-w-md">
      <NuxtLink v-for="(menu,index) in headerMenu.slice(0,3)" :key="index" :to="menu.uri" class="text-base font-normal mr-16 font-['Montserrat']">
        {{ menu.name }}
      </NuxtLink>
    </div>
    <div class="h-14 w-16">
      <NuxtImg src="/images/logo.svg" class="w-full h-full object-cover object-center"/>
    </div>
    <div class="max-w-md">
        <NuxtLink v-for="(menu,index) in headerMenu.slice(3,headerMenu.length)" :key="index" :to="menu.uri"
                  class="text-base font-normal max-w-md mr-16 font-['Montserrat']">
          {{ menu.name }}
        </NuxtLink>
      <Icon name="lucide:search" class="mr-16" />
      <Icon name="lucide:menu" />
    </div>
  </header>
</template>

<style scoped>

</style>