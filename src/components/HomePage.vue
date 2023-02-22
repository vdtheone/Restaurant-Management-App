<template>
  <div>
    <h1 class="center"><u> Hello, {{ name }} Welcome on Home page</u></h1><br><br>
    <table border="1" class="center">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Actions</th>
      </tr>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <td>{{ restaurant.id }}</td>
        <td>{{ restaurant.name }}</td>
        <td>{{ restaurant.address }}</td>
        <td>{{ restaurant.contact }}</td>
        <td><button><router-link :to="'/update/' + restaurant.id">Update</router-link></button>  
        <button @click="deleteresto(restaurant.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurants: [],
    }
  },
  methods: {
    async deleteresto(id) {
      console.log(id);
      let result = await axios.delete("http://localhost:3000/restaurants/" + id)

      if (result.status == 200) {
        // this.$router.push({ name: "Home" })
        this.loadData()
      }

    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      console.log(user);
      this.name = JSON.parse(user).name
      console.log("----------------", this.name);

      if (!user) {
        this.$router.push({ name: 'Sign_up' })
      }

      let result = await axios.get("http://localhost:3000/restaurants");
      console.log(result);
      this.restaurants = result.data
    }
  },
  mounted() {
    this.loadData()
  },

}
</script>

<style>
td {
  width: 160px;
  height: 40px;
  text-align: center;
  font-size: 20px;
}
td button{
  margin-left: 15px;
}
.center{
  text-align: center;
  margin: auto;
}
td a{
  text-decoration: none;
  color: black;
  cursor: default;
}
</style>