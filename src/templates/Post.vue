<template>
   <BlogLayout>
      <section id="post">
        <b-container class="text-center">
          <p class="text-left">{{$page.post.date}} </p>
          <div class="markdown-body" v-html="$page.post.content" />
        </b-container>
      </section>
   </BlogLayout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date(format: "MMMM D, Y")
    content
  
  }
 
}

</page-query>

<script>

export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
},

}
</script>

<style>
@import url('../assets/css/github-mardown.css');
#post{
  margin-top: 5rem;
}


</style>