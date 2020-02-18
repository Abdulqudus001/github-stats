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
  props: ['language', 'country', 'BarChartData'],
  data: () => ({
    BarChartOptions: {
      credits: {
        enabled: false
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'bar'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        bar: {
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
    },
  }),
  computed: {
    ...mapGetters([
      'getCountries',
      'getLanguages'
    ]),
    getBarChartData() {
      const series = [
        {
          name: 'Language',
          colorByPoint: true,
          data: this.BarChartData
        }
      ];
      return {...this.BarChartOptions, series};
    }
  }
};
</script>