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
                  <v-row>
                    <v-col cols="4" class="flex-row header_title">
                      <h4 class="opacity05">name:</h4>
                      <h1 class="">{{ dragon.name }}</h1>
                    </v-col>
                    <v-col cols="4" class="flex-row header_title">
                      <h4 class="opacity05">id:</h4>
                      <h1 class="">{{ dragon.id }}</h1>
                    </v-col>
                    <v-col cols="4" class="flex-row header_title">
                      <h4 class="opacity05">active:</h4>
                      <div
                        :class="activeYN(dragon.active)"
                      >
                      </div>
                    </v-col>
                  </v-row>
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
  methods: {
    activeYN (value) {
      const activeY = 'activeY'
      const activeN = 'activeN'
      if (value) {
        return activeY
      } else {
        return activeN
      }
    }
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
      padding: 10px 0 20px 1rem
      h1
        padding-left: 5px
    &_description
      padding: 20px 0 0 0

  .flex-row
    display: flex
    flex-direction: row
    align-items: center

  .opacity05
    opacity: 0.4

  .activeY,
  .activeN
    height: 30px
    width: 30px
    border-radius: 50%
    margin-left: 5px

  .activeY
    background: #328C6B
    box-shadow: 0px 0px 5px 0px rgba(50,140,107,1)

  .activeN
    background: #CC333F
    box-shadow: 0px 0px 5px 0px rgba(204,51,63,1)
</style>
