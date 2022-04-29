<template>
  <Home />
  <br>
  <br>
  <br>
  <router-view></router-view>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  components: {
    Home,
  }
}
</script>
<style type="text/css">
  @import '@/assets/styles/allView.css';
</style>