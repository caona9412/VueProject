<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" @click="goto('/index')" :class="{on:$route.path === '/index'}">
      <span class="item_icon">
        <i class="iconfont icon-meinv"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/category')" :class="{on:$route.path === '/category'}">
      <span class="item_icon">
        <i class="iconfont icon-xuanzhong"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/buy')" :class="{on:$route.path === '/buy'}">
      <span class="item_icon">
        <i class="iconfont icon-shouhou"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/cart')" :class="{on:$route.path === '/cart'}">
      <span class="item_icon">
        <i class="iconfont icon-jifen"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:$route.path === '/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>

</template>

<script>
export default {
  name:'FooterGuide',
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>

  .footer_guide
    width 100%
    height 98px
    background #fff
    z-index 5
    position fixed
    left 0
    bottom 0
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px 0
      &.on
        color #DD1A21
      span
        font-size 24px
        margin 2px 0
        .iconfont
          font-size 40px  
  
</style>