<template>
    <header class="fullpage img-fluid" id="home">
        <b-container class="container h-100">
          <b-row class="row h-100 align-items-center">
            <b-col class="col-md-8 offset-md-4 col-sm-12  text-center">

                
                <h1 class="font-weight-dark text-dark display-1">Zmä</h1> <g-image src="../assets/img/logo.png" class="img-fluid logoheader"  alt="logo"/>
                
                <p class="lead text-dark">Web Developper</p>

                <b-button type="button" class="btn  btn-lg btnresume mr-4">Resume<font-awesome-icon :icon="['fas', 'cloud-download-alt']" class="fa-1x" /></b-button>
                <b-button type="button" href="#about" class="btn  btn-lg btnexplore ml-4">Explore</b-button>


                
            </b-col>
          </b-row>
        </b-container>
      </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

