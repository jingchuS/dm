<template>
    <div>
        <ul class="doumilist">
            <li class="mod-list-item com-border-bottom" @click="detailBut" :dataItem="dataItem">
                <a class="product-info mod-list-info">
                    <h3 class="product-title">
                        <span><i class="icon icon-remen"></i>{{ item.title }}</span>
                    </h3>
                    <div class="product-meta">
                        <span class="fl fc-gray">
                            <svg t="1541330360016" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823" xmlns:xlink="http://www.w3.org/1999/xlink" width="9" height="9">
                                <path d="M512 12c-199.11 0-361.11 162-361.11 361.11 0 191.45 325.36 610.46 339.22 628.2a27.76 27.76 0 0 0 43.78 0c13.86-17.74 339.22-436.75 339.22-628.2C873.11 174 711.11 12 512 12z m0 926.54C409.87 803.08 206.44 505.87 206.44 373.11c0-168.48 137.08-305.55 305.56-305.55s305.56 137.07 305.56 305.55c0 132.76-203.43 429.97-305.56 565.43z" p-id="2824"></path>
                                <path d="M512 178.67c-107.2 0-194.44 87.23-194.44 194.44S404.8 567.56 512 567.56s194.44-87.23 194.44-194.44S619.2 178.67 512 178.67zM512 512c-76.58 0-138.89-62.31-138.89-138.89S435.42 234.22 512 234.22s138.89 62.31 138.89 138.89S588.58 512 512 512z" p-id="2825"></path>
                            </svg> {{ item.post_area }}&nbsp;&nbsp;&nbsp;
                        </span>
                        <span class="fl fc-gray"><svg t="1541330537823" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2823" xmlns:xlink="http://www.w3.org/1999/xlink" width="9" height="9">
                                <path d="M512 12C236.31 12 12 236.3 12 512s224.31 500 500 500 500-224.3 500-500S787.69 12 512 12z m0 944.44C266.94 956.44 67.56 757.06 67.56 512S266.94 67.56 512 67.56 956.44 266.94 956.44 512 757.06 956.44 512 956.44z" p-id="2824"></path>
                                <path d="M762 484.22H539.78v-250a27.78 27.78 0 1 0-55.56 0V512A27.77 27.77 0 0 0 512 539.78h250a27.78 27.78 0 0 0 0-55.56z" p-id="2825"></path>
                            </svg>&nbsp;{{ item.date }}
                        </span>
                    </div>
                    <div class="product-meta negotiable">
                        <span class="fl"><b class="fc-red">{{ item.salary }}</b>元/{{ item.salary_type_str }}</span>
                        <span class="fl line">&nbsp;丨&nbsp;{{ item.payment_type_str }}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    item: Object
  },
  data() {
    return {
      dataItem: {}
    }
  },
  methods: {
    detailBut() {
      this.dataItem = this.item
      this.$store.commit('changeItem',this.dataItem)
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.doumilist
    display flex
    overflow hidden
    height 100%
    .mod-list-item
        display flex
        width 100%
        height 0.98rem
        padding 0.12rem 0 0 0.12rem
        border 1px 0 0px 0, #ccc
    a
        h3
            font-size 0.16rem
            line-height 0.24rem
            color black
        .product-meta
            color #808080
            font-size 0.12rem
            line-height 0.2rem
            margin-top 0.02rem
        .negotiable
            line-height 0.2rem
            margin-top 0.05rem
            span
                color #404040
                font-size 0.13rem
                b
                    color #f60
</style>
