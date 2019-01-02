<template>
  <div>
    <div>
      <titleMore></titleMore>
    </div>
    <div class="main-position" id="main-position">
      <div class="mod-renqi" id="main-city">
        <renqi :item='item' v-for="item of refreshType" :key="item.id"></renqi>
        <!-- <div :class="isSeen?'mask':''"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import http from 'utils/http'
import renqi from 'components/doumi-list/doumiList'
import titleMore from 'components/common-more/titleMore'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      refreshType: [],
      sex: 0,
      identity: 0,
      work_type: 0
    }
  },
  components: {
    titleMore,
    renqi
  },
  async beforeCreate() {
    console.log(this.$route)
    this.sex = this.$route.query.sex
    this.identity = this.$route.query.identity
    this.work_type = this.$route.query.work_type
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    let result = await http({
      method: 'get',
      url:
        'list/more/?order=0&lat=&lng=&more=a&pageSize=10&sex=' +
        this.sex +
        '&identity=' +
        this.identity +
        '&work_type=' +
        this.work_type +
        '&interface%5Buuid%5D=f0c3b478-e4c7-11e8-b37b-1418774d0625&interface%5Breqid%5D=2f2220e398e4853b018a36c647173350&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    this.refreshType = result.data
    Indicator.close()
  },
  watch: {
    async $route(to, from) {
      var sex = this.$route.query.sex
      var identity = this.$route.query.identity
      var work_type = this.$route.query.work_type
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      let result1 = await http({
        method: 'get',
        url:
          'list/more/?order=0&lat=&lng=&more=a&pageSize=10&sex=' +
          sex +
          '&identity=' +
          identity +
          '&work_type=' +
          work_type +
          '&interface%5Buuid%5D=f0c3b478-e4c7-11e8-b37b-1418774d0625&interface%5Breqid%5D=2f2220e398e4853b018a36c647173350&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
      })
      this.refreshType = result1.data
      Indicator.close()
    }
  },
  computed: {
    ...mapState(['isSeen'])
  }
}
</script>

<style lang="stylus" scoped>
#main-position
  width 100%
  height 5.89rem
  overflow-y auto
  .mask
      position fixed
      left 0
      top 0
      z-index 10
      width 100%
      height 100%
      background-color rgba(0, 0, 0, 0.4)
  .mod-renqi
    width 100%
    height auto
</style>

