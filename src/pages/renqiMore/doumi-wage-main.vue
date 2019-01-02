<template>
    <div id="mod-scroll">
        <div class="mod-renqi">
            <renqi :item='item' v-for="item of doumilist" :key="item.id"></renqi>
            <div :class="isSeen?'mask':''"></div>  
        </div>
    </div>
</template>

<script>
import renqi from 'components/doumi-list/doumiList'
import { mapState } from 'vuex'
import { scroll } from 'utils/scroll'
export default {
  props: {
    inTheater: Object
  },
  data() {
    return {
      doumilist: []
    }
  },
  components: {
    renqi
  },
  computed:{
    ...mapState(['isSeen'])
  },
  watch: {
    //  1、监听父组件二次传过来的新值
    //  2、一步准备更新doumilist，因此必须让doumilist重新赋值 
    inTheater() {
      this.doumilist = this.inTheater && this.inTheater.data || []
      scroll({
          el:'#mod-scroll',
          url1:'list/more/?order=0&lat=&lng=&more=ad&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=e69ddb1901d26015d67e1e38dad1fc27&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=',
          url2:'&pageSize=10',
          url3:'',
          url4:'',
          data:this.doumilist,
          vm:this
      })
    }
  },

  mounted() {}
}
</script>

<style lang="stylus" scoped>
#mod-scroll
  height 5.89rem
  .mask 
    position fixed 
    left 0 
    top 0 
    z-index 10 
    width 100% 
    height 100% 
    background-color: rgba(0,0,0,0.4)
</style>
