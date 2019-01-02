<template>
    <div class="product">
        <div class="product-detail bc-main">
            <h1 class="product-title">{{ dataItem.title }}</h1>
            <div class="product-info">
                <div class="product-price"><b>{{ dataItem.salary }}</b>&nbsp;元 / {{ dataItem.salary_type_str }}</div>
                <div class="product-meta">
                    <span class="fl line">{{ dataItem.payment_type_str }} 丨</span>
                    <span class="fl line">{{ dataItem.wap_pc_work_date }} 丨</span>
                    <span class="fl line">666人</span>
                </div>
                <ul class="product-topic mod-list">
                    <li class="mod-list-item">
                        <a href="javascript:;" class="mod-list-info">
                            <i><svg t="1542186014228" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="950" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30">
                                    <path d="M469.333333 682.666667h85.333334v128h-85.333334zM435.2 810.666667h153.6c4.693333 0 8.533333 3.84 8.533333 8.533333v34.133333h-170.666666v-34.133333c0-4.693333 3.84-8.533333 8.533333-8.533333z" fill="#D3D3D3" p-id="951"></path>
                                    <path d="M384 853.333333h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H341.333333v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z" fill="#B8B8B8" p-id="952"></path>
                                    <path d="M213.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256H213.333333zM170.666667 213.333333h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333zM725.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256h-85.333334z m-42.666666-42.666667h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333z" fill="#D3D3D3" p-id="953"></path>
                                    <path d="M298.666667 85.333333h426.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a256 256 0 1 1-512 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z" fill="#D3D3D3" p-id="954"></path>
                                    <path d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.157333 111.701333z" fill="#F0F0F0" p-id="955"></path>
                                </svg></i>人气职位</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-summary mod-column bc-main com-space">
            <div class="mod-column-head">
                <h2 class="mod-column-title">职位描述</h2>
            </div>
            <div class="mod-column-body">
                <div class="product-text mod-flexible-body">
                    <div class="product-tag tag-text">
                        <span class="product-tag-item">20-50岁</span>
                        <span class="product-tag-item">{{ dataItem.gender_str }}</span>
                        <span class="product-tag-item">大专及以上</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-welfare mod-column bc-main com-border-top">
            <div class="mod-column-head">
                <h2 class="mod-column-title">薪资福利</h2>
            </div>
            <div class="mod-column-body">
                <div class="product-tag">
                    <span class="product-tag-item active"><i><svg t="1542195102946" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="754" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30">
                                <path d="M606.523077 354.461538 606.523077 354.461538l86.646154 0L512 527.753846 417.476923 425.353846l0 0c-15.753846-15.753846-31.507692-15.753846-47.261538 0L204.8 590.769231C189.046154 606.523077 189.046154 630.153846 204.8 638.030769c15.753846 15.753846 31.507692 15.753846 47.261538 0l141.784615-141.784615 102.4 102.4c15.753846 15.753846 31.507692 15.753846 47.261538 0l196.923077-196.923077 0 86.646154c0 15.753846 15.753846 31.507692 31.507692 31.507692 15.753846 0 31.507692-15.753846 31.507692-31.507692L803.446154 322.953846l0 0c0-15.753846-15.753846-31.507692-31.507692-31.507692l0 0 0 0 0 0 0 0 0 0 0 0L606.523077 291.446154C582.892308 283.569231 567.138462 299.323077 567.138462 315.076923 567.138462 338.707692 582.892308 354.461538 606.523077 354.461538" p-id="755"></path>
                                <path d="M512 56.073925c-228.430769 0-417.476923 189.046154-417.476923 425.353846 0 236.307692 189.046154 425.353846 417.476923 425.353846s417.476923-189.046154 417.476923-425.353846C929.476923 245.120079 740.430769 56.073925 512 56.073925M512 961.920079c-259.938462 0-472.615385-212.676923-472.615385-480.492308C39.384615 221.48931 252.061538 0.935463 512 0.935463c259.938462 0 472.615385 212.676923 472.615385 480.492308C984.615385 749.243156 771.938462 961.920079 512 961.920079" p-id="756"></path>
                            </svg></i>有提成</span>
                </div>
                <div class="product-remark">
                    <p>{{ dataItem.payment_type_str }}，{{ dataItem.salary }}元/{{ dataItem.salary_type_str }}．</p>
                </div>
            </div>
        </div>
        <div class="product-worktime mod-column bc-main com-space">
            <div class="mod-column-head">
                <h2 class="mod-column-title">工作时间</h2>
            </div>
            <div class="mod-column-body">
                <div class="product-dlist mod-flex">
                    <div class="product-dlist-dt">开始日期&nbsp;&nbsp;<i><svg t="1542189215857" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14">
                                <path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z" fill="#f60" p-id="4308"></path>
                            </svg>&nbsp;&nbsp;</i></div>
                    <div class="product-dlist-dd mod-flex-item">
                        <p><b>2018.06.20</b></p>
                    </div>
                </div>
                <div class="product-mod-flex">
                    <dl class="mod-flex">
                        <dt>白班</dt>
                        <dd class="mod-flex-item">
                            <span>09:00~18:00&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>09:00~18:00</span>
                        </dd>
                    </dl>
                </div>
                <div class="product-dlist mod-flex">
                    <div class="product-dlist-dt">结束日期&nbsp;&nbsp;<i><svg t="1542189215857" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14">
                                <path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z" fill="#f60" p-id="4308"></path>
                            </svg>&nbsp;&nbsp;</i></div>
                    <div class="product-dlist-dd mod-flex-item">
                        <p><b>{{ dataItem.deadline }}</b></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="white"></div>
        <div class="product-footer">
            <div class="share"><i><svg t="1542195654250" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="784" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18">
                        <path d="M836.472331 511.836178c0 178.767306-145.437791 324.205097-324.205097 324.205097s-324.203049-145.438815-324.203049-324.205097c0-171.644136 134.093142-313.813685 305.275505-323.661414l-1.600333-27.830227c-185.916073 10.695506-331.55045 165.089222-331.55045 351.491641 0 47.524661 9.311213 93.634313 27.673572 137.050123 17.733694 41.92708 43.117859 79.579439 75.448062 111.908618 32.330203 32.330203 69.981538 57.714368 111.908618 75.448062 43.414786 18.364407 89.525461 27.673573 137.050123 27.673572 47.524661 0 93.634313-9.310189 137.050122-27.673572 41.92708-17.73267 79.579439-43.116835 111.908618-75.448062 32.330203-32.329179 57.714368-69.981538 75.448062-111.908618 18.363383-43.414786 27.673573-89.525461 27.673573-137.050123h-27.877326z" fill="black" p-id="785"></path>
                        <path d="M487.267026 495.209305l19.314573 20.098868 318.426288-306.00963v169.190906h27.875278V162.452717H635.044395v27.875278h169.473499z" fill="black" p-id="786"></path>
                    </svg></i>分享</div>
            <div class="enroll">报名参加</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['dataItem'])
  },
  mounted() {
    console.log(this.dataItem)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
.product
    background #f7f7f7
    overflow-y auto
    height 6.22rem
    width 100%
.product-detail
    width 100%
    height 1.61rem
    padding 0.2rem
    background white
    .product-title
        font-size 0.22rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .product-info
        position relative
        .product-price
            width 2.15rem
            height 0.32rem
            color #f60
            margin-top 0.1rem
            b
                font-size 0.24rem
                font-weight 700
                line-height 0.32rem
                margin-right 0.04rem
                color #F60
        .product-meta
            margin-top 0.05rem
            span
                color #404040
                font-size 0.12rem
        .mod-list
            position absolute
            top 0.04rem
            right -0.08rem
            overflow hidden
            li
                a
                    display block
                    width 0.56rem
                    height 0.56rem
                    color #999
                    font-size 0.1rem
                    line-height 0.18rem
                    text-align center
                    margin-left 0.04
                    padding-top 0rem
                    i
                        display block
                        margin 0 auto 0rem
.product-summary
    width 100%
    height 3.36rem
    background white
    margin-top 0.2rem
    padding 0.2rem
    .mod-column-head
        height 0.39rem
        h2
            color #404040
            font-size 0.16rem
            font-weight 700
            line-height 0.24rem
            padding 0 0 0.15rem
    .mod-column-body
        .product-text
            color #808080
            font-size 0.14rem
            line-height 0.22rem
            .product-tag
                margin-right -0.2rem
                overflow hidden
                span  
                    float: left
                    width: auto
                    background-color #f7f7f7
                    line-height 0.22rem
                    padding 0.02rem 0.06rem
                    margin 0.12rem 0.12rem 0 0;
                    font-size 0.12rem
                    color #434244
.product-welfare
    width 100%
    height 2.12rem
    background white
    border 1px 0 0 0, #ccc
    padding 0.2rem
    .mod-column-head
        position relative
        color #404040
        font-size 0.16rem
        font-weight 700
        line-height 0.24rem
        padding 0 0 0.15rem
    .mod-column-body
        .product-tag
            margin-left -0.2rem
            margin-right -0.2rem
            overflow hidden
            .product-tag-item
                float left
                box-sizing border-box
                width 20%
                color #404040
                font-size 0.1rem
                line-height 0.18rem
                text-align center
                margin-top 0.12rem
                i
                    display block
                    margin 0 auto 0.08rem
                    font-weight 200
        .product-remark
            background-color rgba(229, 229, 229, 0.3)
            color #808080
            line-height 0.22rem
            padding 0.12rem
            margin-top 0.2rem
.product-worktime
    width 100%
    height 1.98rem
    background white
    margin-top 0.2rem
    padding 0.2rem
    .mod-column-head
        position relative
        padding 0.12rem
        overflow hidden
        .mod-column-title
            position relative
            color #404040
            font-size 0.16rem
            font-weight 700
            line-height 0.24rem
            padding 0 0 0.15rem
    .mod-column-body
        padding-left 0.1rem
        .product-dlist
            margin 0.06rem 0
            .product-dlist-dt
                color #999
                font-weight 700
                float left
            .product-dlist-dd
                position relative
                color #999
                font-size 0.12rem
                line-height 0.2rem
                padding-left 0.26rem
        .product-mod-flex
            height 0.5rem
            padding-top 0.1rem
            padding-left 0.8rem
            dt
                font-size 0.12rem
                color #999
            dd
                font-size 0.12rem
                color #999
.product-footer
    width 100%
    height 0.5rem
    position fixed !important
    bottom 0
    z-index 1
    background white
    border 1px 0 0 0, #ccc
    .share
        width 0.93rem
        height 0.5rem
        float left
        text-align center
        line-height 0.5rem
        font-size 0.15rem
        i
            vertical-align -0.04rem
            margin-right 0.04rem
    .enroll
        float left
        height 0.5rem
        width 2.82rem
        background #fc0
        text-align center
        line-height 0.5rem
        font-size 0.15rem
.white
    width 100%
    height 0.5rem
    background white
</style>

