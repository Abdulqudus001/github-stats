<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>GitHub Stats</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="blue-grey"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    />

    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Made with by <v-icon color="pink" class="pound">mdi-heart</v-icon><a href="github.com/abdulqudus001">Abdulqudus</a></span>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      items: [
        { icon: 'home', text: 'Home', to: '/' },
        { icon: 'chart-line', text: 'Visualize', to: '/stats' },
        { icon: 'history', text: 'Another route', to: '/empty' },
        { icon: 'featured-play-list', text: 'Another one', to: '/route' },
        { icon: 'watch-later', text: 'Final one', to: '/another' },
      ],
    }),
  };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>

<style>
body {
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 1366px;
  max-width: calc(100% - 30px);
  padding: 0 15px;
  margin: 50px auto;
}

.theme--light.v-application {
  background: none !important;
}
.pound + a {
  text-decoration: none;
  color: #fff !important;
}

.pound + a:hover {
  color: #ddd !important;
}

.pound {
  margin: 0 3px;
  font-size: 10px;
  animation: pound 0.35s infinite alternate;
  -webkit-animation: pound 0.35s infinite alternate;
}

@-webkit-keyframes pound {
  to {
    transform: scale(1.1);
  }
}
@keyframes pound {
  to {
    transform: scale(1.1);
  }
}

</style>

<style lang="scss">
  $primary: #2c3e50;
</style>
