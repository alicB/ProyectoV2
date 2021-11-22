<style>
#jazz {
  position: absolute;
  margin-left: 0%;
  margin-top: -1%;
}

.b {
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid black;
}
.a {
  padding-right: 10px;
}
.c {
  width: 100%;
  text-align-last: center;
}

.d {
  margin-right: -10%;
  margin-left: 20%;
  position: absolute;
  border: 1px solid black;
  padding: 3px;
  border-radius: 9px;
  font-size: 12pt !important;
  font-weight: bold;
  top: 0;
  right: 0;
  text-decoration: none;
  align-content: center;
}

.c .a,
.c .b {
  text-decoration: none;
  color: black;
  font-size: 14pt;
}
</style>

<template>
  <div>
    <div class="row c" style="margin-top: 15px">
      <H1 id="jazz"><img src="/images/got.png" width="120px" /></H1>
      <NuxtLink class="a" to="/">Home</NuxtLink>
      <NuxtLink class="b" to="/batallas_index">Battles</NuxtLink>
      <NuxtLink class="b" to="/personajes_index">Characters</NuxtLink>
      <NuxtLink class="b" to="/places_index">Places</NuxtLink>
      <NuxtLink class="b" to="/regions_index">Regions</NuxtLink>
      <NuxtLink class="b" to="/casas_index">Houses</NuxtLink>
    </div>
    <NuxtLink to="/search" class="a d"><img src="/images/search_icon.png" width="20px"> Search page</NuxtLink>
  </div>
</template>