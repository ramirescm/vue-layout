<template>
  <v-app id="inspire">
    <nav-bar />
    <!-- main -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    
    <!-- footer -->
    <footer />
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
export default {
  components: {
    NavBar,
    SideBar,
    Footer
  }
};
</script>