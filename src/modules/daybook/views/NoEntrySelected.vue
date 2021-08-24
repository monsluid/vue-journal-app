<template>
  <div class="d-flex justify-content-sm-center h-100">
	<h1 class="align-self-center">Selecciona una entrada</h1>
  </div>
	<Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  	components: {
		Fab: defineAsyncComponent(()=> import('../components/Fab'))
  	}
}
</script>

<style lang="scss" scoped>

	
</style>
