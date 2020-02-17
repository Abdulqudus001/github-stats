export default {
  updateCountries: ((state, payload) => {
    state.countries = payload;
  }),
  updateLanguage: ((state, payload) => {
    state.languages = payload;
  }),
  setUsers: ((state, payload) => {
    console.log(payload);
    const users = [...state.users, ...payload];
    state.users = users.filter((user, index, arr) => {
      return index === arr.findIndex(item => item.node_id === user.node_id);
    });
  }),
  clearUsers: (state) => {
    state.users = [];
  }
};