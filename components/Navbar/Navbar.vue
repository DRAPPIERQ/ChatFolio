<template>
    <div class="flex flex-row-reverse py-5 px-5">
        <navbar-item>
            <div class="text-gray-800 mx-3 cursor-pointer">
                <gear-icon class="h-5">></gear-icon>
            </div>
        </navbar-item>
        <navbar-item dropdown>
            <div class="flex flex-row text-gray-800 relative mx-3 cursor-pointer">
                <bullhorn-icon class="h-5">></bullhorn-icon>
                <pin v-show="alerts.length" class="absolute top-3 left-3" :width-height="4"></pin>
            </div>
        </navbar-item>
        <navbar-item>
            <div class="flex flex-row text-gray-800 mx-3 cursor-pointer">
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

import { mapGetters, mapActions  } from 'vuex'

export default {
    components: { NavbarItem, Pin, BullhornIcon, GearIcon, EditIcon },
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
            fetchAlerts: 'fetchAlerts',
        })
    }
}
</script>
