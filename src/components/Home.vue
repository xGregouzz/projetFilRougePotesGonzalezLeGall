<template>
  <br>
  <button class="buttonHome">
    <router-link to="/invoice">Nouveau devis</router-link>
    <br>
  </button>
  <br>
  <br>
  <button class="buttonHome" @click="goToInvoiceList">Toutes les factures</button>
</template>

<script lang="ts">
  export default {
    computed: {
      username() {
        // We will see what `params` is shortly
        return this.$route.params.username
      },
    },
    methods: {
      goToInvoiceList() {
        this.$router.push('/invoices')
      },
    },
  }
</script>