<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button @click="cancel" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    {{message}}
  </div>
</template>

<script>
    export default {
        name: "Edit",
      props:["message"],
      methods:{
          cancel(){
            this.$emit('changeMessage');
          }
      }
    }
</script>

<style scoped>

</style>
