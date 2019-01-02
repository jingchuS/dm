<template>
    <div>
        <div class="mod-gotop js-touch-state active" v-show="seen" id="#mod-gotop" @click="goTop">
            <svg t="1541590767490" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="840" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
                <path d="M94.408039 491.009382a73.112568 73.112568 0 0 0 103.819846 0L438.768233 249.737909V950.887432a73.112568 73.112568 0 0 0 146.225135 0V249.737909l240.540347 241.271473a73.112568 73.112568 0 0 0 103.819846-103.819846l-365.562838-365.562838a73.112568 73.112568 0 0 0-103.819846 0l-365.562838 365.562838a73.112568 73.112568 0 0 0 0 103.819846z" fill="#d9d9d9" p-id="841"></path>
            </svg></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true
    }
  },
  methods: {
    goTop() {
      console.log(1)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.mod-gotop
    position absolute
    top 5.8rem
    right 0.1rem
    width 0.34rem
    height 0.34rem
    border-radius 50%
    text-align center
    padding-top 0.06rem
    background-color rgba(0, 0, 0, 0.3)
</style>
