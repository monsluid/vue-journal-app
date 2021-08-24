<template>
  <div class="entry-list-container">
	<div class="px-2 pt-2">
	<input 
	  type="text" 
	  placeholder="Buscar entrada"
	  class="form-control"/>
	</div>

	<div class="entry-scrollable-area mt-3">
	  <h3 v-for="item in 100"
		:key='item'
	  >
		<Entry/>
	  </h3>
  </div>
  </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
  	Entry: defineAsyncComponent(()=> import('./Entry'))
  }
} 
</script>

<style lang="scss" scoped>
.entry-list-container{
  box-shadow: 0 4px 8px rgba(0, 0, 0, .5); 
  height: calc(100vh - 56px);
}

.entry-scrollable-area{
  height: calc( 100vh - 120px );
  overflow: scroll;

}
	
</style>
