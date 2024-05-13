<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-slate-800 h-full w-full min-h-screen">
    <header>
      <div class="">
        <nav>
          <RouterLink
            to="/"
            class="text-white duration-200 transition-color hover:bg-blue-500 hover:shadow-lg shadow-cyan-500/50 rounded m-4 p-2"
            active-class="bg-blue-500"
            >Home</RouterLink
          >
          <RouterLink to="/about" class="text-white">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
