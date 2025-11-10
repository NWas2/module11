<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  text-decoration: none;
  margin-right: 10px;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>