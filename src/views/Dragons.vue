<template>
  <v-container class="dragons_template">
    <v-card>

      <!-- Tab links begin here -->
      <v-tabs
        v-model="tab"
        background-color="rgba(30,198,217,0.1)"
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

              <!-- Data section -->
              <v-card class="dragon_details">

                <!-- Data section title & unit picker -->
                <v-row class="details_title">
                  <v-col cols="4" class="details_title_text">
                    <h2>Details</h2>
                  </v-col>
                  <v-col cols="8" class="details_title_choices">
                    <div class="choices_container">
                      <v-radio-group
                        v-model="distance"
                        row
                        class="choices_distance"
                      >
                        <v-radio
                          label="Meters" value="meters"
                          color="#1ec6d9"
                          ></v-radio>
                        <v-radio
                          label="Feet"
                          value="feet"
                          color="#1ec6d9"
                          ></v-radio>
                      </v-radio-group>
                      <div class="choices_seperator">
                      </div>
                      <v-radio-group
                        v-model="weight"
                        row
                        class="choices_weight"
                      >
                        <v-radio
                          label="kg"
                          value="kg"
                          color="#1ec6d9"
                          ></v-radio>
                        <v-radio
                          label="lb"
                          value="lb"
                          color="#1ec6d9"
                          ></v-radio>
                      </v-radio-group>
                    </div>
                  </v-col>
                </v-row>

                <!-- Data section general data -->
                <div class="details_general">
                  <v-row>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">type</p>
                        <p class="item_value">
                          {{ dragon.type }}
                        </p>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">first_flight</p>
                        <p class="item_value">
                          {{ dragon.first_flight }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">dry_mass</p>
                        <p class="item_value">
                          {{ dragon['dry_mass_' + insertWeight] }}
                        </p>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">crew_capacity</p>
                        <p class="item_value">
                          {{ dragon.crew_capacity }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">diameter</p>
                        <p class="item_value">
                          {{ dragon.diameter[insertDistance] }}
                        </p>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div class="general_item">
                        <p class="item_key">height_w_trunk</p>
                        <p class="item_value">
                          {{ dragon.height_w_trunk[insertDistance] }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>

                <!-- Data section data per component -->
                <div class="details_component">
                  <v-expansion-panels
                    accordion
                    multiple
                  >
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        color="rgba(30,198,217,0.05)"
                        class="component_header"
                      >
                        thrusters
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">type</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].type }}
                              </p>
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">amount</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].amount }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">pods</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].pods }}
                              </p>
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">isp</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].isp }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">fuel_1</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].fuel_1 }}
                              </p>
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">fuel_2</p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].fuel_2 }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                              <p class="item_key" style="margin-bottom: 0">thrust</p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">
                                <v-icon class="item_key_icon">
                                  mdi-subdirectory-arrow-right
                                </v-icon>
                                kN
                              </p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].thrust.kN }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">
                                <v-icon class="item_key_icon">
                                  mdi-subdirectory-arrow-right
                                </v-icon>
                                lbf
                              </p>
                              <p class="item_value">
                                {{ dragon.thrusters[0].thrust.lbf }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                        color="rgba(30,198,217,0.05)"
                        class="component_header"
                      >
                        heat_shield
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">material</p>
                              <p class="item_value">
                                {{ dragon.heat_shield.material }}
                              </p>
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">size_meters</p>
                              <p class="item_value">
                                {{ dragon.heat_shield.size_meters }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">temp_degrees</p>
                              <p class="item_value">
                                {{ dragon.heat_shield.temp_degrees }}
                              </p>
                            </div>
                          </v-col>
                          <v-col cols="6">
                            <div class="general_item">
                              <p class="item_key">dev_partner</p>
                              <p class="item_value">
                                {{ dragon.heat_shield.dev_partner }}
                              </p>
                            </div>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                      color="rgba(30,198,217,0.05)"
                      class="component_header"
                      >
                        payload : launch &amp; return &amp; pressurized_capsule
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>

                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                      color="rgba(30,198,217,0.05)"
                      class="component_header"
                      >
                        trunk
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>

                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
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
    insertDistance: function () {
      return this.distance
    },
    insertWeight: function () {
      return this.weight
    },
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
