<template>
  <div class="dragons_template">
    <v-card>

      <v-tabs
        v-model="tab"
        background-color="#F2F2F2"
        color="#328C6B"
        light
      >
        <!-- <v-tab
          disabled
          class="categoryText"
        >
          {{ `${$options.name}:` }}
        </v-tab> -->
        <v-tab
          v-for="(dragon, i) in dragonsAPI"
          :key="i"
        >
          {{ dragon.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items
        v-model="tab"
      >
        <v-tab-item
          v-for="(dragon, i) in dragonsAPI"
          :key="i"
        >
          <v-card flat>
            <v-card-text>{{ dragon.name }}</v-card-text>
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
</style>
