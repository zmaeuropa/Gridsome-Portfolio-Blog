<template>
     <section class="container-fluid" id="followme">
      <div class="row text-center pt-5" style="background: #1DB9A0;;">
          <div class="col-md-6 mx-auto my-auto">
              <h5 class="display-4"> A question, a project</h5>

                <br>
                <button type="button" class="btn btn-lg btn-defo mb-4">Contact me !</button>
          </div>
      </div>
      <div class="row text-center pt-5" style="background: #ffffff;">
            <div class="col-md-6 mx-auto my-auto">
                    

                <ul class="social-nav model-3d-0">
                        <li><a class="github" href="https://github.com/ilsma" title="Follow me on Github">
                            <div class="front"><font-awesome-icon :icon="['fab', 'github']" /></div>
                            <div class="back"><font-awesome-icon :icon="['fab', 'github']" /></div></a></li>
                        <li><a class="linkedin">
                            <div class="fornt"><font-awesome-icon :icon="['fab', 'linkedin']" /></div>
                            <div class="back"><font-awesome-icon :icon="['fab', 'linkedin']" /></div></a></li>
                       
                </ul>

                <div class="col-md-6 mx-auto my-auto pb-3">
                    <p>
                    Copyright<font-awesome-icon :icon="['fas', 'copyright']" class="copyright" />2020
                    </p>
                   
                </div>
                
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name: "Footer",
   
}
</script>