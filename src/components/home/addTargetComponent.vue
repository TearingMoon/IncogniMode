<template>
  <div class="border-white border-2 m-2 rounded-lg p-2">
    <h1
      class="font-bold text-white flex flex-row cursor-pointer items-center w-full text-center justify-center"
      v-on:click="isOpen = !isOpen"
    >
      Add Target
    </h1>
    <div
      class="grid overflow-hidden transition-all duration-200 ease-in-out"
      :class="{ 'grid-rows-[1fr] opacity-100': isOpen, 'grid-rows-[0fr] opacity-0': !isOpen }"
    >
      <div class="overflow-hidden">
        <div class="flex flex-col gap-2 mt-2">
          <!-- Name field of the target -->
          <div class="flex flex-col">
            <label for="name" class="text-white text-sm">Name</label>
            <input
              type="text"
              placeholder="Ex: example"
              class="p-2 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <!-- Url of the target -->
          <div class="flex flex-col">
            <label for="name" class="text-white text-sm">Url</label>
            <input
              type="text"
              placeholder="Ex: https://example.com"
              class="p-2 border-2 border-gray-300 rounded-lg"
            />
          </div>
          <button
            class="font-bold p-2 border-2 border-white text-white rounded-lg bg-transparent transition-colors duration-200 hover:bg-green-600 hover:text-white mt-4"
          >
            Save Target
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  data() {
    return {
      isOpen: false
    }
  }
})
</script>

<style scoped></style>
