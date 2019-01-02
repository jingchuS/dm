<template>
    <div>
        <div>
            <titleMore></titleMore>
        </div>
        <div class="main-position" id="main-position">
            <div class="mod-renqi" id="main-city">
                <renqi :item='item' v-for="item of refreshType" :key="item.id"></renqi>
            </div>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
import renqi from 'components/doumi-list/doumiList'
import titleMore from 'components/common-more/titleMore'
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      refreshType: [],
      type_code: 0,
      count:3
    }
  },
  components: {
    titleMore,
    renqi
  },
  async beforeCreate() {
    this.type_code = this.$route.query.job_type
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    let result = await http({
      method: 'get',
      url:
        'list/more/?job_type=' +
        this.type_code +
        '&order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=f0c3b478-e4c7-11e8-b37b-1418774d0625&interface%5Breqid%5D=e6633f6faf848acfea9da75e7a40ae5d&interface%5Blat%5D=&interface%5Blng%5D=&offset=2&page=3&pageSize=10'
    })
    this.refreshType = result.data
    Indicator.close()
  },
  mounted() {
    let bscroll = new BScroll('#main-position', {
      probeType: 1,
      pullUpLoad: {
        threshold: 50
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
          'list/more/?order=' +
          this.type_code +
          '&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=f0c3b478-e4c7-11e8-b37b-1418774d0625&interface%5Breqid%5D=d540edbff9558b874c28e4a074786d45&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=' +
          this.count + 
          '&pageSize=10'
      })

      this.refreshType.push(...result1.data)
      console.log(this.refreshType)
      // $nextTick  保证了本次refresh会拿到渲染后的 doumilist
      this.$nextTick(() => {
        bscroll.refresh()
        bscroll.finishPullUp()
      })
    })
  },
  watch: {
    async $route(to, from) {
      var codd = this.$route.query.job_type
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      let result1 = await http({
        method: 'get',
        url:
          'list/more/?job_type=' +
          codd +
          '&order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=f0c3b478-e4c7-11e8-b37b-1418774d0625&interface%5Breqid%5D=e6633f6faf848acfea9da75e7a40ae5d&interface%5Blat%5D=&interface%5Blng%5D=&offset=2&page=2&pageSize=10'
      })
      this.refreshType = result1.data
      Indicator.close()
    }
  }
}
</script>

<style lang="stylus" scoped>
#main-position
    width 100%
    height 5.89rem
    overflow-y auto
    .mod-renqi
        width 100%
        height auto
</style>

