<template>
  <div>
    <div>
      <!-- <input type="text" placeholder="Search user" v-model="search"> -->
    </div>
    <div class="users">
      <div class="user" v-for="user in getUsers" :key="user.id">
        <div class="user-img">
          <img :src="user.avatar_url" alt="">
        </div>
        <p class="user-name">
          {{ user.login }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    search: ''
  }),
  computed: {
    ...mapGetters([
      'getUsers'
    ]),
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 280px;
    max-width: 100%;
    border-radius: 8px;
    padding: 15px 10px;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  .users {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 0.8fr));
    grid-gap: 20px;
    justify-content: center;
    .user {
      background: #fff;
      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      color: $primary;
      &-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
  }
</style>