<template>
  <div>
    <div>
      <titleMore></titleMore>
    </div>
    <div class="main-position" id="main-position">
      <div class="mod-renqi" id="main-city">
        <renqi :item='item' v-for="item of refreshCity" :key="item.id"></renqi>
        <div :class="isSeen?'mask':''"></div>
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
      refreshCity: [],
      district_id: '',
      street_id: ''
    }
  },
  components: {
    titleMore,
    renqi
  },
  async beforeCreate() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    this.district_id = this.$router.history.current.hash
      .split('?')[1]
      .split('=')[1]
    this.street_id = this.$router.history.current.hash
      .split('?')[2]
      .split('=')[1]
    let result3 = await http({
      method: 'get',
      url:
        '/list/more/?district_id=' +
        this.district_id +
        '&street_id=' +
        this.street_id +
        '&order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=f907b7c2-e433-11e8-bb31-1418774d6214&interface%5Breqid%5D=97741d29d4f8e3401a2cae449c13955b&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    console.log(result3)
    this.refreshCity = result3.data
    Indicator.close()
  },
  mounted() {
    this.district_id = this.$router.history.current.hash
      .split('?')[1]
      .split('=')[1]
    this.street_id = this.$router.history.current.hash
      .split('?')[2]
      .split('=')[1]
    let bscroll = new BScroll('#main-position', {
      probeType: 1,
      pullUpLoad: {
        threshold: 50
      },
      bounce: {
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      click:true
    })
    // watch一下  pullingup
    bscroll.on('pullingUp', async () => {
      this.count++
      // 做分页的ajax请求
      let result1 = await http({
        method: 'get',
        url:
          'list/more/?district_id=' +
          this.district_id +
          '&street_id=' +
          this.street_id +
          '&order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=c8fe37f3ab36ffe362614e59b16091e6&interface%5Blat%5D=&interface%5Blng%5D=&offset=2&page=' +
          this.count +
          '&pageSize=10'
      })

      this.refreshCity.push(...result1.data)
      console.log(this.refreshType)
      // $nextTick  保证了本次refresh会拿到渲染后的 doumilist
      this.$nextTick(() => {
        bscroll.refresh()
        bscroll.finishPullUp()
      })
      if (this.refreshType === undefined) {
        // alert('没有更多职位了')
        // bscroll.destroy()
      }
    })
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
