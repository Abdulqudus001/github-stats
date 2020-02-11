export default {
  updateCountries: ((state, payload) => {
    state.countries = payload;
  }),
  updateLanguage: ((state, payload) => {
    state.languages = payload
  })
}