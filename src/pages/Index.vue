<template>
  <Layout>
    <Header />
    <About />
    <Skills />
    <Portfolio />
  </Layout>
</template>

<script>
import Nav from '~/components/Nav'
import Header from '~/components/Header'
import About from '~/components/About'
import Portfolio from '~/components/Portfolio'
import Skills from '~/components/Skills'
import Footer from '~/components/Footer'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    Nav,
    Header,
    About,
    Portfolio,
    Skills,
    Footer
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
