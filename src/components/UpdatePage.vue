<template lang="">
    <div>
        <h1 class="add">Update Page</h1>
        <form class="add">
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter Restaurant Name">
            <input type="text" name="address" v-model="restaurant.address" placeholder="Enter Address">
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter Contact">
            <button type="button" @click="update()">Update Restaurant</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    async mounted() {
        let result = await axios.get(`http://localhost:3000/restaurants?id=${this.$route.params.id}`)
        this.restaurant.name = result.data[0].name
        this.restaurant.address = result.data[0].address
        this.restaurant.contact = result.data[0].contact
     
    },
    methods: {
        async update(){

            console.log(this.restaurant);


            let result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            console.log("post==========",result);

            if(result.status==200){
                this.$router.push({name:"Home"})
            }
           

        }
    },
}
</script>
<style lang="">
    
</style>