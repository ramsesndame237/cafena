<script setup lang="ts">

</script>

<template>
<footer class="bg-white pt-[110px]">
  <div class="mx-40">
    <div class="flex justify-between ">
    <span class="flex items-center">
      <Icon name="mdi:cellphone-android" class="text-[#D48A5C] mr-2" size="18px"></Icon>
      <span class="font-['Open_Sans'] font-light text-base">
        <span class="font-extrabold font-['Open_Sans']">Phone : </span> +88019 339 702 520
      </span>
    </span>
      <span class="flex items-center">
      <Icon name="mdi:map-marker-outline" class="text-[#D48A5C] mr-2" size="18px"></Icon>
      <span class="font-['Open_Sans'] font-light text-base">
        <span class="font-extrabold font-['Open_Sans']">Address :</span> 30 North Wes New
      </span>
    </span>
      <Textfield :placeholder="'Enter email'" :suffix-icon="'mdi:telegram'" :classes="'bg-[#F2EAE2] w-[350px] h-10 flex items-center'" :input-classes="'bg-[#F2EAE2] pl-3 grow outline-0'" />
    </div>
    <div class="flex items-end justify-between mt-[69px]">
      <div class="max-w-md">
        <div class="size-16">
          <NuxtImg src="/images/logo.svg" class="w-full h-full object-center object-cover" />
        </div>
        <span class="max-w">
        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum
      </span>
      </div>
      <div class="flex gap-4">
      <span v-for="item in 3" class="border size-11 rounded flex items-center justify-center">
        <Icon :name="item === 1 ? 'mdi:facebook' : item === 2 ? 'mdi:instagram' :'mdi:twitter' " :class="[item === 1 || item === 3 ? 'text-[#00B2FF]':'text-[#F33333]']" ></Icon>
      </span>
      </div>
    </div>
  </div>
  <div class="bg-[#EAB665] h-[2px] mt-28 w-full" />
  <div class="w-full text-center py-[18px]">
    <span>
      ALL RIGHT RESERVED © 2024
    </span>
  </div>

</footer>
</template>

<style scoped>

</style>