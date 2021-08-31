<template>
  <div class="flex flex-row-reverse py-5 px-5">
    <navbar-item>
      <div class="text-gray-900 mx-3 cursor-pointer">
        <gear-icon class="h-5">></gear-icon>
      </div>
    </navbar-item>
    <navbar-item dropdown @dropdownstate="closeOpenDropdown($event)">
      <div class="flex flex-row text-gray-900 relative mx-3 cursor-pointer">
        <bullhorn-icon class="h-5">></bullhorn-icon>
        <pin
          v-if="alerts.filter((e) => !e.seen).length"
          class="absolute top-3 left-3"
        ></pin>
      </div>

      <template v-slot:dropdown v-if="alerts.length">
        <div
          v-for="alert in alerts"
          :key="alert.id"
          @click="setSeenAlerts(alert.id)"
          class="flex flex-col bg-white relative p-2 rounded-lg"
        >
          <div class="flex flex-row">
            <h1 class="text-gray-900 text-sm font-medium">{{ alert.title }}</h1>
            <pin v-if="!alert.seen" class="ml-3"></pin>
          </div>
          <p class="text-gray-500 text-sm">{{ alert.content }}</p>
        </div>
      </template>
      <template v-slot:dropdown v-else>
        <div class="flex flex-col bg-white relative p-2 rounded-lg">
          <div class="flex flex-row">
            <p class="text-gray-500 text-sm">
              Il n'y a aucune alerte.
            </p>
          </div>
        </div>
      </template>
    </navbar-item>
    <navbar-item>
      <div class="flex flex-row text-gray-900 mx-3 cursor-pointer">
        <span class="" contenteditable="true"></span>
        <edit-icon class="h-5"></edit-icon>
      </div>
    </navbar-item>
  </div>
</template>

<script>
import NavbarItem from '@/components/Navbar/NavbarItem.vue'
import Pin from '@/components/Utils/Pin.vue'
import BullhornIcon from '@/components/Icons/BullhornIcon.vue'
import GearIcon from '@/components/Icons/GearIcon.vue'
import EditIcon from '@/components/Icons/EditIcon.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: { NavbarItem, Pin, BullhornIcon, GearIcon, EditIcon },
  data: () => {
    return {
      timer: null
    }
  },
  computed: {
    ...mapGetters('alert', {
      alerts: 'getAlerts'
    })
  },
  mounted() {
    this.initAlerts()
    this.fetchAlerts()
  },
  methods: {
    ...mapActions('alert', {
      initAlerts: 'initAlerts',
      setSeenAlerts: 'setSeenAlerts',
      fetchAlerts: 'fetchAlerts'
    }),
    closeOpenDropdown(state) {
      console.log(state)
      if (state) {
        this.timer = setTimeout(
          () => this.alerts.forEach((a) => this.setSeenAlerts(a.id)),
          3000
        )
      } else {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
      }
    }
  }
}
</script>
