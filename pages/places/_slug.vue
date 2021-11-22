<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getPlace', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.places.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        place: (state) => state.place.data,
        readMore: (state) => state.readMore.data,
        prevNext: (state) => state.prevNext.data,
      })
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
    <div class="three columns">
      <img class="u-max-full-width" :src="'/images/lugares/'+place.image" alt="po">
    </div>
    <div class="six columns">
     <h4>{{place.nombre}}</h4>
	 <p> Region: <NuxtLink :to="'/regiones/region'+place.id_region">{{place.region}}</NuxtLink></p> <br>
	 
	 
	 <strong> History </strong> <br>
	 {{place.descripcion}}
	
	   
	 </div>
	
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>