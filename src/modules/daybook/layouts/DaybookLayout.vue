<template>
  <Navbar/>
  <div class="d-flex">
  	<div class="col-4 col-md-3">
	  <EntryList/>
  	</div>
  	<div class="col-8 col-md-9">
  		<router-view/>
  	</div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
	Navbar: defineAsyncComponent(()=> import('../components/Navbar')),
	EntryList: defineAsyncComponent(()=> import('../components/EntryList')),
  }
}
	
</script>
