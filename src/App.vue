<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useTargetStore } from './stores/target'
const targetStore = useTargetStore()
onMounted(() => {
  targetStore.loadTargets()
})
</script>

<template>
  <div class="bg-slate-900 h-full w-full min-h-screen">
    <nav class="flex gap-4 p-4">
      <RouterLink
        to="/"
        class="text-white duration-200 bg-slate-800 transition-color w-full p-2 text-center font-bold rounded-lg hover:shadow-lg hover:-translate-y-1"
        active-class="bg-slate-700"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="text-white duration-200 bg-slate-800 transition-color w-full p-2 text-center font-bold rounded-lg hover:shadow-lg hover:-translate-y-1"
        active-class="bg-slate-700"
        >About</RouterLink
      >
    </nav>
    <RouterView class="px-4 pb-4" />
  </div>
</template>

<style scoped></style>
