<template>
    <div class="home-wrap">
        <Header class="header"></Header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Header from 'components/layout/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang='stylus' scoped>
.home-wrap
    height 100%
    display flex
    flex 1
    flex-direction column
    main
        background white
        flex 1
</style>