<template>
  <v-app>
    <v-toolbar app class="warning">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">
        Ingreso
      </v-btn>
      <v-btn class="error">
        Salir
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <h3>Menú Vertical</h3>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    return {
      drawer: true;
    }
  }),
};
</script>
