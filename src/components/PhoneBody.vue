<template>
    <div class="phone-body">
        <div class="feed" v-if="step === 1" v-dragscroll>
            <VuegramPost
                v-for="(post, index) in posts"
                :key="index"
                :post="post">

            </VuegramPost>
        </div>
        <div v-if="step === 2">
            <div 
                class="selected-image"
                :class="selectFilter"
                :style="{backgroundImage: `url(${image})`}">

            </div>
            <div class="filter-container" v-dragscroll>
                <FilterType
                    v-for="filter in filters"
                    :key="filter.name"
                    :filter= "filter"
                    :image="image"
                    ></FilterType>
            </div>
        </div>
        <div v-if="step === 3">
            <div 
                class="selected-image"
                :class="selectFilter"
                :style="{backgroundImage: `url(${image})`}">

            </div>
            <div class="caption-container">
                <textarea 
                    placeholder="这一刻的想法..."
                    :value="value"
                    @input="inputText"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
import VuegramPost from './VuegramPost'
import FilterType from './Filter-type'
export default {
   props: {
       posts: Array,
       filters: Array,
       step: Number,
       image: String,
       selectFilter: String,
       value: String,
   },
//    data() {
//        return {
//            filter: "",
//        }
//    },
   components: {
       VuegramPost,
       FilterType,
   },
   methods: {
       inputText(e) {
           this.$emit("input", e.target.value)
       }
   }
}
</script>
<style lang="scss" src="../styles/phone-body.scss">

</style>

