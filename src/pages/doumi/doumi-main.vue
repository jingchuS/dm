<template>
  <div id="mod-scroll">
    <div class="home-main">
      <div class="main-nav">
        <mainHeader></mainHeader>
      </div>
      <div class="main-position">
        <doumiRenqi :inTheater='inTheater'></doumiRenqi>
        <doumiWageProtect :wage='wage'></doumiWageProtect>
        <doumiSalary :salary='salary'></doumiSalary>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from 'pages/doumi/doumi-main-header'
import doumiRenqi from 'pages/doumi/doumi-renqi'
import doumiWageProtect from 'pages/doumi/doumi-WageProtect'
import doumiSalary from 'pages/doumi/doumi-Hsalary'
import Footer from 'components/layout/Footer'
import axios from 'utils/http'
import { Indicator } from 'mint-ui'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      inTheater: null,
      wage: null,
      salary: null
    }
  },
  components: {
    mainHeader,
    doumiRenqi,
    doumiWageProtect,
    doumiSalary,
    Footer
  },
  async beforeCreate() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })

    let hash = location.href.split('=')[1] === undefined ? 'bj' : location.href.split('=')[1]

    var d = new Date()
    d.setDate(d.getDate() + 5)
    document.cookie = 'c_citydomain=' + hash + ';path=/;expires=' + d     

    let result = await axios({
      method: 'get',
      url:
        '/list/more/?order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=9a52b0637f7dc036e3b2fcc466557468&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    this.inTheater = result

    let result1 = await axios({
      method: 'get',
      url:
        '/list/more/?order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=9a52b0637f7dc036e3b2fcc466557468&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    this.wage = result1

    let result2 = await axios({
      method: 'get',
      url:
        '/list/more/?order=0&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=9a52b0637f7dc036e3b2fcc466557468&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    this.salary = result2 

    let pagedata = await axios({
      method: 'get',
      url:
        '/x/web-interface/ranking?rid=4&day=3&jsonp=jsonp'
    })
    var datalist = JSON.parse(pagedata.request.response)
    console.log(datalist)

    Indicator.close()
  },
  updated() {
    new BScroll('#mod-scroll', {
      probeType: 1,
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
#mod-scroll
  height 6.23rem
  background #f7f7f7
  .home-main
    height 21.3rem
    .main-nav
      display flex
      width 100%
      height 3.34rem
      background #eee
    .main-position
      height 100%
      margin-top 0.12rem
      background #f7f7f7
</style>

