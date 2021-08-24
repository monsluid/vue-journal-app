<template>
  <div class="entry-title d-flex justify-content-between p-2">
	<div>
		<span class="text-success fs-5 fw-bold">22</span>
		<span class="fs-5 mx-1">Agosto</span>
		<span class="fs-5 fw-light">2021</span>
	</div>
	<div>
		<button class="btn btn-danger mx-2">
		  Borrar
		  <i class="fa fa-trash alt"></i>
		</button>
		<button class="btn btn-primary">
		  Subir Imagen
		  <i class="fa fa-upload"></i>
		</button>
	</div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
  	<textarea 
	 placeholder="¿Que sucedio hoy?"></textarea>

  </div>
  <Fab icon="fa-save"/>
  <img 
	src="https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_1280.png" 
	alt="image"
	class="img-thumbnail"
	/>
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
textarea{
  border: none;
  font-size: 20px;
  width: 100%;

  &:focus{
	box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
	outline: none;
  } 
}

img {
   width: 200px;
   position: fixed;
   bottom: 150px;
   right: 20px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2)
}
</style>
