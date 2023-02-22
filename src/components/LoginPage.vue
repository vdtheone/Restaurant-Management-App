<template lang="">
    <div class="login">
        <img class="logo" src="../assets/logo.jpg" />
        <h1>Login</h1>
        <input class="input" v-model="email" type="email" placeholder="Enter email">
        <input class="input" v-model="password" type="password" placeholder="Enter password">
        <button class="input" @click="login">Login</button>
        <p><router-link to="/sign-up">Signup</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'LoginPage ',
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        async login(){
            console.log(this.email);
            // console.log(this.password);
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            console.log("result ==== ",result);
            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            else
            {
                console.log("Else")
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