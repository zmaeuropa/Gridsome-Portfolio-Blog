<template> 
    <BlogLayout>
        
         <Card />
       
        
    </BlogLayout>
</template>
<script>
import BlogLayout from '~/layouts/Blog.vue'

export default {
  components: {
    Layout
  }
}
</script>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date",perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    
    edges {
      node {
        id
        title
        description
        path
         tags {
          id
          path
        }
        
      }
    }
  }
}
</page-query>

<script>

import Card from '~/components/Card'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components:{
    Card
  },
 
}
</script>

<style>

</style>