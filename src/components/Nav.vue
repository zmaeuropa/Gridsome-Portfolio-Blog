<template>
     <b-navbar toggleable="md" type="dark shadow fixed-top" style="background:black;" id="top-nav">
      <b-navbar-brand class="navbar-brand ml-4" href="/">Zma<g-image src="../assets/img/logo.png" class="logopng" alt=""/>Gridsome</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-5" id="nav">
          <b-nav-item  class="mr-2">
            <g-link to="/">Home</g-link>
          </b-nav-item>
          <b-nav-item href="/#about" class="mr-2">
            About
          </b-nav-item>
           <b-nav-item href="/#work" class="mr-2">
            Portfolio
          </b-nav-item>
          <b-nav-item  class="mr-2" >
            <g-link to="/blog/">Blog</g-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: "Nav"
}
</script>