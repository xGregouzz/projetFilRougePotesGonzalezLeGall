<template>
  <p>
    Prénom : {{ client.firstname }}
    <br />
    <br>
    Nom : {{ client.lastname }}
    <br />
    <br>
    Numéro : {{ client.phoneNumber }}
  </p>
</template>

<script>
export default {
  props: ["client"],
};
</script>
