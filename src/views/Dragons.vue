<template>
  <v-container class="dragons_template">
    <v-card>

      <!-- Tab links begin here -->
      <v-tabs
        v-model="tab"
        background-color="rgba(30,198,217,0.1span)"
        color="#1EC6D9"
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
            <v-container class="dragon_container">

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
                      <span class="opacity04">name:</span>
                      <h1 class="">{{ dragon.name }}</h1>
                    </v-col>
                    <v-col cols="4" class="flex-row title_data">
                      <span class="opacity04">id:</span>
                      <h2 class="">{{ dragon.id }}</h2>
                    </v-col>
                    <v-col cols="4" class="flex-row title_data">
                      <span class="opacity04">active:</span>
                      <v-card
                        :class="activeYN(dragon.active)"
                      >
                    </v-card>
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

              <v-card class="dragon_details">
                <v-row class="details_title">
                  <v-col cols="4">
                    <h2 class="details_title_text">Details</h2>
                  </v-col>
                  <v-col cols="8">
                    <v-row class="details_title_choices">
                      <v-radio-group v-model="distance" row class="choices_distance">
                        <v-radio label="Meters" value="meters"></v-radio>
                        <v-radio label="Feet" value="feet"></v-radio>
                      </v-radio-group>
                      <div class="choices_seperator">
                      </div>
                      <v-radio-group v-model="weight" row class="choices_weight">
                        <v-radio label="kg" value="kg"></v-radio>
                        <v-radio label="lbs" value="lbs"></v-radio>
                      </v-radio-group>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>

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
      tab: null,
      distance: 'meters',
      weight: 'kg'
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
