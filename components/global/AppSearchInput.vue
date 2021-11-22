<style>
.busqueda li a {
  color: blue;
  font-size: 12pt;
}
</style>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      batallas: [],
      personajes: [],
      regiones: [],
      casas: [],
      lugares: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.batallas = [];
        this.personajes = [];
        this.regiones = [];
        this.casas = [];
        this.lugares = [];
        return;
      }
      this.batallas = await this.$content("Batallas")
        .where({
          'Nombre': {$contains:capitalizeFirstLetter(searchQuery)},
        })
        .fetch();
      this.personajes = await this.$content("Personajes")
        .where({
          'nombre': {$contains:capitalizeFirstLetter(searchQuery)},
        })
        .fetch();
      this.regiones = await this.$content("Regiones")
        .where({
          'nombre': {$contains:capitalizeFirstLetter(searchQuery)},
        })
        .fetch();
      this.lugares = await this.$content("Places")
        .where({
          'nombre': {$contains:capitalizeFirstLetter(searchQuery)},
        })
        .fetch();
      this.casas = await this.$content("Casas")
        .where({
          'nombre': {$contains:capitalizeFirstLetter(searchQuery)},
        })
        .fetch();
    },
  },
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

</script>
  
<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Type Something..."
    />
    <ul v-if="batallas.length" class="busqueda">
      <h6><strong>Battles</strong></h6>
      <li v-for="article of batallas" :key="article.slug">
        <NuxtLink
          :to="{ name: 'batallas-slug', params: { slug: article.slug } }"
        >
          {{ article.Nombre }}
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="personajes.length" class="busqueda">
      <h6><strong>Characters</strong></h6>
      <li v-for="article of personajes" :key="article.slug">
        <NuxtLink
          :to="{ name: 'personajes-slug', params: { slug: article.slug } }"
        >
          {{ article.nombre }}
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="regiones.length" class="busqueda">
      <h6><strong>Regions</strong></h6>
      <li v-for="article of regiones" :key="article.slug">
        <NuxtLink :to="{ name: 'regiones-slug', params: { slug: article.slug } }">
          {{ article.nombre }}
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="lugares.length" class="busqueda">
      <h6><strong>Places</strong></h6>
      <li v-for="article of lugares" :key="article.slug">
        <NuxtLink :to="{ name: 'places-slug', params: { slug: article.slug } }">
          {{ article.nombre }}
        </NuxtLink>
      </li>
    </ul>
    <ul v-if="casas.length" class="busqueda">
      <h6><strong>Houses</strong></h6>
      <li v-for="article of casas" :key="article.slug">
        <NuxtLink :to="{ name: 'casas-slug', params: { slug: article.slug } }">
          {{ article.nombre }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

