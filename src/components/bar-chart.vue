<template>
  <div>
    <div class='chart'>
      <highcharts :options='getBarChartData'></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['language', 'country', 'barChartData'],
  data: () => ({
    barChartOptions: {
      chart: {
        type: 'bar'
      },
      yAxis: {
        min: 0,
        title: {
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      legend: {
        enabled: false
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
      }
    }
  }),
  computed: {
    ...mapGetters([
      'getCountries',
      'getLanguages'
    ]),
    getBarChartData() {
      const series = [
        {
          name: 'two',
          colorByPoint: true,
          data: [...this.barChartData],
          color: 'red'
        }
      ];
      const categories = this.barChartData.map(arr => arr[0]);
      const xAxis = {
        typs: 'category',
        categories
      };
      return {...this.barChartOptions, xAxis, series};
    }
  }
};
</script>