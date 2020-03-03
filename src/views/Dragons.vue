<template>
  <div class="dragons_template">
    <v-card>
    <v-tabs
      background-color="#F2F2F2"
      color="#328C6B"
      light
    >
      <v-tab
        disabled
        class="categoryText"
      >
        {{ `${$options.name}:` }}
      </v-tab>
      <v-tab
        v-for="(dragon, i) in this.$store.state.dragonsAPI"
        :key="i"
      >
        {{ dragon.name }}
      </v-tab>
    </v-tabs>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Dragons',
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
