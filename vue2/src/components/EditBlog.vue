<template>
  <div id="eidt-blog">
    <h2>编辑博客</h2>
    <form v-if="!submitted">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea v-model="blog.content" required></textarea>
      <div id="checkboxes">
        <input id="Vue" type="checkbox" value="Vue.js" v-model="blog.categories"/>
        <label for="Vue"> Vue.js</label>

        <input id="Node" type="checkbox" value="Node.js" v-model="blog.categories"/>
        <label for="Node">Node.js</label>

        <input id="React" type="checkbox" value="React.js" v-model="blog.categories"/>
        <label for="React">React.js</label>

        <input id="Angular4" type="checkbox" value="Angular4.js" v-model="blog.categories"/>
        <label for="Angular4">Angular4.js</label>
      </div>
      <label>作者：</label>
      <select v-model="blog.author" required>
        <option v-for="author in authors" :key="author" selected="selected">
          {{author}}
        </option>
      </select>
      <button @click.prevent="post">保存博客</button>
    </form>
    <div v-if="submitted">
      <h3>您的博客编辑成功</h3>
    </div>
    <hr>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <article>{{blog.content}}</article>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "edit-blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
        authors: ['henry', 'tony', 'tom'],
        submitted: false
      }
    },
    methods: {
      fetchData() {
        /*this.$http.get('/posts/'+this.id+'.json')
          .then(function (data) {
            console.log(data.json());
            return data.json();
          })
          .then(function (data) {
            this.blog=data;
            // console.log(data);
          })*/
        this.$http.get('/posts/'+this.id+'.json')
          .then((data)=> {
            // console.log(data.data);
            this.blog=data.data;
          })
      },
      post: function () {
       /* this.$http.put('/posts/' + this.id + '.json', this.blog)
          .then(function (data) {
            // console.log(data);
            this.submitted = true;
          })*/

        this.$http.put('/posts/' + this.id + '.json', this.blog)
          .then( (data)=> {
            // console.log(data.data);
            this.submitted = true;
          })
      }
    },
    created(){
      this.fetchData();
    }
  }

</script>

<style scoped>
  #eidt-blog * {
    box-sizing: border-box;
  }

  #eidt-blog {
    margin: 0 auto;
    /*max-width: 600px;*/
    padding: 20px;
    background: #eee;

  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type='text'], textarea, select {
    width: 100%;
    padding: 8px;
    display: block;
  }

  textarea {
    height: 200px;
    resize: none;
  }

  #checkboxes label {
    display: inline-block;
    margin-top: 0;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3 {
    margin-top: 10px;
  }
  article{
    padding: 0px 0 20px 50px;
  }
</style>
