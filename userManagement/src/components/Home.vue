<template>
  <div id="Home" class="container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" v-model.trim="search" class="form-control" placeholder="搜索"/>
    <br>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in filterCustomers">
        <td>{{customer.name}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.email}}</td>
        <td>
          <router-link :to="'/detail/'+customer.id" tag="button">详情</router-link>
        </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: "Home",
    data() {
      return {
        "customers": [],
        alert:"",
        search:""
      }
    },
    methods: {
      fetchCustomers() {
        this.$http.get("/users")
          .then((data) => {
            // console.log(data.data);
            this.customers = data.data
          })
      }
    },
    computed:{
      filterCustomers:function () {
        return this.customers.filter((customer)=>{
          return customer.name.toLowerCase().replace(/\s*/g, "").match(this.search.toLowerCase().replace(/\s*/g, ""))
            ||customer.phone.toLowerCase().replace(/\s*/g, "").match(this.search.toLowerCase().replace(/\s*/g, ""))
            ||customer.email.toLowerCase().replace(/\s*/g, "").match(this.search.toLowerCase().replace(/\s*/g, ""));
        })
      }
    },
    created() {
      if (this.$route.query.alert) {
        this.alert=this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated(){
      this.fetchCustomers();
    },
    components:{
      Alert
    }
  }
</script>

<style scoped>

</style>
