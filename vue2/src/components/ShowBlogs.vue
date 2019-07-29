<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model.trim="search" placeholder="搜索">
    <div v-for="(blog,index) in filteredBlogs" :key="blog.title+index" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.content | snippet}}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowBlogs",
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    methods: {},
    /*创建前操作*/
    created() {
      /*this.$http.get("/posts.json")
        .then(function (data) {
          // console.log(data.json());
          return data.json();
        })
        .then(function (data) {
          var blogsArray=[];
          for (let key in data ){
            // console.log(key);
            // console.log(data[key]);
            data[key].id=key;
            blogsArray.push(data[key])
          }

          this.blogs=blogsArray;
          // console.log(this.blogs);
        });*/

      this.$http.get("/posts.json")
        .then(function (data) {
          // console.log(data.data);
          return data.data;
        })
        .then((data)=> {
          var blogsArray=[];
          for (let key in data ){
            // console.log(key);
            // console.log(data[key]);
            data[key].id=key;
            blogsArray.push(data[key])
          }

          this.blogs=blogsArray;
          // console.log(this.blogs);
        });
    },
    computed: {
      /*过滤器*/
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.toLowerCase().replace(/\s*/g, "").match(this.search.toLowerCase().replace(/\s*/g, ""));
        })
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  }
</script>

<style scoped>
  #show-blogs {
    /*max-width: 800px;*/
    margin: 0 auto;
    background: #f9f9f9;
    padding: 20px;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px solid #aaa;
  }
  #show-blogs a{
    color: #444;
    text-decoration: none;
  }
  input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
