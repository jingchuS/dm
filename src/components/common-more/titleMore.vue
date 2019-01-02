<template>
    <div>
        <nav class="filter-nav bc-main">
            <ul class="mod-list mod-flex com-border-bottom">
                <li class="mod-list-item mod-flex-item" :item='item' v-for="(item,index) in position" :key="item.id">
                    <a href="javascript:;" class="mod-list-info" @click="button(index)" :class="(seen && index==Noprev)?'active':''">
                        {{ item.name }}<p><svg data-v-5e628c52="" t="1541208993260" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15">
                                <path data-v-5e628c52="" d="M750.331 457.203l-238.576 238.087-238.087-238.576z" p-id="2029" :fill="(seen && index==Noprev)?'#f6bb00':'#6f6f6f'"></path>
                            </svg></p>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="filter-wrap iscroll" v-if="seen && prev==0">
            <div class="filter-scroll" data-field="job_type">
                <div class="filter-job" :item='item' v-for="(item,index) in typePosition" :key="item.id">
                    <h3 class="filter-subtitle">{{ item.name }}</h3>
                    <ul class="filter-type mod-list com-border-bottom">
                        <li class="mod-list-item" data-src="/sh/" :item1='item1' v-for="(item1,index1) in item.type" :key="item1.id">
                            <a href="javascript:;" class="mod-list-info" @click="toPositionType(index,index1)" :class="type_verify && index==index_2 && index1==index_3?'filterType_active':''">{{ item1.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="filter-body mod-flex" v-if="seen && prev==1">
            <div id="mod-filter" class="filter-wrap mod-flex-item bc-main iscroll">
                <ul class="filter-menu mod-list">
                    <li class="mod-list-item com-border-bottom js-filt-child" :item='item' v-for="(item,index) in district" :key="item.district_id">
                        <a href="javascript:;" class="mod-list-info" @click="toCity(index)" :class="(verify && index==Noprev1)?'toactive':''">{{ item.district_name }}</a>
                    </li>
                </ul>
            </div>
            <div id="filter-street" class="iscroll filter-wrap mod-flex-item bc-body" v-show="verify">
                <ul class="filter-menu mod-list">
                    <li class="mod-list-item com-border-bottom" :item='item' v-for="(item,index) in city" :key="item.id">
                        <a :href="'/othercity?'+h_url+'#city='+item.url+'#street_url='+street_url+'?district_id='+district_id+'?street_id='+street_id" class="mod-list-info" @click="updateCity(index)">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="filter-sort" v-if="seen && prev==2">
            <ul class="filter-menu mod-list">
                <li class="mod-list-item com-border-bottom" :item='item' v-for="(item,index) in sort" :key="item.id">
                    <a href="javascript:;" class="mod-list-info" @click="toSort(index)" :class="filterSort_verify && index_4==index ? 'sort_active':''">{{ item.title }}</a>
                </li>
            </ul>
        </div>
        <div class="filter-cont" id="filter-more" v-if="seen && prev==3">
            <div class="filter-body mod-flex">
                <div class="mod-sort" :item='item' v-for="(item,index1) in sort_pos" :key="item.id">
                    <h3 class="filter-subtitle">{{ item.name }}</h3>
                    <ul class="filter-radio mod-list com-border-bottom">
                        <li class="mod-list-item" :item1='item1' v-for="(item1,index) in item.type" :key="item1.id">
                            <span @click="sortButton(index,index1)" :class="arr1[index1][0] && arr1[index1][index+1]?'sort_active':''">{{ item1.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="filter-bar">
                <div class="filter-btn btn-default js-touch-state" @click="sortSex">完成</div>
                <div class="filter-btn js-touch-state">重置</div>
            </div>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      seen: false,
      verify: false,
      sort_verify: false,
      type_verify: false,
      filterSort_verify: false,
      position: [],
      typePosition: [],
      job_type: 0,
      city: [],
      refreshCity: [],
      district: [],
      sort: [],
      sort_pos: [],
      prev: -1,
      Noprev: 5,
      hash: '',
      h_url: '',
      prev1: -1,
      Noprev1: 30,
      district_id: '',
      street_id: '',
      street_url: '',
      arr2: [[], [], [], [], [], [], [], [], [], [], []],
      arr1: [[], [], []],
      index_2: -1,
      index_3: -1,
      index_4: -1,
      sex:0,
      identity:0,
      work_type:0
    }
  },
  async beforeCreate() {
    let result = await http({
      method: 'get',
      url: './json/filterPosition.json'
    })
    this.position = result.data

    let result1 = await http({
      method: 'get',
      url: './json/type_pos.json'
    })
    this.typePosition = result1.data

    let result2 = await http({
      method: 'get',
      url: 'list/getstreets/?district_id=175&location=%2Fbj%2F'
    })
    this.city = result2.data.data
    this.hash = this.$route.path
    this.h_url = document.cookie.split('=')[1]

    let result3 = await http({
      method: 'get',
      url: './json/bj-district.json'
    })
    this.district = result3.data

    let result6 = await http({
      method: 'get',
      url: './json/sort.json'
    })
    this.sort = result6.data

    let result7 = await http({
      method: 'get',
      url: './json/sort_pos.json'
    })
    this.sort_pos = result7.data
  },
  computed: {
    ...mapState(['isSeen'])
  },
  methods: {
    button(index) {
      if (this.prev != index) {
        this.seen = true
      }
      if (this.prev == index) {
        this.seen = !this.seen
      }
      this.Noprev = index
      this.prev = index
      this.$store.commit('changeSeen',this.seen)
    },
    toPositionType(index, index1) {
      this.index_2 = index
      this.index_3 = index1
      this.type_verify = !this.type_verify
      this.job_type = this.typePosition[index].type[index1].job_type
      this.$router.push("/postype?job_type="+this.job_type)
      this.seen = false
    },
    toSort(index) {
      this.filterSort_verify = !this.filterSort_verify
      this.index_4 = index
      this.$router.push("/sortpos?job_type="+this.index_4)
      this.seen = false      
    },
    async toCity(index) {
      if (this.prev1 != index) {
        this.verify = true
      }
      if (this.prev1 == index) {
        this.verify = !this.verify
      }
      this.Noprev1 = index
      this.prev1 = index
      this.district_id = this.district[index].district_id
      let result4 = await http({
        method: 'get',
        url:'list/getstreets/?district_id=' + this.district_id +'&location=%2Fbj%2F'
      })
      this.city = result4.data.data
    },
    async updateCity(index) {
      let that = this
      new Promise(
        await function(reslove, reject) {
          that.street_id = that.city[index].id
          that.street_url = that.city[index].url
          location.reload()
        }
      )
    },
    sortButton(index, index1) {
      Vue.set(this.arr1[index1], 0, true)
      for (var i = 1; i < this.arr1[index1].length; i++) {
        Vue.set(this.arr1[index1], i, false)
      }
      Vue.set(this.arr1[index1], index + 1, true)
      
      this.sex = index
      if(index1==0){
      this.sex = this.sort_pos[index1].type[index].type_id        
      }
      if(index1==1){
      this.identity = this.sort_pos[index1].type[index].type_id      
      }
      if(index1==2){
      this.work_type = this.sort_pos[index1].type[index].type_id
      }
    },
    sortSex(){
      this.$router.push("/sortsex?sex="+this.sex+'&identity='+this.identity+'&work_type='+this.work_type)
      this.seen = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.main-position
    height 100%
.bc-main
    display flex
    width 100%
    height 0.44rem
    background white
    z-index 1
    border 0 0 1px 0, #ccc
    .mod-list
        display flex
        justify-content space-around
        flex 1
        border 0 0 1px 0, #d9d9d9
        background white
        z-index 1
        li
            height 0.32rem
            margin-top 0.06rem
            width 100%
            border 0 2px 0 0, #ededed
            .mod-list-info
                display flex
                color #6f6f6f
                font-size 0.12rem
                line-height 0.32rem
                width 100%
                justify-content center
                p
                    transition all 0.2s linear
                    svg
                        margin-top 0.08rem
                        margin-left 0.06rem
            .active
                color #f6bb00
                p
                    transform rotateX(180deg)
                    transition all 0.2s linear
                    margin-top -0.1rem
.filter-wrap
    width 100%
    height 3.9rem
    background white
    border 0 0 1px 0, #e2e2e3
    z-index 1
    position absolute
    overflow-y auto
    .filter-scroll
        width 100%
        .filter-job
            width 100%
            height auto
            overflow hidden
            border 0 0 1px 0, #e2e2e3
            h3
                color #999
                font-weight 400
                line-height 0.22rem
                padding 0.1rem
            .filter-type
                width 100%
                height auto
                overflow hidden
                margin 0 0 0.12rem 0.12rem
                li
                    height auto
                    border 1px, #e2e2e3
                    text-align center
                    line-height 0.32rem
                    float left
                    margin-top 0.12rem
                    margin-right 0.12rem
                    border-radius 7%
                    a
                        display flex
                        color #404040 !important
                        height 0.32rem
                        width 0.78rem
                        justify-content center
                    .filterType_active
                        background #fff7d1 !important
                        border-color #fc0 !important
.filter-body
    width 100%
    background white
    z-index 1
    .toactive
        color #f6bb00 !important
    #mod-filter
        width 100%
        height 3.53rem
        ul
            width 100%
            height auto
            z-index 1
            display flex
            flex-direction column
            border none !important
            justify-content space-around
            padding-top 4.6rem
            li
                width 100%
                height 0.44rem
                border 0 0 1px 0, #ededed
                margin-left 0.12rem
                margin-top 0 !important
                a
                    display flex
                    height 0.44rem
                    width 100%
                    justify-content left
                    color #404040
                    font-size 0.14rem
                    line-height 0.44rem
    #filter-street
        width 50%
        height 3.53rem
        background #f7f7f7
        margin-left 50%
        .filter-menu
            width 100%
            height auto
            .mod-list-item
                width 100%
                height 0.44rem
                border 0 0 2px 0, #edeeee
                margin-left 0.12rem
                .mod-list-info
                    display flex
                    height 0.44rem
                    width 100%
                    justify-content left
                    color #404040
                    font-size 0.14rem
                    line-height 0.44rem
.filter-sort
    width 100%
    height 1.76rem
    .mod-list
        width 100%
        height 1.76rem
        background white
        z-index 1
        li
            width 100%
            height 0.44rem
            background white
            line-height 0.44rem
            border 0 0 1px 0, #f1f1f1
            z-index 1
            a
                color #404040
                font-size 0.14rem
                width 100%
                height 0.44rem
                display block
                padding-left 0.12rem
            .sort_active
                background #f7f7f7
                color #fb0
#fiter-more 
    background black !important
    z-index 1
.filter-cont
    width 100%
    height 3.32rem
    background white
    z-index 1
    
    .mod-flex
        width 100%
        height 3.18rem
        background white
        overflow-y auto
        .mod-sort
            width 100%
            height auto
            border 0 0 1px 0, #ccc
            z-index 1
            background white
            padding-top 0.12rem
            h3
                font-weight 400
                color #999
                line-height 0.22rem
                display block
                margin-left  0.12rem
            .filter-radio
                width 100%
                height 0.6rem
                margin-left 0.12rem
                display flex
                li
                    width 0.78rem
                    height 0.32rem
                    border 1px, #ccc
                    text-align center
                    line-height 0.32rem
                    margin-right 0.12rem
                    margin-top 0.12rem
                    border-radius 7%
                    span
                        width 0.78rem
                        height 0.32rem
                        display block
                .sort_active
                    background #fff7d1 !important
                    border-color #fc0 !important
                    border-radius 7%
    .filter-bar
        width 100%
        height 0.8rem
        border 0px 0 1px 0, #ccc
        padding-right 0.12rem
        margin-top -0.38rem
        padding-top 0.25rem
        background white
        z-index 1
        .filter-btn
            width 0.72rem
            height 0.32rem
            background white
            color #404040
            border 1px, #ccc
            border-radius 7% !important
            z-index 1
            text-align center
            line-height 0.32rem
            float right
            margin-right 0.12rem
        .btn-default
            background #fc0
</style>

