<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getBatalla', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.batallas.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        batalla: (state) => state.batalla.data,
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
      <img class="u-max-full-width" :src="'/images/batalla/'+batalla.image" alt="Takataka">
    </div>
    <div class="six columns">
     <h4 id=font>{{batalla.Nombre}}</h4>
	  <strong> Year:</strong> {{batalla.annio}}<br>
	  <strong> Type:</strong>  {{batalla.tipo}} <br>
	 
	   <strong> Attacker king:</strong> <NuxtLink :to="'/personajes/personaje'+batalla.id_rey_ataca">{{batalla.rey_ataca}}</NuxtLink><br>
	   <strong> Attacker commander:</strong>  {{batalla.comandante_ataca}} <br>
	   
	   <strong> Defender king:</strong> <NuxtLink :to="'/personajes/personaje'+batalla.id_rey_defensor">{{batalla.rey_defensor}}</NuxtLink><br>	 
	   <strong> Defender commander:</strong>  {{batalla.comandante_defensor}} <br>
	   
	
	  
	  <strong> Attacker house:</strong> <NuxtLink :to="'/casas/casa'+batalla.id_casa_ataca">{{batalla.casa_ataca}}</NuxtLink><br>
	  <strong> Defender house:</strong> <NuxtLink :to="'/casas/casa'+batalla.id_casa_ataca">{{batalla.casa_defensor}}</NuxtLink><br>
	  	  
	 </div>
<table>
  <tr>
    <th>Attacker size</th>
    <th>Defender size</th>
  </tr>
  <tr>
    <td>{{batalla.num_ataca}} </td>
	 <td>{{batalla.num_defensor}} </td>
    
  </tr>
 
</table>

<table>
  <tr>
    
    <th colspan="2">Place</th>
  </tr>
  <tr>
    <td> <NuxtLink :to="'/places/place'+batalla.id_lugar">{{batalla.lugar}}</NuxtLink>, <NuxtLink :to="'/regiones/region'+batalla.id_region">{{batalla.region}}</NuxtLink></td>
	 
    
  </tr>
 
</table>
	 
	 
	 
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>