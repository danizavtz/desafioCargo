<template>
  <div id="app">
    <b-nav tabs fill>
      <b-nav-item :active='$route.name =="Home"'>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item :active='$route.name =="Listar"'>
         <router-link to="/listar">Listar linguagens</router-link>
      </b-nav-item>
      <b-nav-item :active='$route.name =="Filtrar"'>
        <router-link to="/filtrar">Filtrar por linguagem</router-link>
      </b-nav-item>
      <b-nav-item :active='$route.name=="Agrupar"'>
        <router-link to="/agrupar">Agrupar por linguagem</router-link>
      </b-nav-item>
      <b-nav-item :active='$route.name =="Sobre"'>
        <router-link to="/sobre">Sobre</router-link>
      </b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
