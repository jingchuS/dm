<template>
    <div class="home-hsalary">
        <div class="mod-column-head com-border-bottom">
            <h2 class="mod-column-title"><span>一</span>&nbsp;&nbsp;高薪职位</h2>
            <router-link to='/Hsalarymore' tag='p' class='active'>更多 ></router-link>
        </div>
        <div class="mod-Hsalary">
            <renqi :item='item' v-for="item of doumilist" :key="item.id"></renqi>
        </div>
    </div>
</template>

<script>
    import renqi from 'components/doumi-list/doumiList'
    export default {
        props:{
            salary:Object
        },
        components: {
            renqi
        },
        computed: {
            doumilist () {
                return this.salary && this.salary.data.splice(12,5) || []
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/border.styl'
    .mod-column-head
        display flex
        height 0.46rem
        justify-content space-between
        padding 0 0.12rem
        line-height 0.46rem
        border 0 0 2px 0,#efefef
        margin-top .12rem
        background white
        h2
            font-size 0.14rem
            font-weight 400 !important
            span
                font-weight 900
                color #ffd54c
        a
            color #888888
            font-size 0.14rem
    .mod-Hsalary 
        background white    
        height 4.9rem    
</style>
