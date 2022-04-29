<template>
	<tr>
		<td><input type="text" v-model="line.product" /></td>
		<td><input type="number" v-model="line.price" /></td>
		<td><input type="number" v-model="line.quantity" /></td>
		<td>{{ line.price * line.quantity }}</td>
		<td><button @click="this.$emit('editOk')">OK</button></td>
	</tr>
</template>

<script>
	export default {
		props: ["line"],
		emits: ["editOk"],
	}
</script>
