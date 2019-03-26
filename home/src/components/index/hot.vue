<template>
    <div class="hot-contain">
      <div class="hot-title common-index-title-font flex-around">热销商品</div>
      <div class="content">
        <div class="flex-around content-item">
          <div class="item-left">
            <div class="common-font16 sub-title">新鲜水果</div>
            <div class="big flex-around">
              <img src="../../assets/img/1.jpg" alt="">
            </div>
            <span>怎么，想吃铁疙瘩嘛骂骂骂骂骂骂澳门妈妈妈妈</span><br>
            <span class="common-font14">￥123</span><br/><span class="common-font14">销量：221</span>
          </div>
          <div class="item-right">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
        </div>
          <!--<button v-on:click="test">1111</button>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "hot",
      methods:{
        test:function () {
          // this.axios.get('http://127.0.0.1:8090/user/reg')
          //   .then(function (res) {
          //     console.log(res);
          //   })
          this.axios.post('http://127.0.0.1:8090/user/reg')
            .then((ress)=>{
                console.log(ress)
              })
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/css/common.scss";
  .hot-contain{
    width: 100%;
    /*background: white;*/
    .hot-title{
      width: 100%;
      height: .3rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background: white;
    }
    .content{
      //border: 1px red solid;
      background: white;
      margin-top: 1px;
      .content-item{
       width: 3.75rem;
       // height: 1.5rem;
        .big{
          width: 100%;
        }
      }
    }
  }
    .item-left{
      width: 50%;
      border-right: 0.5px $bgcolor solid;
      .sub-title{
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        color: $indexsubtitle;
      }
      img{

        width: 95%;
        height: 2rem;
        border-radius: 5px;
      }

        span{
          width:95%;
          display: inline-block;
          margin: 0 auto;
        }


  }
  .item-right{
     width: 50%;
     height: 20px;
     border: 1px seagreen solid;
   }
</style>
