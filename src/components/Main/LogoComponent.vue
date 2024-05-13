<template>
  <!-- Container of the logo -->
  <div class="flex items-center justify-center w-full">
    <svg class="w-24 h-24">
      <use xlink:href="../../assets/eye.svg#myIcon"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LogoComponent',
  setup() {
    return {}
  }
})
</script>
