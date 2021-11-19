<style>
.card {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  max-width: 400px;
  height: 185px;
  margin: 20px;
  border-radius: 10px;
  background-color: #b8c6e4;
  box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  margin-left: 10px;
}

.card-img {
width: 142px;
    height: 142px;
  border-radius: 10%;
  background-color: #b8c6e4;
}

.card-description {
  margin: 10px 0;
  font-size: 12px;
  color: black;
}

.card-title{
  font-size: 16px;
  color: black;
  font-family: Georgia, serif;
  letter-spacing: 0.6px;
  word-spacing: 1.4px;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
}

.card-link {
  margin-top: 20px;
  font-size: 12px;
  color: black;
}

#parra{
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
letter-spacing: -1.2px;
word-spacing: 2.2px;
color: #000000;
font-weight: 400;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: capitalize;
}
.card-skills {
  display: flex;
  justify-content: space-between;
}
.card-skills .skill {
  font-size: 12px;
  font-weight: 600;
  color: black;
}

.ul{
  list-style-type: none;
}

.ul li{
  list-style: none;
  float: left;
}

.ul li a {
  display: block;
  font-family: Georgia, serif;
  font-size: 16px;
  letter-spacing: 0.6px; word-spacing: 1.4px; 
  color: #000000;
  font-weight: 700; text-decoration: none solid rgb(68, 68, 68);
  font-style: normal; 
  font-variant: normal;
  text-transform: capitalize;
  border-radius: 12px;
  border: 2px solid #000000;
  text-align: center;
  text-decoration: none;
  z-index: 1;
}


</style>


<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ params, store: { dispatch, getters } }) {
      await dispatch('getCasas')
    },
    computed: {
      ...mapState({
        casas: (state) => state.casas.data,
      })
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Houses </h3>
   <p id=parra>This category lists houses. </p>
   <ul class="ul">
     <li v-for="c of casas" :key="c.slug">
       <div class="card">
          <div>
            <img class="card-img" :src="'/images/casa/' + c.image" />
          </div>
          <div class="card-text">
            <h4 class="card-title"><strong> {{ c.nombre }} </strong></h4>
            <p class="card-description">
              <span>Leader: {{c.dirigente}}</span><br>
             
            </p>
            <NuxtLink :to="{ name: 'casas-slug', params: { slug: c.slug } }" class="button">
                Details
            </NuxtLink>
          </div>
        </div>
     </li>
   </ul>
   <FooterView />
 </div>
</template>