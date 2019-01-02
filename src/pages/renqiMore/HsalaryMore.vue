<template>
    <div>
        <div>
            <titleMore></titleMore>
        </div>
        <div class="main-position">
            <renqiMore :inTheater='inTheater'></renqiMore>
        </div>
    </div>
</template>

<script>
import titleMore from 'components/common-more/titleMore'
import renqiMore from 'pages/renqiMore/doumi-Hsalary-main'
import axios from 'utils/http'
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      inTheater: null
    }
  },
  components: {
    renqiMore,
    titleMore
  },
  async beforeCreate() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    let result = await axios({
      method: 'get',
      url:
        'list/more/?order=3&lat=&lng=&more=a&pageSize=10&interface%5Buuid%5D=2c0b3fbc-df62-11e8-8b1e-1418774d6214&interface%5Breqid%5D=bd87e6a32c8d62b8cb897e7f38b8a7f5&interface%5Blat%5D=&interface%5Blng%5D=&offset=1&page=2&pageSize=10'
    })
    this.inTheater = result
    Indicator.close()
  }
}
</script>

