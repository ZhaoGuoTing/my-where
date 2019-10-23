<template>
  <div class="header">
      <div>返回</div>
      <div class="headerInput">请输入城市/景点</div>
      <div>城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        display flex
        justify-content space-between
        align-items center
        height 0.88rem
        color #fff
        background #00bcd4
        font-size 0.28rem
        padding 0 0.15rem
        .headerInput
            display flex
            flex 1
            height 0.64rem
            line-height 0.64rem
            color #999
            background #fff
            border-radius 0.08rem
            margin 0 0.12rem
            padding-left 0.2rem
</style>
