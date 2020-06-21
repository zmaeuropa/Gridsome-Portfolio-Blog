<template>
  <Layout :title="this.$route.params.id">
    <section id="card">
        <b-container class="container blog list ">
            <h4 class="text-left">{{$route.params.id}} </h4>
            <b-row class="blog row" >
                <b-col sm="6" v-for="post in posts" :key="post.id" id="wrapper">
                    <article class="card" role="article">
                        <g-link :to="post.path">
                            <div class="card-text">
                                <div class="card-meta">{{post.title}}</div>
                                <h2 class="card-title">{{post.description}}</h2>
                            </div>
                        <g-image class="card-image img-fluid" src="https://fabiofranchino.com/blog/assets/posts/vuejs-nice-to-meet-you/cover.png" />
                        </g-link>
                    </article>
                    
                </b-col>
            </b-row>
        </b-container>
    </section>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            content
            description
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$route.params.id
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map(e => e.node);
    }
  }
};
</script>