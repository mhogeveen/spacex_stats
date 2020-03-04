<template>
  <v-container class="dragons_template">
    <v-card>

      <!-- Tab links begin here -->
      <v-tabs
        v-model="tab"
        background-color="#F2F2F2"
        color="#1ec6d9"
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
            <v-container>

              <!-- Content Header -->
              <v-row class="dragon_header">
                <v-col cols="3" class="header_picture">
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
                <v-col cols="9" class="header_info">
                  <v-row class="header_title">
                    <v-col cols="4" class="flex-row title_data">
                      <h4 class="opacity05">name:</h4>
                      <h1 class="">{{ dragon.name }}</h1>
                    </v-col>
                    <v-col cols="4" class="flex-row title_data">
                      <h4 class="opacity05">id:</h4>
                      <h1 class="">{{ dragon.id }}</h1>
                    </v-col>
                    <v-col cols="4" class="flex-row title_data">
                      <h4 class="opacity05">active:</h4>
                      <div
                        :class="activeYN(dragon.active)"
                      >
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="header_description">
                    <p class="header_description_title">
                      {{ dragon.description }}
                    </p>
                    <v-btn
                      text
                      small
                      width="100px"
                      color="#1ec6d9"
                      :href="dragon.wikipedia"
                      target="_blank"
                    >
                      <v-icon left>mdi-open-in-new</v-icon>Read more
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
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
