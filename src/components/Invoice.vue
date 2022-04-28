<template>

  <section>
    <h2>Facture :</h2>
    <p>Client : {{ clientFullName }}</p>
    <p>TVA : {{ invoice.client.tva }}</p>
    <p>Echéance : {{ invoice.client.date }}</p>
    <p>Prix Total : {{ calculTotalPrice() }}</p>
    <br>
  </section>
  <section>
    <h2>Client :</h2>
    <template v-if="!displayClientForm">
      <client v-bind:client="invoice.client"></client>
      <button v-on:click="showClientForm">Modifier</button>
    </template>
    <client-form 
    v-else 
    v-bind:client="invoice.client" 
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
        <template v-for="(line, index) in invoice.lines">
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
  </section>

</template>

<script lang="ts">
import ClientVue from "./Client.vue";
import ClientFormVue from './ClientForm.vue';
import LineVue from './Line.vue';
import LineFormVue from './LineForm.vue';

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
            product: "Ligne 1",
            price: "8.99",
            quantity: "1",
          },
        ],
      },

      displayClientForm: false,
      displayLineForm: [
        false,
      ]
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
<style>
  table {
    margin-left:auto;
    margin-right:auto;
  }

  td {
    padding: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-collapse: collapse;
  }

  body {
    text-align: center;
    color: whitesmoke;
    background-color: rgb(28, 27, 27);
  }

  button {
    color: white;
    font-weight: 700;
    background-color: rgb(28, 27, 27);
    font-size: 1em;
    border-radius: 1em;
    border: 2px solid rgb(255, 255, 255);
  }
  h2 {
    font-weight: 1000;
    font-size: 1.8em;
    text-decoration: underline;
  }
</style>