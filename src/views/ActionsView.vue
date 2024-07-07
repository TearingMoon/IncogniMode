<template>
  <div class="flex flex-col gap-4">
    <historyDeleteComponent></historyDeleteComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTargetStore } from '@/stores/target'
import historyDeleteComponent from '@/components/actionView/historyDeleteComponent.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    historyDeleteComponent
  },
  data() {
    return {
      targetStore: useTargetStore()
    }
  },
  methods: {}
})
</script>

<style scoped></style>
