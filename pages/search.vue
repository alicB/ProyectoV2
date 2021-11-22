<style>

.ret{
  font-size: 12pt;
  text-decoration: none;
  border:1px solid black;
  border-radius: 7px;
  padding:8px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
}

.t{
  padding-top: 20px;
}

.p{
  padding-top: 20px;
}
</style>

<template>
  <div class="container">
   <div class="row p">
    <Nuxt-link to="/" class="ret">HOME</Nuxt-link>
    <h3 class="t">Search Page</h3>
	  <AppSearchInput />
   </div>
  </div>
</template>