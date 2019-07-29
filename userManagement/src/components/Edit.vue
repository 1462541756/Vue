<template>
  <div class="edit container">
    <h1 class="page-header">信息修改</h1>
    <!--<hr>-->
    <Alert v-on:changeMessage="change" v-if="alert" :message="alert"></Alert>
    <form v-on:submit="editCustomer">
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
          <textarea id="profile" class="form-control" rows="10" v-model="customer.profile"></textarea>
          <br>
          <router-link to="/" class="btn btn-default action" tag="button">返回</router-link>
          <button type="submit" class="btn btn-primary  action" tag="button">保存</button>
          <br>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
  import Alert from "./Alert"
  export default {
    name: "Edit",
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
      fetchCustomer(id) {
        this.$http.get("/users/" + id)
          .then((data) => {
            // console.log(data.data);
            this.customer = data.data
          })
      },

      editCustomer(e){
        console.log(e);
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          // alert("姓名|电话|邮箱为必填选项");
          this.alert="姓名|电话|邮箱为必填选项";
        } else {
          let updateCustomer = {
            name: this.customer.name,
            age: this.customer.age,
            phone: this.customer.phone,
            email: this.customer.email,
            education: this.customer.education,
            school: this.customer.school,
            profession: this.customer.profession,
            profile: this.customer.profile,
          };
          console.log(updateCustomer);
          this.$http.put("/users/"+this.$route.params.id, updateCustomer)
            .then((response) => {
              // console.log(response);
              this.$router.push({path:"/",query:{alert:"用户信息修改成功！"}});
            });
          e.preventDefault();
        }
        e.preventDefault();
      }
    }, created() {
      this.fetchCustomer(this.$route.params.id);
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
