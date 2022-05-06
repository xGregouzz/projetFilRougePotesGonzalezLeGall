<template>
    <router-view></router-view>
    <h2>Liste des Factures : </h2>
    <br>
    <table>
      <thead>
        <tr>
          <td>Numéro</td>
          <td>Client</td>
          <td>Date</td>
          <td>Montant en €</td>
        </tr>
      </thead>
      <tbody @click="goToInvoice">
        <tr>
            <td>1</td>
            <td>{{store.invoice.client.firstname}}</td>
            <td>{{store.invoice.client.date}}</td>
            <td>{{store.calculTotalPrice}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { invoiceStore } from '@/stores/invoice.ts';
export default {
  setup() {
    const store = invoiceStore()
    return { store }
  },
    data() {
      return {
      };
    },

    methods: {
      goToInvoice() {
        this.$router.push('/invoice')
      },
    },
}
</script>