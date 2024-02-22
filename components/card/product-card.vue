<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string, image: string, description?: string }>(), {
  title: '',
  image: '',
})

</script>

<template>
  <div class="h-full w-full">
    <NuxtImg :src="'/images/'+ image"/>
    <div class="h-full w-full absolute top-0 left-0 flex flex-col justify-between pb-7">
      <svg>
        <path xmlns="http://www.w3.org/2000/svg" d="M0.5 62.6359V0.5H185.444C180.002 1.41672 175.763 2.93656 172.47 4.9463C166.807 8.40201 163.992 13.2736 162.639 18.8673C161.293 24.4345 161.391 30.7398 161.551 37.0863C161.558 37.3814 161.566 37.6765 161.574 37.9717C161.729 44.0537 161.886 50.155 160.883 55.7909C159.834 61.6828 157.523 67.0276 152.637 71.2598C147.743 75.4996 140.21 78.6691 128.626 80.0937C105.488 82.9394 66.3902 78.8002 0.5 62.6359Z" fill="#EAB665" stroke="#E39212"/>
      </svg>
      <div class="absolute top-3 left-4">
        <p class="text-white">
          01
        </p>
        <p class="text-sm">
          {{title}}
        </p>
      </div>
      <p class="max-w-52 text-xs text-white ml-4">
        {{description}}
      </p>


    </div>
  </div>
</template>

<style scoped>

</style>