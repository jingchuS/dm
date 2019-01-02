<template>
    <div>
        <div class="mod-slider">
            <mt-swipe :auto="2000" :defaultIndex="0" class="mod-swipe">
                <mt-swipe-item class="mt-swipe-item"><a href=""><img src="//cdn.doumistatic.com/25,3b8fb1cd8cae0f.jpg" alt=""></a></mt-swipe-item>
                <mt-swipe-item class="mt-swipe-item"><a href=""><img src="//cdn.doumistatic.com/128,0114f50f7b6a7022.jpeg" alt=""></a></mt-swipe-item>
            </mt-swipe>
        </div>
        <nav class="mod-nav mod-flex bc-main com-border-bottom">
            <a href="/rqmore" class="mod-nav-item mod-flex-item"><div><img src="//sta.doumistatic.com/src/image/jianzhi/mobile/c/wap/v2/nav_total.png" alt=""></div>全部职位</a>
            <a href="javascript:;" class="mod-nav-item mod-flex-item"><div><img src="//sta.doumistatic.com/src/image/jianzhi/mobile/c/wap/v2/nav_danbao_qy.png" alt=""></div>企业担保</a>
            <a href="javascript:;" class="mod-nav-item mod-flex-item"><div><img src="//sta.doumi.com/src/image/jianzhi/mobile/c/wap/v2/nav_location.png" alt=""></div>附近职位</a>
            <a href="javascript:;" class="mod-nav-item mod-flex-item"><div><img src="//sta.doumistatic.com/src/image/jianzhi/mobile/c/wap/v2/nav_cpy.png" alt=""></div>日结职位</a>
        </nav>
        <div class="project bc-main com-border-bottom">
            <ul class="mod-list">
                <li class="mod-list-item com-border-right">
                    <a href="javascript:;" class="mod-list-info"><img src="//cdn.doumistatic.com/24,3f79fa840ea535.jpg" alt=""></a>
                </li>
                <li class="mod-list-item com-border-right">
                    <a href="javascript:;" class="mod-list-info"><img src="//sta.doumistatic.com/src/image/jianzhi/mobile/banner/subject_tegong.png" alt=""></a>
                </li>
            </ul>
        </div>
        <div class="project bc-main com-border-bottom">
            <ul class="mod-list">
                <li class="mod-banner">
                    <a href="javascript:;" class="mod-list-info"><img src="//cdn.doumistatic.com/29,4db7d908e3d35e.png"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'

export default {
    components:{
        "mt-swipe":Swipe,
        "mt-swipe-item":SwipeItem
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/reset.styl'
@import '~styles/border.styl' 
.mod-slider 
    .mod-swipe 
        width 100% 
        height 1.25rem
        .mt-swipe-item
            a
                img 
                    width 100% 
                    height 1.25rem    
.mod-nav
    display flex 
    width 100%
    height 0.81rem
    flex 1
    justify-content space-around
    background white
    border 0 0 1px 0,#dadada
    .mod-nav-item
        display flex
        height .81rem
        width 25%
        font-size .12rem 
        color #404040 !important
        flex-direction column
        justify-content space-around
        text-align center
        div 
            display flex
            justify-content center
            img
                width 0.35rem
                height 0.35rem          
.bc-main 
    .mod-list 
        display flex
        justify-content space-around
        .mod-list-item
            display flex
            .mod-list-info   
               height 0.64rem 
               img 
                  height 0.64rem
.com-border-bottom
   width 100% 
   .mod-list 
       width 100% 
       .mod-banner 
           border 1px 0 0 0,#dadada
           width 100% 
           list-style none !important
           img 
               width 100% 
               height .64rem
</style>
