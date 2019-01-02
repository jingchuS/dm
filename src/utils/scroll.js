import BScroll from 'better-scroll'
import axios from 'utils/http'
export const scroll = ({
    el,
    url1,
    url2,
    url3,
    url4,
    data,
    vm
}) => {
    // 声明 BScroll
    let bscroll = new BScroll(el, {
        probeType: 1,
        pullUpLoad: {
            threshold: 50
        },
        click: true
    })
    var count = 2
    // watch一下  pullingup
    bscroll.on('pullingUp', async () => {
        count++
        // 做分页的ajax请求
        let result = await axios({
            method: 'get',
            url:url3+url4+url1+count+url2
        })

        data.push(...result.data)
        // $nextTick  保证了本次refresh会拿到渲染后的 doumilist
        vm.$nextTick(() => {
            bscroll.refresh()
            bscroll.finishPullUp()
        })
    })
    
    // let method = () => {
    //     if (bscroll.y < -3000) {
    //         console.log(bscroll.y)
    //     }
    // }

    // console.log(bscroll.y)
}
