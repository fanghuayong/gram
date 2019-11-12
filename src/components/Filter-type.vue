<template>
    <div class="filter-type">
        <p>{{ filter.name }}</p>
        <div
            class="img"
            :class="filter.name"
            :style="{backgroundImage: `url(${image})`}"
            @click="selectFilter">

        </div>
    </div>
</template>
<script>
import eventBus from "../event-bus";
export default {
    props: {
        filter: Object,
        image: String,
    },
    methods: {
        selectFilter() {
            // 通过自定义事件把选中的filter名字子传父
            eventBus.$emit("selectedFilter", this.filter.name)
        }
    }
}
</script>
<style lang="scss" src="../styles/filter-type.scss">

</style>