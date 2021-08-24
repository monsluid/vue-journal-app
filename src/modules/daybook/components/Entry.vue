<template>
  <div class="entry-container pointer p-2" 
  @click="$router.push({ name: 'entry', params: { id: 10 } })">
	<div class="entry-title d-flex">
	  <span class="text-success fs-5 fw-bold">21</span>
	  <span class="fs-5 mx-1">Agosto</span>
	  <span class="fs-5 fw-light">2021</span>
	</div>

	<div class="entry-description">
	 <p> Lorem ipsum dolor sit amet, consectetur adipisicing 
	  elit, sed do eiusmod tempor incididunt ut labore et 
	  dolore magna aliqua.</p>
	</div>
  </div>

</template>

<script>
	
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom:1px solid rgba(0, 0, 0, 0.5);
  transition: 0.2s all ease-in;
  height: 100%;

  &:hover {
	background-color: lighten($color: grey, $amount: 45);
	transition: 0.2s all ease-in;
  }
}

.entry-description {
  font-size: 12px;
} 
</style>
