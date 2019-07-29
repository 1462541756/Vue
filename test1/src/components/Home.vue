<template>
  <div id="total" class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你非常喜欢的pizza！</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      goToMenu: function () {
        //跳转到上次的页面
        // this.$router.go(-1);

        //指定跳转地址
        // this.$router.replace('/menu');

        //指定跳转路由名字
        this.$router.replace({name:'menuLink'});

        //通过push进行跳转
        // this.$router.push('/menu');
        // this.$router.push({name:'menuLink'});

      }

    }
  }
</script>

<style scoped>
  #home {
    background: url('../assets/background.jpg') no-repeat fixed center #CCCCCC;
    background-size: cover;
    height: 85vh;

    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background: #eee;
    opacity: 0.8;
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
  }
  #total{
    margin: 0;
  }
</style>
