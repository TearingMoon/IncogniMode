<template>
  <div>
    <button
      ref="saveButton"
      class="w-full p-2 text-white rounded-lg transition-colors duration-200 bg-red-800 hover:bg-red-600 text-2xl font-bold"
      v-on:click="deleteHistory()"
    >
      Delete History
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTargetStore } from '@/stores/target'

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
    deleteHistory() {
      const targets = this.targetStore.targets

      targets.forEach((target) => {
        chrome.history.search(
          { text: target.url, maxResults: 100, startTime: 31536000000 },
          (results) => {
            if (chrome.runtime.lastError) {
              return
            }
            results.forEach((result) => {
              if (result.url != null) {
                console.log('deleting: ', result.url)
                chrome.history.deleteUrl({ url: result.url }, () => {
                  if (chrome.runtime.lastError) {
                    return
                  }
                })
              }
            })
          }
        )
      })
    }
  }
})
</script>

<style scoped></style>
