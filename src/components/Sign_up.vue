<template lang="">
    <div class="register">
        <img class="logo" src="../assets/logo.jpg" />
        <h1>Sign Up</h1>
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signUp">Sign Up</button>
        <p><router-link to="/login">Login</router-link></p>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp(){
            console.log("called");
            console.log(this.name,this.email,this.password);
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log(result);
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }  
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    },
    
}
</script>
<style>

</style>