<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-800 h-full w-full min-h-screen">
    <nav class="flex shadow-lg">
      <RouterLink
        to="/"
        class="text-white duration-200 transition-color hover:bg-blue-900 hover:shadow-lg w-full p-2"
        active-class="bg-blue-500"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="text-white duration-200 transition-color hover:bg-blue-900 hover:shadow-lg w-full p-2"
        active-class="bg-blue-500"
        >About</RouterLink
      >
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
