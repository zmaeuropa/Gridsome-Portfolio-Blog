<template>
    <!-- SKILSS ----------------------------------------------------------------------------------------------------------------------------->

    <section id="skills" class="section-skills">
        
          <div class="container-fluid grey h-100 text-center pt-3 pb-5">
            <h4 class="display-6 text-center mt-5 pb-4">Skills</h4>
            <br>
            <div class="row mt-1 pt-3 pb-5">
                    <div class="col-sm-6 col-md-3">
                            <font-awesome-icon :icon="['fas', 'laptop-code']" class="fa-4x" />
                            
                            <div class=" text-skills pb-3">ux &amp; Design Thinking</div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                            <font-awesome-icon :icon="['fab', 'sketch']" class="fa-4x" />
                            
                        <div class=" text-skills pb-3">Web Design</div>
                    </div>
            
            
              <div class="col-sm-6 col-md-3">
                    <font-awesome-icon :icon="['fas', 'mobile-alt']" class="fa-4x" />
                    
                <div class=" text-skills pb-3">Responsive Design</div>
              </div> 
              <div class="col-sm-6 col-md-3">
                  <font-awesome-icon :icon="['fas', 'code-branch']" class="fa-4x" />
                  
                  <div class="text-skills pb-3">Development</div>
              </div>
            </div>
          </div>
        
    </section>
    
<!-- SKILLS END -------------------------------------------------------------------------------------------------------------------------------------->
</template>

<script>
export default {
    name:"Skills"
}
</script>

<style>

</style>