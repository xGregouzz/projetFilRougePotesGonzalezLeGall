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
      <tbody>
        <tr>
            <td> {{numero}}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            numero: 1,
        };
    }
}
</script>