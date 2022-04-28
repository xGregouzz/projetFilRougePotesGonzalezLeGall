<template>
  <section>
    <h2>Facture :</h2>
    <p>
      Client : {{ clientFullName }}
    </p>
    <p>TVA : {{ invoice.client.tva }}</p>
    <p>Echéance : {{ invoice.client.date }}</p>
    <p>Prix Total : {{ calculTotalPrice() }}</p>
    <br />
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
    <h2>Lignes :</h2>
    <thead>
      <tr>
        <td>
          <strong>Produit</strong>
        </td>
        <td>
          <strong>Prix</strong>
        </td>
        <td>
          <strong>Quantité</strong>
        </td>
        <td>
          <strong>&nbsp Total</strong>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="line in this.invoice.lines">
        <td>
          <input type="text" v-model="line.product" placeholder="Produit" />
        </td>
        <td>
          <input type="text" v-model="line.price" placeholder="Prix" />
        </td>
        <td>
          <input type="text" v-model="line.quantity" placeholder="Quantité" />
        </td>
        <td>
          <p>&nbsp {{ calculLinePrice(line.price, line.quantity) }}</p>
        </td>
      </tr>
    </tbody>
    <div>
      <button class="button btn-primary" v-on:click="addLine">
        Ajouter Ligne
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import Client from "./components/Client.vue";
import ClientFormVue from './components/ClientForm.vue';
export default {

  components: {
    "Client": Client,
    "ClientForm": ClientFormVue,
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
    };
  },

  computed: {
    clientFullName() {
      return `${this.invoice.client.firstname} ${this.invoice.client.lastname} (${this.invoice.client.phoneNumber})`;
    },
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