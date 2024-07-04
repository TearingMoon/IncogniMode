<template>
  <div class="rounded-lg p-2 bg-slate-800 shadow">
    <h1
      class="font-bold text-white flex flex-row cursor-pointer items-center w-full text-center justify-center text-2xl"
      v-on:click="isOpen = !isOpen"
    >
      Add Target
    </h1>
    <div
      class="grid overflow-hidden transition-all duration-200 ease-in-out"
      :class="{ 'grid-rows-[1fr] opacity-100': isOpen, 'grid-rows-[0fr] opacity-0': !isOpen }"
    >
      <div class="overflow-hidden">
        <div class="flex flex-col mt-2 p-2 gap-4">
          <!-- Name field of the target -->
          <div class="flex flex-col">
            <label for="name" class="text-white text-sm">Name:</label>
            <input
              ref="nameField"
              type="text"
              placeholder="Ex: example"
              class="p-2 text-white bg-slate-900 rounded-lg"
              v-model="targetName"
              v-on:keyup.enter="goToUrlField()"
            />
          </div>

          <!-- Url of the target -->
          <div class="flex flex-col">
            <label for="name" class="text-white text-sm">Url:</label>
            <input
              ref="urlField"
              type="text"
              placeholder="Ex: example.com"
              class="p-2 text-white bg-slate-900 rounded-lg"
              v-model="targetUrl"
              v-on:keyup.enter="goToSaveButton()"
            />
          </div>
          <div class="w-full">
            <button
              ref="saveButton"
              class="w-full p-2 text-white rounded-lg transition-colors duration-200"
              :class="{
                'cursor-not-allowed': !targetName || !targetUrl,
                'cursor-pointer': targetName && targetUrl,
                'bg-green-700': targetName && targetUrl,
                'bg-green-900': !targetName || !targetUrl
              }"
              v-on:click="saveTarget"
            >
              Save Target
            </button>
          </div>
        </div>
      </div>
    </div>
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
      targetStore: useTargetStore(),
      isOpen: false,
      targetName: '',
      targetUrl: ''
    }
  },
  methods: {
    saveTarget() {
      this.targetName = this.targetName.trim()
      this.targetUrl = this.targetUrl.trim()
      if (!this.targetName || !this.targetUrl) {
        if (!this.targetName) {
          setTimeout(() => {
            this.goToNameField()
          }, 100)
        } else {
          setTimeout(() => {
            this.goToUrlField()
          }, 100)
        }
        return
      }
      this.targetStore.addTarget({
        name: this.targetName,
        url: this.targetUrl,
        id: 0
      })
      this.targetName = ''
      this.targetUrl = ''

      setTimeout(() => {
        this.goToNameField()
      }, 100)
    },
    goToUrlField() {
      ;(this.$refs.urlField as HTMLInputElement).focus()
    },
    goToSaveButton() {
      ;(this.$refs.saveButton as HTMLButtonElement).focus()
    },
    goToNameField() {
      ;(this.$refs.nameField as HTMLInputElement).focus()
    }
  }
})
</script>

<style scoped></style>
