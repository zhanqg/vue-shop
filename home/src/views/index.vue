<template>
  <div class="contain">
    <div class="search flex-around">
      <!--<input type="text" placeholder="请输入搜索的内容">-->
      <el-input
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
        v-model="searchText">
      </el-input>
    </div>
    <div style="height: 0.35rem"></div>
    <banner></banner>
    <div class="nav flex-around" >
      <div class="nav-item" v-for="(item,index) in classList">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href=item.img></use>
        </svg>
        <div class="common-font">{{item.name}}</div>
      </div>
    </div>
    <hot></hot>
  </div>

</template>

<script>
  import Hwd from "../components/HelloWorld"
  import banner from "../components/common/headBanner"
  import hot from "../components/index/hot"
  import cheap from "../components/index/cheap"
  import newshop from "../components/index/newshop"
    export default {
        name: "index",
      data(){
          return{
            value:1,
            classList:[{img:'#icon-shengnvguo',name:'新鲜果蔬'},
              {img:'#icon-kouqianghuli',name:'日用百货'},
              {img:'#icon-jiu1',name:'中外名酒'},
              {img:'#icon-naizhipin',name:'营养奶品'},
              {img:'#icon-lingshi',name:'休闲零食'},
            ],
            searchText:''
        }
      },
      components:{
          Hwd,
        banner,
        hot,
        cheap,
        newshop
      }
    }
</script>
<style>
.swiper-pagination-bullet-active{
  background: chocolate;
}
  .search .el-input__inner{
    width: 3.75rem;
    border-radius: .15rem;
    height: .3rem;
  }
  .search .el-input__icon{
    line-height: .3rem;
  }
</style>
<style scoped lang="scss">
  @import "../assets/css/common.scss";
  .contain{
    margin: 0;
    padding: 0;
    width: 3.75rem;
    background: $bgcolor;
    .search{
      width: 100%;
      height: .35rem;
      position: fixed;
      top: 0;
      z-index: 999;
      background: $bgcolor;
      input{
        -web-kit-appearance:none;
        -moz-appearance: none;
        outline: 0;
        width: 3.65rem;
        height: .3rem;
        border-radius: .15rem;
        border: 1px #999 solid;
        font-size: 0.16rem;
      }
    }

    .nav{
      margin: 20px auto;
      width: 3.45rem;
      height: 1rem;
      //border: 1px red solid;
      background: white;
      border-radius: 10px;
      box-shadow: 0.8vw 1.067vw 5.333vw rgba(45,45,45,.15);
      .nav-item{
        width: 20%;
        height: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg{
          width: .5rem;
          height: .5rem;
        }
      }

      /*background: red;*/
    }
  }
</style>
