<template lang="">
    <div>
        <h1 class="add">Add Restaurant</h1>
        <form class="add">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name">
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address">
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact">
            <button type="button" @click="addrestaurant()">Add New Restaurant</button>
        </form>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addrestaurant() {
            console.log("called");
            console.log(this.restaurant.name);
            let result = await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            console.log(result);

        if(result.status==201){
            this.$router.push({name:'Home'})
        }

        }
    },
}
</script>
<style></style>