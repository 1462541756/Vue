<template>
  <div class="add container">
    <h1 class="page-header">添加用户</h1>

    <Alert v-on:changeMessage="change" v-if="alert" :message="alert"></Alert>
    <form v-on:submit="addCustomer">
      <div class="well">
        <!--<h4>用户信息</h4>-->
        <div class="form-group">
          <label for="name">姓名</label>
          <input id="name" type="text" class="form-control" placeholder="姓名" v-model="customer.name">
        </div>
        <div class="form-group">
          <label for="age">年龄</label>
          <input id="age" type="text" class="form-control" placeholder="年龄" v-model="customer.age">
        </div>
        <div class="form-group">
          <label for="phone">电话</label>
          <input id="phone" type="text" class="form-control" placeholder="电话" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input id="email" type="text" class="form-control" placeholder="邮箱" v-model="customer.email">
        </div>
        <div class="form-group">
          <label for="education">学历</label>
          <input id="education" type="text" class="form-control" placeholder="学历" v-model="customer.education">
        </div>
        <div class="form-group">
          <label for="school">毕业学校</label>
          <input id="school" type="text" class="form-control" placeholder="毕业学校" v-model="customer.school">
        </div>
        <div class="form-group">
          <label for="profession">职业</label>
          <input id="profession" type="text" class="form-control" placeholder="职业" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label for="profile">个人简介</label>
          <br>
          <textarea id="profile" class="form-control" placeholder="个人简介" rows="10" v-model="customer.profile"></textarea>
        </div>
        <br>
        <button type="submit" class="btn btn-primary  action">添加</button>
        <br>
        <br>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: "Add",
    data() {
      return {
        customer: {},
        alert:''
      }
    },
    components:{
      Alert
    },
    methods: {
      change(){
        this.alert='';
        // console.log(this.alert)
      },
     addCustomer(e) {
        console.log(e);
       console.log(this.alert);
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          this.alert="姓名|电话|邮箱为必填选项";
        } else {
          let newCustomer = {
            name: this.customer.name,
            age: this.customer.age,
            phone: this.customer.phone,
            email: this.customer.email,
            education: this.customer.education,
            school: this.customer.school,
            profession: this.customer.profession,
            profile: this.customer.profile,
          };
          console.log(newCustomer);
          this.$http.post("/users", newCustomer)
            .then((response) => {
              // console.log(response);
              this.$router.push({path:"/",query:{alert:"用户信息添加成功！"}});
            });
          e.preventDefault();
        }
        e.preventDefault();
      }
    }, created() {
    }
  }
</script>

<style scoped>
  .well{
  padding: 20px;
  background: #eee;
  }
  .action{
    float: right;
    margin-right: 20px;
  }
</style>
