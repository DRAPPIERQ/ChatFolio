<template>
    <div>
        <div class="relative" :class="getWidthHeigthClass" v-if="isCounter">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 m-1 bg-red-500"></span>
        </div>
        <div class="relative" :class="getWidthHeigthClass" v-else>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 m-1 bg-red-500"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isCounter: Boolean,
        count: {
            type: Number,
            default: 99,
            require: false
        },
        widthHeight: {
            type: Number,
            default: 4,
            require: false
        }
    },
    computed: {
        getWidthHeigthClass() {
            return 'h-'+this.$props.widthHeight+' w-'+this.$props.widthHeight
        }
    }
}
</script>