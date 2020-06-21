<template>
   <section id="card">
     <b-container class="blog list text-center">
      <b-row class="blog row" >
        <b-col sm="6" v-for="post in $page.posts.edges" :key="post.id" id="wrapper">
          <article class="card" role="article">
            
            <g-link :to="post.node.path">
              <div class="card-text">
                <div class="card-meta">{{post.node.title}}</div>
                <h2 class="card-title">{{post.node.description}}</h2>
                 <div class="badge" v-for="tag in post.node.tags" :key="tag.id">
                    <g-link class="badge-link" :to="tag.path">
                    <b-badge  pill variant="light">{{tag.id}} </b-badge>
                    </g-link>
                  </div>
                
              </div>
            <g-image class="card-image img-fluid" src="https://www.uhren4you.de/picture/casio/GA-2100-1A1ER.jpg" />
            </g-link>
            
           </article>
            
        </b-col>
      </b-row>
      <b-row >
        <b-col>
            <Pager :info="$page.posts.pageInfo" class="pager"/>

        </b-col>
      </b-row>
     
   </b-container>
   </section>
  
    
        
</template>


<script>
import { Pager } from "gridsome"
export default {
    name: "Card",
    components: {
       Pager
    }
}
</script>

<style>


</style>