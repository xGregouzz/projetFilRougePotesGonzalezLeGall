<template>
  <router-view></router-view>
  <section>
    <h2>Facture :</h2>
    <p>Client : {{ store.clientFullName }}</p>
    <p>TVA : {{ store.invoice.client.tva }}</p>
    <p>Echéance : {{ store.invoice.client.date }}</p>
    <p>Prix Total : {{ calculTotalPrice() }}</p>
    <br>
  </section>
  <section>
    <h2>Client :</h2>
    <template v-if="!displayClientForm">
      <client v-bind:client="store.invoice.client"></client>
      <button v-on:click="showClientForm">Modifier</button>
    </template>
    <client-form 
    v-else 
    v-bind:client="store.invoice.client" 
    v-on:valider="hideClientForm">
    </client-form>
  </section>

  <section>
    <br>
    <br>
    <h2>Lignes :</h2>
    <table>
      <thead>
        <tr>
          <td>Produit</td>
          <td>Prix</td>
          <td>Quantité</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        <template v-for="(line, index) in store.invoice.lines">
          <Line
          v-if="!displayLineForm[index]" 
          v-bind:line="line" @click="handleEditLine(index)">
          </Line>
          <LineForm
          v-else v-bind:line="line" 
          v-on:editOk="handleEditLineFinished(index)">
          </LineForm>
        </template>
      </tbody>
    </table>
    <br>
    <button v-on:click="addLine">Ajouter une ligne</button>
    <br>
    <br>
  </section>

</template>

<script lang="ts">
import ClientVue from "./Client.vue";
import ClientFormVue from './ClientForm.vue';
import LineVue from './Line.vue';
import LineFormVue from './LineForm.vue';
import { invoiceStore } from '@/stores/invoice.ts';

export default {

  setup () {
    const store = invoiceStore()
    return {store}
  },

  components: {
    "Client": ClientVue,
    "ClientForm": ClientFormVue,
    "Line": LineVue,
    "LineForm": LineFormVue,
  },

  data() {
    return {
      displayClientForm: false,
      displayLineForm: [
        false,
      ]
    };
  },

  methods: {
    addLine: function (event) {
      this.invoice.lines.push({
        product: "",
        price: "",
        quantity: "",
      });
    },

    calculLinePrice(price: number, quantity: number) {
      let totalLinePrice = price * quantity;
      this.store.invoice.lines.totalLinePrice = totalLinePrice;
      return totalLinePrice;
    },

    calculTotalPrice() {
      let number = 0;
      for (let line of this.store.invoice.lines) {
        number += this.calculLinePrice(line.price, line.quantity);
      }
      this.store.invoice.client.totalPrice = number;
      return number;
    },

    showClientForm() {
			this.displayClientForm = true;
		},

    hideClientForm(newClient){
      this.displayClientForm = false;
      this.store.invoice.client.firstname = newClient.firstname;
      this.store.invoice.client.lastname = newClient.lastname;
      this.store.invoice.client.phoneNumber = newClient.phoneNumber;
    },

    handleEditLine(index) {
      this.displayLineForm.splice(index, 1, true);
		},

    handleEditLineFinished(index) {
      this.displayLineForm.splice(index, 1, false);
		}
  },
};
</script>