<template>
  <div>
  <Header />
</div>
</template>

<script>
import Header from './components/HeaderPage.vue';




export default {
  name: 'App',
  components: {
    Header
}
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

.register,.login,.add{
    text-align: center;
}

.logo{
    width: 125px;
    margin-top:0px;
}

.register input, .login input,.add input{
    width: 270px;
    display: block;
    margin: 20px auto; 
    height: 35px;
    border: 1px solid skyblue;
    padding-left: 20px;
    font-size: 18px;
}

.register button,.login button, .add button{
    width: 270px;
    height: 30px;
    font-size: 18px;
    /* background-color: rgb(46, 101, 123); */
}

.login a,.register a{
  margin-top: 50px;
  font-size: 20px;
}

p{
    margin: 15px;
}
</style>
