<template>
    <div>
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
             <v-list-group v-if="subItem.items"  >
                <v-list-tile-content >
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-group>

               <v-list-group v-if="subItem.items">
                 <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
                    <v-list-tile 
                    v-for="subItem in item.items"
                    :key="subItem.title"
                    @click=""
                  >
                    <v-list-tile-content>
                      <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon>{{ subItem.action }}</v-icon>
                    </v-list-tile-action>
                     </v-list-tile>
              </v-list-group>
            </v-list-tile>



          </v-list-group>
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
      
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Attractions',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              {
                action: 'sushu',
                title: 'sushu',
                active: true,
                items: [
                  { title: 'a' },
                  { title: 'b' },
                  { title: 'c' }
                ]
              }
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
          }
        ]
      }
    }
  }
</script>
