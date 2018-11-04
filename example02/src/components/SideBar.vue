<template>
  <div>
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
  </div>
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