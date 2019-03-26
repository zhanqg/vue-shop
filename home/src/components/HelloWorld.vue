<template>
  <div class="hello">
    <!--<input type="radio" name="hahaha">-->
    <!--<input type="input" :value="msg" @input="msg=$event.target.value">-->
    <!--<input type="input" @input="msg=$event.target.value">-->
    <br>
    <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1714051576&site=qq&menu=yes">
      <img border="0" src="http://wpa.qq.com/pa?p=2:1714051576:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>
    </a>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  font-size: 20px;
  span{
    color: red;
  }
}
</style>
