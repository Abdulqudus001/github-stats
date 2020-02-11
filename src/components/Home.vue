<template>
  <div>
    <div class="options">
      <vue-multiselect v-model="country" :options="getCountries" />
      <vue-multiselect v-model="country" :options="getCountries" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    country: ''
  }),
  computed: {
    ...mapGetters(['getCountries'])
  },
  mounted() {
    console.log(this.$store.state.countries);
  }
}
</script>

<style lang="scss">
  .options {
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
</style>