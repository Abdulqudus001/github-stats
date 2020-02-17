<template>
  <div>
    <div class="action">
      <vue-multiselect v-model="action" :options="actions" track-by="name" label="name" />
      <div @click="showFilter = !showFilter">
        <p>Filter</p>
        <i class="fa fa-filter"></i>
      </div>
    </div>
    <div class="options" v-show="showFilter">
      <vue-multiselect v-model="country" :options="getCountries" @input="countryChanged" />
      <vue-multiselect v-model="language" :options="getLanguages" />
    </div>
    <user v-show="action.action == 'getUsers'" />
    <scroll-loader :loader-method="getUsers" :loader-distance=20 :loader-enable="loadMore" v-if="action.action == 'getUsers'">
    </scroll-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import User from './users';
export default {
  components: { User },
  data: () => ({
    action: '',
    actions: [
      {
        name: 'Get users',
        action: 'getUsers'
      },
      {
        name: 'Another',
        action: 'test'
      }
    ],
    country: '',
    language: '',
    showFilter: false,
    since: 0,
    loadMore: true,
    link: 'https://api.github.com/users',
    queryType: 'query',
    page: 1,
    perPage: 30
  }),
  computed: {
    ...mapGetters([
      'getCountries',
      'getLanguages'
    ])
  },
  watch: {
    
  },
  methods: {

    countryChanged() {
      this.since = 0;
      this.$store.dispatch('clearUsers');
      this.link = `https://api.github.com/search/users?q=location%3A${this.country}&type=Users&page=${this.page}`;
      this.queryType = 'search';
      // this.getUsers(`https://api.github.com/search/users?q=location%3A${this.country}&type=Users`, 'search')
    },
    getUsers(url = this.link, type = this.queryType) {
      const options = {
        params: {
          since: this.since,
          page: this.page
        }
      };
      this.axios.get(url, options).then(res => {
        const {data} = res;
        if (type == 'query') {
          this.since += 30;
          this.$store.dispatch('storeUsers', data);
        } else if (type == 'search') {
          this.page += 1;
          this.$store.dispatch('storeUsers', data.items);
        }
        data.length < this.perPage && (this.loadMore = false);
      }).catch(err => {
        console.error(err);
      });
    }
  }
};
</script>

<style lang="scss">
  .options,
  .action {
    max-width: 100%;
    width: 800px;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  .action {
    grid-template-columns: 1fr 0.2fr;
    div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      touch-action: none;
      user-select: none;
      p {
        margin: 0 10px;
      }
    }
  }
</style>