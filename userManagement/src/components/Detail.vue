<template>
    <div class="details container">
      <div class="glyphicon glyphicon-asterisk"></div>
      <router-link to="/" class="btn btn-default" tag="button">返回</router-link>
      <span class="pull-right action">
      <router-link class="btn btn-primary" :to="'/edit/'+customer.id" tag="button">编辑</router-link>
      <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
      <hr>
      <ul class="list-group">
        <li class="list-group-item">
          <h1 class="page-header">
            <img src="../assets/name.svg"/>
            {{customer.name}}
          </h1>
        </li>

      </ul>
      <hr>

      <ul class="list-group">
        <li class="list-group-item"><img src="../assets/phone.svg"/><span >{{customer.phone}}</span></li>
        <li class="list-group-item"><img src="../assets/email.svg"/><span >{{customer.email}}</span></li>
      </ul>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item"><img src="../assets/age.svg"/><span >{{customer.age}}</span></li>
        <li class="list-group-item"><img src="../assets/education.svg"/><span >{{customer.education}}</span></li>
        <li class="list-group-item"><img src="../assets/school.svg"/><span >{{customer.school}}</span></li>
        <li class="list-group-item"><img src="../assets/profession.svg"/><span >{{customer.profession}}</span></li>
        <li class="list-group-item"><img src="../assets/profile.svg"/><span >{{customer.profile}}</span></li>
      </ul>


    </div>
</template>

<script>
    export default {
        name: "Detail",
      data(){
       return{
         customer:{}
       }
      },
      methods:{
        fetchCustomer(id) {
          this.$http.get("/users/"+id)
            .then((data) => {
              // console.log(data.data);
              this.customer = data.data
            })
        },
        deleteCustomer(id){
          this.$http.delete("/users/"+id)
            .then(response=>{
              console.log(response.data);
              this.$router.push({path:'/',query:{alert:"用户删除成功！"}})
            })
        }
      },
      created(){
          this.fetchCustomer(this.$route.params.id);
      }
    }
</script>

<style scoped>
.action{
  float: right;
}
img{
  height: 30px;
  width: 40px;
}
</style>
