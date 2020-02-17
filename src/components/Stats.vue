<template>
  <div>
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
    <div class='chart'>
      <highcharts :options='chartOptions'></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    country: '',
    language: '',
    chartOptions: {
      credits: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [
        {
          name: 'Language',
          colorByPoint: true,
          data: []
        }
      ]
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
      this.chartOptions.title.text = `Language stats in ${this.country}`;
      this.chartOptions.series[0].data = [];
      this.language.forEach(language => {
        this.axios
          .get(
            `https://api.github.com/search/users?q=location%3A${this.country}+language%3A${language}&type=Users`
          )
          .then(res => {
            this.chartOptions.series[0].data.push({ name: language, y: res.data.total_count });
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