<template>
  <div>
    <addTargetComponent></addTargetComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import addTargetComponent from '@/components/home/addTargetComponent.vue'

export default defineComponent({
  components: {
    addTargetComponent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
