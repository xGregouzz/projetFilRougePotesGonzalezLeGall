<script lang="ts">
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      telephone: "",
      prixTotal: "",
      tva: "0%",
      date: new Date(),
      lignes: [{
        produit: "",
        prix: "",
        quantite: "",
        prixTotalLigne: "",
      }],
    }
  },
  methods: {
    ajouterLigne: function (event) {
      this.lignes.push({
        produit: "",
        prix: "",
        quantite: "",
      });
    },
    calculerPrixLigne(prix: number, quantite: number) {
      let prixTotal = prix * quantite;
      this.lignes.prixTotalLigne = prixTotal;
      return prixTotal;
    },
    
    calculerPrixTotal() {
      let number = 0;
      for (let ligne of this.lignes) {
        number += this.calculerPrixLigne(ligne.prix, ligne.quantite);
      }
      this.prixTotal = number;
      return number;
    },
  },
};
</script>
<template>
  <section>
    <h2>Facture :</h2>
    <p>Client : {{ prenom }} {{ nom }} ({{ telephone }})</p>
    <p>TVA : {{ tva }}</p>
    <p>Echéance : {{ echeance }}</p>
    <p>Prix Total : {{ calculerPrixTotal() }}</p>
    <br>
  </section>
  <section>
    <h2>Client :</h2>
    <input v-model="prenom" placeholder="Prénom" />
    <input v-model="nom" placeholder="Nom" />
    <input v-model="telephone" placeholder="Téléphone" />
    <br>
    <br>
    <br>
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
      <tr v-for="ligne in lignes">
        <td>
          <input type="text" v-model="ligne.produit" placeholder="Produit" />
        </td>
        <td>
          <input type="text" v-model="ligne.prix" placeholder="Prix" />
        </td>
        <td>
          <input type="text" v-model="ligne.quantite" placeholder="Quantité" />
        </td>
        <td>
          <p>&nbsp {{ calculerPrixLigne(ligne.prix, ligne.quantite) }}</p>
        </td>
      </tr>
    </tbody>
    <div>
      <button class="button btn-primary" v-on:click="ajouterLigne">Ajouter Ligne</button>
      <pre>{{ lignes }}</pre>
    </div>
  </section>
</template>