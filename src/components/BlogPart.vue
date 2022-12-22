<template>
    <div class=" blog container mt-5">
        <div>
      <h1>Blog</h1>
      <p>
        Recent posts form our Blog
      </p>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12"  data-aos="fade-up" data-aos-delay="200">            
            <div class="post-box">
              <img src="../assets/img/blog-1.jpg" class="post-img" alt="">
              <div class="meta mt-4">
                <span class="post-date">Tue, December 12</span>
                <span class="post-author"> / Julia Parker</span>
              </div>
              <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="#" class="readmore stretched-link btn-click"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>      
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12"  data-aos="fade-up" data-aos-delay="200">            
            <div class="post-box">
              <img src="../assets/img/blog-2.jpg" class="post-img" alt="">
              <div class="meta mt-4">
                <span class="post-date">Tue, December 12</span>
                <span class="post-author"> / Julia Parker</span>
              </div>
              <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="#" class="readmore stretched-link btn-click"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>      
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12"  data-aos="fade-up" data-aos-delay="200">            
            <div class="post-box">
              <img src="../assets/img/blog-3.jpg" class="post-img" alt="">
              <div class="meta mt-4">
                <span class="post-date">Tue, December 12</span>
                <span class="post-author"> / Julia Parker</span>
              </div>
              <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
              <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
              <a href="./BlogPage.vue"  class="readmore stretched-link btn-click"><span>
                 <router-link :to="{name: 'BlogPage'}" class="btn-click" >Read More</router-link>
       
                
                </span><i class="bi bi-arrow-right"></i></a>

                    </div>      
        </div>
    </div>
    </div>
</template>

<script>
import BlogPage from './BlogPage.vue'

export default{
 name:'BlogPart' ,
 components:
 BlogPage  
}
</script>
