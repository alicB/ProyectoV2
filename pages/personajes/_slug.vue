<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getPersonaje', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.personajes.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        personaje: (state) => state.personaje.data,
        readMore: (state) => state.readMore.data,
        prevNext: (state) => state.prevNext.data,
      })
    }
  }
</script>

<style>

#font{
font-family: Arial, Helvetica, sans-serif;
font-size: 23px;
letter-spacing: -1.2px;
word-spacing: 2.2px;
color: #000000;
font-weight: 400;
text-decoration: none solid rgb(68, 68, 68);
font-style: italic;
font-variant: normal;
text-transform: capitalize;
}

table, th, td {
 
  border: 2px solid #A40808;
  background-color: #EEE7DB;
  width: 25%;
  text-align: center;
  border-collapse: collapse;
}

</style>
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
    <div class="three columns">
      <img class="u-max-full-width" :src="'/images/personajes/'+personaje.image" alt="Es la cobra takataka">
    </div>
    <div class="six columns">
     <h4 id=font>{{personaje.nombre}}</h4>
	 
	 
	  <strong> Loyalty:</strong> {{personaje.lealtad}}<br>
	   
	   
	   <strong>History<br></strong>
	   
	   {{personaje.descripcion}}<br>
	   
	 </div>
	 <table >
	  <tr>
    <th colspan="2">Biographical Information</th>
  </tr>
	 
  <tr>
    <th>Age</th>
    <td>{{personaje.edad}}</td>
  </tr>
  <tr>
    <th>Title</th>
    <td>{{personaje.titulo}}</td>
  </tr>
  <tr>
    <th>Year dead</th>
    <td>{{personaje.muerte}}</td>
  </tr>
  
  <tr>
    <th>House</th>
    <td> <NuxtLink :to="'/casas/casa'+personaje.id_casa">{{personaje.casa_nacimiento}} </NuxtLink></td>
  </tr>
  
   <tr>
    <th>Born place</th>
    <td><NuxtLink :to="'/regiones/region'+personaje.id_region">{{personaje.region}}</NuxtLink></td>
  </tr>
  
</table>
	
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>