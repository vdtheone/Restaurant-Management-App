<template lang="">
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <!-- <router-link to="/update">Update Restaurant</router-link> -->
        <router-link to="login" @click="logout()">Logout</router-link>
        <!-- <router-link to="/login">Login</router-link> -->
    </div>
    <router-view />
</template>

<script>

export default {
    methods: {
        logout(){
            console.log("called");
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    },
    
    
}
</script>
<style>

.nav{
    background-color: black;
    display: flex;
}

.nav a{
    color: white;
    padding: 20px 15px;
    text-decoration: none;
    margin-right: 5px;
    font-size: 22px;
}

.nav a:hover{
    background-color: azure;
    color: blue;

}

</style>