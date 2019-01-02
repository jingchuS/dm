<template>
    <div>
        <footer class="mod-footer">
            <nav class="footer-nav multi-nav">
                <a href="//down.doumi.com/appdl/?from=doumi&amp;ca_from=appdl_m_dm_index_bottom" class="nav-item" target="_blank "><div class="logoo"><img src="http://sta.doumistatic.com/src/image/logo_doumi.png" alt=""></div><i class="icon icon-app"></i>斗米APP下载<small>工资极速提现</small></a>
                <a href="tel:010-57977077" class="nav-item"><div class="logoo"><img src="http://sta.doumistatic.com/src/image/logo_doumi.png" alt=""></div><i class="icon icon-tel"></i>010-57977077<small>商家合作热线</small></a>
            </nav>
            <p class="footer-cp footer-doumi"><span>©2015-2018 斗米™ 北京世诚优聘科技发展有限公司</span></p>
            <p class="footer-cp">京ICP备15058775号-1</p>
        </footer>
    </div>
</template>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.mod-footer
    display flex
    height 1.68rem
    position relative
    background #f7f7f7
    border 1px 0 0 0,#eee
    z-index 1
    nav
        display flex
        height 1.05rem
        text-align center
        justify-content space-around
        padding-top .2rem
        flex 1
        a
            display flex
            flex-direction column
            width 1.8rem
            height .81rem
            color #929292
            small
                color #a4a4a4
                font-size 0.12rem
        div
            display flex
            justify-content center
            width 100%
            height 100%
            text-align center
            img
                display flex
                justify-content center
                width 0.32rem
                height 0.32rem
    .footer-cp
        width 100%
        height 0.18rem
        font-size 0.12rem
        line-height 0.18rem
        text-align center
        position absolute
        bottom 0
    .footer-doumi
        position absolute
        bottom 0.18rem
</style>
