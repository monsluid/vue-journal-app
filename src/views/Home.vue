<template>
  <div class="home text-center">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home Page</h1>
    <button 
	  class="btn btn-primary" 
	  @click="goTo('no-entry')"
	>
	Daybook
	</button>
    <button class="btn btn-secondary"
    >Button Primary</button>
    <button class="btn btn-success">Button Primary</button>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
	goTo( name ){
	  this.$router.push({ name })
	} 
  }
}

</script>
