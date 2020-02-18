<template>
  <div>
    <div class='chart'>
      <highcharts :options='getPieChartData'></highcharts>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['language', 'country', 'pieChartData'],
  data: () => ({
    pieChartOptions: {
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
    },
  }),
  computed: {
    ...mapGetters([
      'getCountries',
      'getLanguages'
    ]),
    getPieChartData() {
      const series = [
        {
          name: 'Language',
          colorByPoint: true,
          data: this.pieChartData
        }
      ];
      return {...this.pieChartOptions, series};
    }
  }
};
</script>