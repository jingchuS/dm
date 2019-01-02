<template>
    <div class="wrapper" id="wrapper">
        <div class="content">
            <div class="column">
                <div class="column-head">
                    <h2 class="column-title">热门城市</h2>
                </div>
                <div class="column-body">
                    <ul class="category" :city="city">
                        <li :item='item' v-for="item of city" :key="item.id">
                            <a :href="'doumi?address='+item.address">{{ item.name }} </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="other">
                <div class="other-head">
                    <h2 class="other-title">其它城市<span>&nbsp;&nbsp;(可在省份里选择具体城市)</span></h2>
                </div>
                <div class="other-all">
                    <h2 class="other-all-title">全国</h2>
                </div>
                <div class="other-city">
                    <ul class="category" :otherCity="otherCity">
                        <li v-for="val of otherCity" :key="val.id">
                            <a href="javascript:;" @click="butt">{{ val.name }}</a>
                            <!-- <ul class="category-city" v-show="seen"  v-for="val of otherCity" :key="val.id">
                                <div></div>
                                <li>{{ val.cities }}</li>
                            </ul> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'utils/http'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      seen:true,
      city: [],
      otherCity: []
    }
  },
  async beforeCreate() { 
    let result = await axios({
      method: 'get',
      url: './json/hot-city.json'
    })
    this.city = result.data

    let result1 = await axios({
      method: 'get',
      url: './json/other-city.json'
    })
    this.otherCity = result1.data
  },
  mounted(){
      new BScroll('#wrapper',{
          probeType:1,
          click:true
      })
  },
  methods:{
      butt(){
          this.seen = !this.seen
      } 
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.wrapper
    width 100%
    height 6.33rem 
    .content 
        width 100%     
        height auto
        .column
            width 100%
            height 3.2rem
            .column-head
                width 100%
                height 0.4rem
                background #f0f0f0
                border 0px 0 1px 0, #e5e5e5
                h2
                    color #808080
                    font-size 0.14rem
                    line-height 0.4rem
                    font-weight 400
                    padding-left 0.12rem
            .column-body
                width 100%
                height 100%
                background white
                border 0 0 1px 0, #e5e5e5
                .category
                    width 100%
                    // height 100%
                    height 2.8rem
                    li
                        width 25%
                        float left
                        height 0.4rem
                        text-align center
                        line-height 0.4rem
                        border 0 1px 1px 0, #e5e5e5
                        a
                            display flex
                            color #404040
                            width 100%
                            height 0.4rem
                            justify-content center
        .other
            width 100%
            height 100%
            .other-head
                width 100%
                height 0.4rem
                border 0px 0px 1px 0px, #e5e5e5
                background #f0f0f0
                h2
                    color #808080
                    font-size 0.14rem
                    line-height 0.4rem
                    font-weight 400
                    padding-left 0.12rem
                    span
                        font-size 0.12rem
                        color #a3a3a3
            .other-all
                width 100%
                border 0px 0px 1px 0px, #e5e5e5
                background white
                h2
                    color #404040
                    font-size 0.14rem
                    line-height 0.4rem
                    font-weight 400
                    padding-left 0.12rem
            .other-city
                width 100%
                height 3.7rem
                background white
                .category
                    width 100%
                    height 3.7rem
                    position relative
                    li
                        float left
                        width 25%
                        height 0.4rem
                        border 0 1px 1px 0, #e5e5e5
                        display flex
                        position relative
                        a
                            display flex
                            width 100%
                            height 0.4rem
                            color #404040
                            line-height 0.4rem
                            justify-content center
                        // .category-city 
                        //     position absolute
                        //     top 0.4rem 
                        //     width 100% 
                        //     height 0.4rem
                        //     background #7d8083
                        //     z-index 1
                        //     li  
                        //         width 100% 
                        //         height 0.4rem
                        //         border 0 1px 1px 0,#909395
                        //         justify-content center
                        //         line-height 0.4rem
</style>

