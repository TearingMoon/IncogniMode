<template>
  <div class="bg-slate-800 shadow p-2 rounded-lg">
    <table
      class="min-w-full divide-y divide-slate-400 table-fixed"
      v-if="targetStore.targets.length != 0"
    >
      <thead class="bg-slate-700">
        <tr>
          <th
            scope="col"
            class="py-3 px-6 text-xs font-medium tracking-wider uppercase text-left dark:text-slate-400"
          >
            <input type="text" class="bg-transparent" placeholder="NAME" v-model="searchName" />
          </th>
          <th
            scope="col"
            class="py-3 px-6 text-xs font-medium tracking-wider uppercase text-left text-slate-400"
          >
            <input type="text" class="bg-transparent" placeholder="URL" v-model="searchUrl" />
          </th>
          <th scope="col" class="p-4">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="p-4">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y bg-slate-800 divide-slate-700">
        <tr
          v-for="item in targetStore.getFilteredTargets(searchName, searchUrl)"
          :key="item.id"
          class="hover:bg-slate-700"
        >
          <td class="py-4 px-6 text-sm font-medium whitespace-nowrap text-white">
            {{ item.name }}
          </td>
          <td class="py-4 px-6 text-sm font-medium whitespace-nowrap text-white">
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
    <div v-else class="text-white h-40 flex flex-col justify-center items-center gap-2">
      <div class="text-center text-2xl font-bold">No Data to show yet</div>
      <div>Add a target to start</div>
    </div>
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
      targetStore: useTargetStore(),
      searchName: '',
      searchUrl: ''
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
