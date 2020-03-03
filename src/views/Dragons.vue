<template>
  <div class="dragons_template">
    <v-card>

      <!-- Tab links begin here -->
      <v-tabs
        v-model="tab"
        background-color="#F2F2F2"
        color="#328C6B"
        light
      >
        <v-tab
          v-for="(dragon, i) in dragonsAPI"
          :key="i"
        >
          {{ dragon.name }}
        </v-tab>
      </v-tabs>

      <!-- Tab content begins here -->
      <v-tabs-items
        v-model="tab"
      >
        <v-tab-item
          v-for="(dragon, i) in dragonsAPI"
          :key="i"
        >
          <v-card flat>
            <v-container pt-5 pb-5>

              <!-- Content Header -->
              <v-row class="dragon_header">
                <v-col cols="3">
                  <v-card>
                    <v-img
                      :src="dragon.flickr_images[0]"
                      :alt="dragon.name"
                      width="300px"
                      height="300px"
                    >
                    </v-img>
                  </v-card>
                </v-col>
                <v-col cols="9">
                  <h1 class="header_title">{{ dragon.name | capitalize }}</h1>
                  <v-divider></v-divider>
                  <p class="header_description">{{ dragon.description }}</p>
                </v-col>
              </v-row>

            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dragons',
  data () {
    return {
      tab: null
    }
  },
  computed: {
    ...mapState(['dragonsAPI'])
  },
  created () {
    this.$store.dispatch('loadDragons')
  }
}
</script>

<style lang="sass" scoped>
  .dragons_template
    margin: 10px 10px

  .categoryText
    color: #328C6B!important
    opacity: 1

  .card_header
    display: flex
    &_description
      display: flex
      flex-direction: column

  .header
    &_title
      line-height: 1
      padding: 10px 0 20px 0
    &_description
      padding: 20px 0 0 0
</style>
