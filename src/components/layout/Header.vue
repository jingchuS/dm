<template>
    <div>
        <div class="header">
            <header class="mod-header logo-header" :city="city">
                <h1>
                    <div class="logoo"><img src="http://sta.doumistatic.com/src/image/logo_doumi.png" alt=""></div>
                    <a :href="'/doumi?address='+hash" class="logo">斗米</a>
                </h1>
                <router-link to="/city" tag='div' :item='item' v-for="item in city" :key="item.id">
                    <a href="javascript:;" class="city" v-if="hash == item.address">{{item.name}}
                        <svg t="1541208993260" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2028" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15">
                            <path d="M750.331 457.203l-238.576 238.087-238.087-238.576z" p-id="2029"></path>
                        </svg>
                    </a>
                </router-link>
                <a href="" class="operate uc">
                    <svg t="1541310773981" class="icon" style="color: red" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2939" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                        <path d="M657.94 585.9c95-51.87 159.61-152.7 159.61-268.36C817.55 149.07 680.48 12 512 12S206.45 149.07 206.45 317.55c0 115.65 64.61 216.49 159.61 268.36C173.75 635.89 35.25 784.43 12.19 981a27.78 27.78 0 0 0 24.36 30.81c15 2 29-9.09 30.82-24.36C92.54 772.91 275.4 623.09 512 623.09s419.46 149.82 444.63 364.33a27.78 27.78 0 0 0 27.56 24.58 26.2 26.2 0 0 0 3.26-0.19 27.78 27.78 0 0 0 24.36-30.81c-23.06-196.57-161.56-345.11-353.87-395.1zM262 317.55c0-137.85 112.14-250 250-250s250 112.14 250 250-112.14 250-250 250-250-112.15-250-250z" p-id="2940"></path>
                    </svg>
                </a>
                <a href="" class="operate search">
                    <svg t="1541309894268" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                        <defs></defs>
                        <path d="M1003.86 964.58L837.2 797.92c-0.18-0.18-0.43-0.23-0.61-0.41 74.29-83.46 119.86-193 119.86-313.29C956.44 223.83 744.61 12 484.22 12S12 223.83 12 484.22s211.83 472.22 472.22 472.22c120.27 0 229.83-45.57 313.29-119.86 0.17 0.18 0.23 0.43 0.41 0.61l166.67 166.67a27.77 27.77 0 0 0 39.28-39.28z m-519.64-63.69C254.47 900.89 67.56 714 67.56 484.22S254.47 67.56 484.22 67.56s416.67 186.9 416.67 416.67S714 900.89 484.22 900.89z" p-id="2824"></path>
                    </svg>
                </a>
            </header>
        </div>
    </div>
</template>

<script>
import axios from 'utils/http'

export default {
  data() {
    return {
      seen: true,
      city: [],
      otherCity: [],
      hash:''
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
    console.log()
  },
  created(){
      this.hash = this.$route.query.address === undefined ? document.cookie.split("=")[1] : this.$route.query.address 
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.header
    .logo-header
        height 0.44rem
        background white
        display flex
        border 0 0 1px 0, #b3b3b3
        z-index 1
        h1
            display flex
            width 0.82rem
            font-size 0.22rem
            font-weight 900
            line-height 0.44rem
            margin-left 0.12rem
            margin-right 0.1rem
            .logoo
                width 0.33rem
                height 0.33rem
                line-height 0.4rem
                img
                    width 0.3rem
                    height 0.3rem
            .logo
                color black !important
        .city
            line-height 0.44rem
            color black !important
        .operate
            width 0.49rem
            height 0.44rem
            text-align center
            line-height 0.55rem
        .uc
            position absolute
            top 0
            right 0
        .search
            position absolute
            top 0
            right 0.49rem
</style>

