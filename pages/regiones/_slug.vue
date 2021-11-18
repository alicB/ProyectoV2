<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getRegion', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.regiones.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        region: (state) => state.region.data,
        readMore: (state) => state.readMore.data,
        prevNext: (state) => state.prevNext.data,
      })
    }
  }
</script>

<style>
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
      <img class="u-max-full-width" :src="'/images/region/'+region.image" alt="po">
    </div>
    <div class="six columns">
     <h4>{{region.nombre}}</h4>
	 
	 <strong> History </strong> <br>
	 {{region.descripcion}}
	
	   
	 </div>
<table>
  <tr>
    <th>House</th>
   
  </tr>
  <tr>
    
	 <td><NuxtLink :to="'/casas/casa'+region.id_casa">{{region.casa}}</NuxtLink></td>
    
  </tr>
 
</table>
	
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>