<template>
  <div>
    <h1>Random Quotes</h1>
    <button @click="fetchQuote">Get Random Quote</button>
    <p v-if="quote">{{ quote }}</p>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue';

export default {
  components: { GoBack },
  data() {
    return { quote: '' };
  },
  methods: {
    async fetchQuote() {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      this.quote = data.content;
    },
  },
};
</script>