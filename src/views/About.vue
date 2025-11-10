<template>
  <div>
    <h1>About</h1>
    <p>Welcome to my Vue SPA! This page explains what this project is about.</p>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue';
export default {
  components: { GoBack }
}
</script>