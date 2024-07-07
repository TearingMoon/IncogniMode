<template>
  <div>
    <button
      ref="saveButton"
      class="w-full p-2 text-white rounded-t-lg transition-colors duration-200 bg-red-800 hover:bg-red-600 text-2xl font-bold"
      v-on:click="deleteHistory()"
    >
      Delete History
    </button>
    <div class="w-full bg-slate-800 text-white rounded-b-lg">
      <h1
        class="font-bold text-white flex flex-row cursor-pointer items-center w-full text-center justify-center"
        v-on:click="isOpen = !isOpen"
      >
        Console
      </h1>
      <div
        class="grid overflow-hidden transition-all duration-200 ease-in-out"
        :class="{ 'grid-rows-[1fr] opacity-100': isOpen, 'grid-rows-[0fr] opacity-0': !isOpen }"
      >
        <div class="overflow-hidden">
          <div class="flex flex-col p-2 gap-4">
            <p class="whitespace-pre-wrap overflow-y-scroll scrollbar p-2 h-64">
              <span
                v-for="report in deleteReportList"
                v-bind:key="report.id"
                :class="{
                  'text-red-600': report.type === reportTypeEnums.ERROR,
                  'text-green-600': report.type === reportTypeEnums.SUCCESS,
                  'text-yellow-600': report.type === reportTypeEnums.WARNING,
                  'text-blue-600': report.type === reportTypeEnums.INFO
                }"
              >
                $ {{ report.message }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTargetStore } from '@/stores/target'
import { report, reportTypeEnums } from '@/models/reportMessage'

export default defineComponent({
  setup() {
    return {}
  },
  data() {
    return {
      targetStore: useTargetStore(),
      deleteReportList: [] as report[],
      reportTypeEnums: reportTypeEnums,
      isOpen: false
    }
  },
  methods: {
    deleteHistory() {
      this.deleteReportList = []
      const targets = this.targetStore.targets
      targets.forEach((target) => {
        chrome.history.search({ text: target.url, maxResults: 100 }, (results) => {
          this.deleteReportList.push({
            id: this.deleteReportList.length,
            message: 'Searching for: ' + target.url + '.\n',
            type: reportTypeEnums.INFO
          })
          if (chrome.runtime.lastError) {
            return
          }
          if (results.length === 0) {
            this.deleteReportList.push({
              id: this.deleteReportList.length,
              message: 'No results found for: ' + target.url + 'in the last 24 hours. \n',
              type: reportTypeEnums.ERROR
            })
            return
          }
          results.forEach((result) => {
            if (result.url != null) {
              this.deleteReportList.push({
                id: this.deleteReportList.length,
                message: 'deleting: ' + result.url + '.\n',
                type: reportTypeEnums.WARNING
              })
              chrome.history.deleteUrl({ url: result.url }, () => {
                if (chrome.runtime.lastError) {
                  return
                }
              })
            }
          })
          if (results.length !== 0) {
            this.deleteReportList.push({
              id: this.deleteReportList.length,
              message: 'Deleted ' + results.length + ' results for: ' + target.url + '.\n',
              type: reportTypeEnums.SUCCESS
            })
          }
        })
      })
    }
  }
})
</script>

<style scoped></style>
