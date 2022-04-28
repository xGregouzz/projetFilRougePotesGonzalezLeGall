<template>

  <section>
    <h2>Facture :</h2>
    <p>Client : {{ clientFullName }}</p>
    <p>TVA : {{ invoice.client.tva }}</p>
    <p>Echéance : {{ invoice.client.date }}</p>
    <p>Prix Total : {{ calculTotalPrice() }}</p>
    <br/>
  </section>

  <section>
    <h2>Client :</h2>
    <template v-if="!displayClientForm">
      <client v-bind:client="invoice.client"></client>
      <button v-on:click="showClientForm">Modifier</button>
    </template>
    <client-form v-else v-bind:client="invoice.client" v-on:valider="hideClientForm"></client-form>
  </section>

  <section>
    <h2>Lignes</h2>
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
        <template v-for="(line, index) in invoice.lines">
          <line v-if="!displayLineForm" v-bind:line="line"/>
          <line-form v-else v-bind:line="line" />
        </template>
      </tbody>
    </table>
    <button v-on:click="addLine">Ajouter une ligne</button>
  </section>

</template>

<script lang="ts">
import ClientVue from "./components/Client.vue";
import ClientFormVue from './components/ClientForm.vue';
import LineVue from './components/Line.vue';
import LineFormVue from './components/LineForm.vue';

export default {

  components: {
    "Client": ClientVue,
    "ClientForm": ClientFormVue,
    "Line": LineVue,
    "LineForm": LineFormVue,
  },

  data() {
    return {
      invoice: {
        client: {
          lastname: "",
          firstname: "",
          phoneNumber: "",
          totalPrice: "",
          tva: "0%",
          date: new Date(),
        },

        lines: [
          {
            product: "",
            price: "",
            quantity: "",
          },
        ],
      },

      displayClientForm: false,
      displayLineForm: false,
    };
  },

  computed: {
    clientFullName() {
      return `${this.invoice.client.firstname} ${this.invoice.client.lastname} (${this.invoice.client.phoneNumber})`;
    },
  },
  methods: {
    addLine: function (event) {
      this.displayLineForm = true;
      this.invoice.lines.push({
        product: "",
        price: "",
        quantity: "",
      });
    },
    calculLinePrice(price: number, quantity: number) {
      let totalLinePrice = price * quantity;
      this.invoice.lines.totalLinePrice = totalLinePrice;
      return totalLinePrice;
    },

    calculTotalPrice() {
      let number = 0;
      for (let line of this.invoice.lines) {
        number += this.calculLinePrice(line.price, line.quantity);
      }
      this.invoice.client.totalPrice = number;
      return number;
    },

    showClientForm() {
			this.displayClientForm = true;
		},

    hideClientForm(newClient){
      this.displayClientForm = false;
      this.invoice.client.firstname = newClient.firstname;
      this.invoice.client.lastname = newClient.lastname;
      this.invoice.client.phoneNumber = newClient.phoneNumber;
    }
  },
};
</script>
<style>
</style>