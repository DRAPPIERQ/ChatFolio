<template>
  <div class="relative inline-block">
    <div @click="closeOpenDropdown()">
      <slot></slot>
    </div>
    <div
      v-if="showDropdown && dropdown"
      class="absolute top-10 right-0 rounded-lg w-72 bg-gray-100 p-2"
    >
      <div class="flex flex-row-reverse">
        <div class="cursor-pointer" @click="closeOpenDropdown()">
          <close-icon class="h-4 mr-1"/>
        </div>
      </div>
      <div class="mt-2">
        <slot name="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/components/Icons/CloseIcon.vue'

export default {
  components: { CloseIcon },
  props: {
    dropdown: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      showDropdown: false
    }
  },
  methods: {
    closeOpenDropdown() {
      this.showDropdown = !this.showDropdown
      this.$emit('dropdownstate', this.showDropdown)
    }
  }
}
</script>
