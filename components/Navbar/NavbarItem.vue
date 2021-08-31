<template>
  <div class="relative inline-block">
    <div @click="closeOpenDropdown()">
      <slot></slot>
    </div>
    <div v-if="showDropdown && dropdown" class="absolute top-10 right-0 rounded-lg h-52 w-52 bg-gray-200">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dropdown: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      showDropdown: true
    }
  },
  methods: {
    closeOpenDropdown() {
      console.log('hide/open')
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>