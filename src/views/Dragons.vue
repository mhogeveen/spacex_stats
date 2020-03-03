<template>
  <div class="dragons">
    <h1>Dragons</h1>
    <ul>
      <li
        v-for="(dragon, i) in dragons"
        :key="i"
      >
        {{ dragon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dragons',
  data () {
    return {
      dragons: this.$store.state.dragonsAPI
    }
  },
  created () {
    this.$store.dispatch('loadDragons')
  }
}
</script>
