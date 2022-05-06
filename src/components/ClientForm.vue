<template>
  <p>
		Prénom : <input type="text" v-model="firstname" />
		<br>
    <br>
		Nom : <input type="text" v-model="lastname" />
		<br>
    <br>
		Numéro : <input type="number" v-model="phoneNumber" />
	</p>
  <!-- un evenement personnaliser prend en parametre d'abord le nom de l'evenement puis la donnée a transferer !-->
  <button @click="this.$emit('valider', this)">Valider</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      firstname: this.client.firstname,
      lastname: this.client.lastname,
      phoneNumber: this.client.phoneNumber,
    }
	},

  props: [
    "client"
  ],

  emits: [
    "valider"
  ],
};
</script>