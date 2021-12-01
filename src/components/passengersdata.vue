<template>  
<div class="row" style="margin-bottom: 10px;">    
  <div class="col-sm-12 btn btn-success">    
   How to fetch data from WEB API in Vue.js Application  
  </div>    
</div>   
    <div>  
        <table class="table">
            <thead>
            <th>ID</th>
            <th>Survived</th>
            <th>Class</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Siblings</th>
            <th>Parch</th>
            <th>Ticket</th>
            <th>Fare</th>
            <th>Cabin</th>
            <th>Embarked</th>
            </thead>
            <tbody>
                <tr v-for="item in passengers" :key="item.Id">
                    <td>{{item.ID}}</td>
                    <td>{{item.Survived }}</td>
                    <td>{{item.Class }}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Sex}}</td>
                    <td>{{item.Age}}</td>
                    <td>{{item.Siblings }}</td>
                    <td>{{item.Parch }}</td>
                    <td>{{item.Ticket}}</td>
                    <td>{{item.Fare}}</td>
                    <td>{{item.Cabin}}</td>
                    <td>{{item.Embarked }}</td>
                </tr>
            </tbody>
        </table>  
    </div>  
</template>  
  
<script>  
    import PassengersService from "../Passengers";
    export default {  
        name: 'Passengerslist',
             data() {  
       return {  
      employees: [],  
    };  
  },  
          created()  
        {  
              this.retrievePassengers();
        },  
      
    methods: {  
        retrievePassengers() {
      PassengersService.getAll().then(response => {
      this.employees = response.data;  
          console.log(response.data);  
        })  
        .catch(e => {  
          console.log(e);  
        });  
    },  
  
}  
}  
</script>  
  
<style lang="scss" scoped>  
  
</style>  