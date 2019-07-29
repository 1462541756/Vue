<template>
  <h1>Admin</h1>
</template>

<script>
  export default {
    name: "Admin",
    data() {
      return {
        name: 'Henry'
      }
    },
    //组件内守卫（进入前）
    /*beforeRouteEnter:(to,from ,next)=>{
        // alert("hello "+this.name);
        // next();

      //next回调函数
      next(vm=>{
        alert('Hello '+vm.name);
      });
    },*/

    //组件内守卫（离开前）
   /* beforeRouteLeave: (ro, from, next) => {
      if (confirm("确定离开吗？") == true) {
        next();
      }else {
        next(false);
      }
    }*/
  }
</script>

<style scoped>

</style>
