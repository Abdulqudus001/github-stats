import Axios from "axios";

export default {
  fetchCountries: ({ commit }) => {
    Axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      const { data } = res
      const names = data.map(country => country.name)
      commit('updateCountries', names)
    })
  },
  fetchLanguages: ({ commit }) => {
    Axios.get('https://api.github.com/languages').then(res => {
      const { data } = res
      const names = data.map(language => language.name)
      commit('updateLanguage', names)
    })
  }
}