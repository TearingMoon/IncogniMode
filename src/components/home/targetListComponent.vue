<template>
  <div class="p-2 bg-slate-800 shadow rounded-lg">
    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
      <thead class="bg-slate-700">
        <tr>
          <th
            scope="col"
            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
          >
            Name
          </th>
          <th
            scope="col"
            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
          >
            Url
          </th>
          <th scope="col" class="p-4">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="p-4">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        <tr v-for="item in targetStore.targets" :key="item.id" class="hover:bg-slate-700">
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.name }}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
            {{ item.url }}
          </td>
          <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <button class="text-blue-600 hover:underline">Edit</button>
          </td>
          <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <button class="text-red-600 hover:underline" v-on:click="removeTarget(item)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTargetStore } from '@/stores/target'
import type { targetModel } from '@/models/targetModel'

export default defineComponent({
  setup() {
    return {}
  },
  data() {
    return {
      targetStore: useTargetStore()
    }
  },
  methods: {
    removeTarget(target: targetModel) {
      this.targetStore.removeTarget(target)
    }
  }
})
</script>

<style scoped></style>
