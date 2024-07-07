<template>
  <div class="p-2 bg-slate-800 shadow rounded-lg">
    <div v-if="targetStore.targets.length != 0">
      <table class="table-fixed w-full">
        <thead class="sticky top-0 bg-slate-700 shadow-lg">
          <tr>
            <th class="py-3 px-6 text-xs font-medium tracking-wider uppercase text-left w-1/3">
              <input
                type="text"
                class="text-slate-400 bg-transparent w-full"
                placeholder="NAME"
                v-model="searchName"
              />
            </th>
            <th class="py-3 px-6 text-xs font-medium tracking-wider uppercase text-left w-1/3">
              <input
                type="text"
                class="text-slate-400 bg-transparent w-full"
                placeholder="URL"
                v-model="searchUrl"
              />
            </th>
            <th class="p-4 w-1/3">
              <span class="sr-only">Tools</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y bg-slate-800 divide-slate-700">
          <tr
            v-for="item in targetStore.getFilteredTargets(searchName, searchUrl)"
            :key="item.id"
            class="hover:bg-slate-700"
          >
            <td class="py-4 px-6 text-sm font-medium whitespace-nowrap text-white truncate">
              {{ item.name }}
            </td>
            <td class="py-4 px-6 text-sm font-medium whitespace-nowrap text-white truncate">
              {{ item.url }}
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
              <div class="rounded flex gap-2 p-1 justify-center">
                <button
                  class="bg-red-900 hover:bg-red-600 rounded-lg p-1 w-full text-white"
                  v-on:click="removeTarget(item)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
