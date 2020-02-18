<template>
  <v-row
    justify="center"
  >
    <v-col sm="12" class="text-center white--text">
      <h2>View percentage of language by country</h2>
      <div class='options'>
        <vue-multiselect v-model='country' :options='getCountries' />
        <vue-multiselect v-model='language' :options='getLanguages' multiple :close-on-select='false'>
          <template slot='selection' slot-scope='{ values, search, isOpen }'>
            <span
              class='multiselect__single'
              v-if='language.length > 2 &amp;&amp; !isOpen'
            >{{ language.length }} options selected</span>
          </template>
        </vue-multiselect>
        <button @click='getStats' :disabled="isButtonDisabled">Get Stats</button>
      </div>
    </v-col>
    <v-col
      cols="12"
      sm="8"
    >
      <PieChart :language="language" :country="country" :pieChartData="pieChartData" />
    </v-col>
    <v-col
      sm="12"
      md="4"
    > 
      <div>
        <highcharts :options="barChartOptions"/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import PieChart from '@/components/pie-chart.vue';
export default {
  components: { PieChart },
  data: () => ({
    country: '',
    language: '',
    pieChartData: [],
    barChartOptions: {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
        categories: ['Javascript', 'Python', 'Ruby', 'Java'],
        title: {
            text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
              enabled: true
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        data: [7, 6, 5, 3, 2]
      }]
    }
  }),
  computed: {
    ...mapGetters(['getCountries', 'getLanguages']),
    isButtonDisabled() {
      return !(this.language.length > 0 && this.country);
    }
  },
  methods: {
    getStats() {
      this.pieChartData = [];
      this.language.forEach(language => {
        this.axios
          .get(
            `https://api.github.com/search/users?q=location%3A${this.country}+language%3A${language}&type=Users`
          )
          .then(res => {
            this.pieChartData.push({ name: language, y: res.data.total_count });
            // console.log(counts);
          });
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.options {
  max-width: 100%;
  width: 800px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  button {
    max-width: 150px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #fff;
    background: none;
    color: #fff;
    max-height: 40px;
    &:hover {
      background: $primary-light;
      border: none;
    }
  }
  @media screen and (min-width: 720px) {
    grid-template-columns:  repeat(auto-fit, minmax(300px, 1fr)) minmax(150px, 1fr)
  }
}
.chart {
  width: 700px;
  margin: 0 auto;
  max-width: 100%;
  > div {
    width: 100%;
  }
}
</style>