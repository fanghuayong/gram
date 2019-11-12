<template>
    <!-- 一条动态 -->
    <div class="vuegram-post">
        <!-- 头像和名字 -->
        <div class="header level">
            <div class="level-left">
                <figure class="image is-32x32">
                    <img :src="post.userImage">
                </figure>
                <span class="username">{{ post.username }}</span>
            </div>
        </div>
        <!-- 照片和滤镜 -->
        <div class="image-container"
            :class="post.filter"
            :style="{backgroundImage: `url(${post.postImage})`}"
            @dblclick="clicklike">
        </div>
        <!-- 喜欢和说明 -->
        <div class="content">
            <div class="heart">
                <i class="fa"
                    @click="clicklike"
                    :class="iClass">
                </i>
            </div>
            <div class="likes">
                {{ post.likes }} likes
            </div>
            <p class="caption">
                <span>{{ post.username }}</span>
                {{post.caption}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object,
    },
    methods: {
        // 双击图片或者单机小星星的时候加减和取反
        clicklike() {
            this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
            this.post.hasBeenLiked = !this.post.hasBeenLiked;
        },
    },
    computed: {
        iClass: function() {
            return {
                "fa-heart": this.post.hasBeenLiked,
                "fa-heart-o": !this.post.hasBeenLiked,
            }
        }
    },
}
</script>
<style lang="scss" src="../styles/vuegram-post.scss">

</style>