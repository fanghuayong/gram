<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <a 
          class="cancel-cta"
          @click="goToHome"
          v-if="step === 2 || step ===3">取消</a>
        <img src="./assets/vue_gram_logo_cp.png" alt="">
        <a 
          class="next-cta"
          v-if="step === 2"
          @click="step++">下一步</a>
        <a 
          class="next-cta"
          v-if="step === 3"
          @click="share">发表</a>
      </div>
      <PhoneBody 
        :posts="posts" 
        :filters="filters"
        :step="step"
        :image="image"
        :selectFilter="selectFilter"
        v-model="caption">
        </PhoneBody>
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fa fa-home" @click="goToHome"></i>
        </div>
        <div class="upload-cta">
          <input type="file" id="file" name="file" @input="uploadImage" :disabled="step !== 1">
          <label for="file">
            <i class="fa fa-plus-square-o"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneBody from "./components/PhoneBody"
import posts from "./data/posts.js" // 数据
import filters from "./data/filters" //滤镜名字
import eventBus from "./event-bus" // 另一个vue实例

export default {
  name: 'app',
  created() {
    eventBus.$on("selectedFilter", evt => {
      this.selectFilter = evt;
    })
  },
  data() {
    return {
      posts,    // 数据
      filters,   // 滤镜名字
      step: 1,    // 所在页面
      image: "", // 要上传的图片
      selectFilter: "",// 滤镜
      caption: "",  // 说明
    }
  },
  methods: {
    uploadImage(e) {
      const files = e.target.files;
      if(!files.length) return; // 如果选择了一个文件，再取消的话退出
      // 文件被选中继续操作
      // 读取文件转化为data64格式并触发onload事件
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        this.image = evt.target.result;
        this.step = 2;
      }
    },
    goToHome() {
      this.image = "";
      this.selectFilter = "";
      // 取消选择图片时候上一次滤镜的选择
      this.step = 1; // 去主页
    },
    share() {
      const post = {
        username: "fanghuayong",
        userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
        postImage: this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.selectFilter,
      }
      this.posts.unshift(post);
      this.goToHome();// 插入后返回到首页
    }
  },
  components: {
    PhoneBody,
  }
}
</script>

<style lang="scss" src="./styles/app.scss">

</style>
