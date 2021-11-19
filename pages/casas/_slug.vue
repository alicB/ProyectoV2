<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getCasa', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.casas.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        casa: (state) => state.casa.data,
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
  width: 19%;
  text-align: center;
  border-collapse: collapse;
}
</style>
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
    <div class="three columns">
      <img class="u-max-full-width" :src="'/images/casa/'+casa.image" alt="Takataka">
    </div>
    <div class="six columns">
     <h4 id=font>{{casa.nombre}}</h4>
	  
	  <strong> Leader:</strong><NuxtLink :to="'/personajes/personaje'+casa.id_personaje">{{casa.dirigente}}</NuxtLink> <br> 
	 
	   <strong> Region:</strong><NuxtLink :to="'/regiones/region'+casa.id_region">{{casa.region}}</NuxtLink> <br> 
	  	
	   <strong> Vassals:</strong> {{casa.vasallos}}
	 </div>

<table>
  <tr>
    <th>Words</th>
   
  </tr>
  <tr>
    
	 <td>{{casa.lema}} </td>
    
  </tr>
 
</table>

	 
	 
	 
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>