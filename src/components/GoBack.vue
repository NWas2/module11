<template>
  <button @click="$router.back()">Go Back</button>
</template>

<script>
export default {}
</script>

<style>
button {
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369f6e;
}
</style>