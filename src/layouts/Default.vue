<template>
  <section>
    <Nav />
    <slot/>
    <Footer />
 
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style>
@import url('../assets/css/main.css');
a:hover {
  text-decoration: none;
}

</style>
