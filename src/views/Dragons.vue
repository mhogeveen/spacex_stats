<template>
  <div class="dragons">
    <h1>Dragons</h1>
  </div>
</template>

<script>
export default {
  name: 'Dragons',
  data () {
    return {
      dragonsAPI: []
    }
  },
  mounted: function () {
    fetch('https://api.spacexdata.com/v3/dragons', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.dragonsAPI = jsonData
      })
  }
}
</script>
