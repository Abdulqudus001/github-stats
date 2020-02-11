import Axios from "axios";

export default {
  fetchCountries: (({ commit }) => {
    Axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      const { data } = res
      const names = data.map(country => country.name)
      commit('updateCountries', names)
    })
  })
}