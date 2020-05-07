<template>
  <div class="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="logo" src="./logo.png" alt />
      <div class="search" @click="toSearch">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder">搜索商品, 共25336款好物</span>
      </div>
      <div class="login" @click="toLogin">登录</div>
    </div>

    <!-- 导航区 -->
    <div class="navWrap" ref="navWrap">
      <ul class="navList" v-if="indexData.kingKongModule">
        <li class="navItem active">推荐</li>
        <li
          class="navItem"
          v-for="(item,index) in indexData.kingKongModule.kingKongList"
          :key="index"
        >{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions, mapState } from "vuex";
export default {
  name: "index",
  methods: {
    ...mapActions({
      getIndexData: "getIndexData"
    }),
    //跳转至搜索页面
    toSearch() {},
    //去登录
    toLogin() {},
    initScrollY() {
      //初始化滑屏
      this.$nextTick(() => {
        new BScroll(this.$refs.navWrap,{click: true,scrollX: true})
      })
    }
  },
  computed: {
    ...mapState({
      indexData: state => state.index.indexData
    })
  },
  async mounted() {
    await this.getIndexData();
    this.initScrollY()
  }
};
</script>

<style lang="stylus" scoped>
.indexContainer {
  width: 100%;

  .header {
    width: 100%;
    height: 60px;
    padding: 10px 0;
    display: flex;
    align-items: center;

    .logo {
      width: 138px;
      height: 40px;
      margin: 10px 30px;
    }

    .search {
      width: 442px;
      height: 56px;
      background-color: #ededed;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      .iconfont {
        display: inline-block;
        margin-right: 10px;
        margin-top: 5px;
        font-size: 30px;
      }

      .placeholder {
        font-size: 28px;
        color: #666;
      }
    }

    .login {
      width: 74px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 24px;
      color: #DD1A21;
      border: 1px solid #DD1A21;
      border-radius: 8px;
      margin-left: 10px;
    }
  }

  .navWrap {
    width: 100%;
    height: 60px;
    // overflow: hidden;
    padding-left: 30px;
    box-sizing: border-box;

    .navList {
      display inline-block
      white-space nowrap
      // width 1680px
      height 60px
      .navItem {
        position: relative;
        display: inline-block;
        width: 140px;
        height: 60px;
        color: #333;
        text-align: center;
        line-height: 60px;
        font-size: 28px;

        &.active {
          color: #DD1A21;
        }

        &.active:after {
          position: absolute;
          left: 0;
          bottom: 0;
          content: '';
          width: 100%;
          height: 2px;
          background-color: #DD1A21;
        }
      }
    }
  }

  .test {
    zoom: 1;
  }
}
</style>