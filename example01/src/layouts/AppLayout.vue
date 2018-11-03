<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile
            v-for="item in sidebarmenu"
            :key="item"
            :to="item.link"
            @click="">
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.menu"></v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu offset-y fixed>
        <v-btn icon
          slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
            @click="">
              <v-icon>{{item.icon}}&nbsp;&nbsp;&nbsp;</v-icon> 
              <v-list-tile-title v-text="item.menu">&nbsp;&nbsp;&nbsp;</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        {
          menu: 'Profile',
          icon: 'account_circle'
        },
        {
          menu: 'Settings',
          icon: 'settings'
        },
        {
          menu: 'Logout',
          icon: 'exit_to_app'
        }
      ],
      sidebarmenu: [
        { menu: 'Dashboard', icon: 'dashboard', link: '/' },
        { menu: 'Customer', icon: 'dashboard', link: '/customer' },
        { menu: 'Contractor', icon: 'dashboard', link: '/contractor' },
        { menu: 'Supplier', icon: 'dashboard', link: '/supplier' },
        { menu: 'User', icon: 'dashboard', link: '/user' },
        { menu: 'Industry', icon: 'settings', link: '/industry' },
        { menu: 'Settings', icon: 'settings', link: '/setting' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
