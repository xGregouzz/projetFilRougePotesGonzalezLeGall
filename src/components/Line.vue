<template>
    <tr>
		<td>{{ line.product }}</td>
		<td>{{ line.price }}</td>
		<td>{{ line.quantity }}</td>
		<td>{{ line.price * line.quantity }}</td>
	</tr>
</template>

<script>
	export default {
		props: ["line"],
	}
</script>
