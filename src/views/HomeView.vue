<template>
  <div class="flex flex-col gap-4">
    <addTargetComponent></addTargetComponent>
    <targetListComponent></targetListComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import addTargetComponent from '@/components/home/addTargetComponent.vue'
import targetListComponent from '@/components/home/targetListComponent.vue'

export default defineComponent({
  components: {
    addTargetComponent,
    targetListComponent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
