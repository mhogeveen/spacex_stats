<template>
  <div>
    <v-app-bar
      color="grey darken-4"
      dark
    >
      <v-app-bar-nav-icon
        @click="drawer = true"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title>SpaceX Stats</v-toolbar-title>
      <!-- <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab>
            ello
          </v-tab>
          <v-tab>
            ello
          </v-tab>
        </v-tabs>
      </template> -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <router-link :to="'/'">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link :to="'/dragons'">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-subdirectory-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dragons</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>

<style lang='scss' scoped>

</style>
