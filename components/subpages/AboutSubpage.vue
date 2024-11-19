<template>
  <section class="pt-page pt-page-2" data-id="about_me">
    <div class="border-block-top-110"></div>
    <div class="section-inner">
      <div class="section-title-block">
        <div class="section-title-wrapper clearfix">
          <h2 class="section-title">About Me</h2>
          <h5 class="section-description">Creative Web Developer</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-4 subpage-block">
          <div class="my-photo-block tilt-effect">
            <img src="/images/upwork.jpg" alt="Zach Turner | Web Developer" />
          </div>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-4">
          <h3>Full Stack Developer | Consultant </h3>
          <p>
            With over 5 years of experience, I build scalable, high-performing web and mobile applications tailored to client needs. My expertise spans Full Stack Development, eCommerce platforms, API integrations, and WCAG accessibility compliance. I've successfully delivered projects for diverse industries, including commercial real estate, non-profits, and Fortune 500 companies, leveraging cutting-edge technologies like Vue.js, Laravel, Shopify, and AEM.


          </p>

        </div>

        <div class="col-sm-6 col-md-6 col-lg-4 subpage-block">
          <ul class="info-list">
            <!-- <li><span class="title">Age</span><span class="value">29</span></li> -->
            <!-- <li><span class="title">Residence</span><span class="value">Australia</span></li> -->
            <li>
              <span class="title">Address</span
              ><span class="value">Atlanta, GA</span>
            </li>
            <li>
              <span class="title">E-Mail</span
              ><span class="value"
                ><a href="mailto:email@example.com"
                  >zakkturner1993@gmail.com</a
                ></span
              >
            </li>
            <li>
              <span class="title">Phone</span
              ><span class="value">317-728-0446</span>
            </li>
            <li>
              <span class="title">Freelance</span
              ><span class="value available">Available</span>
            </li>
          </ul>

          <ul class="social-links">
            <li>
              <a
                class="tip social-button"
                href="https://www.linkedin.com/in/zach-t-1aa273165/"
                title="LinkedIn"
                ><i class="fa fa-linkedin"></i
              ></a>
            </li>
            <!-- Full list of social icons: http://fontawesome.io/icons/#brand -->
            <li>
              <a
                class="tip social-button"
                href="https://github.com/zakkturner"
                title="Github"
                ><i class="fa fa-github"></i
              ></a>
            </li>
            <!-- <li>
              <a class="tip social-button" href="#" title="Google Plus"
                ><i class="fa fa-google-plus"></i
              ></a>
            </li> -->
            <!-- <li>
              <a class="tip social-button" href="#" title="Youtube"
                ><i class="fa fa-youtube"></i
              ></a>
            </li>
            <li>
              <a class="tip social-button" href="#" title="Instagram"
                ><i class="fa fa-instagram"></i
              ></a>
            </li> -->
            <!--<li><a class="tip social-button" href="#" title="last.fm"><i class="fa fa-lastfm"></i></a></li>-->
            <!--<li><a class="tip social-button" href="#" title="Dribbble"><i class="fa fa-dribbble"></i></a></li>-->
          </ul>
        </div>
      </div>

      <!-- Services block -->
      <div class="block-title">
        <h3>Services</h3>
      </div>
      <Services />

      <!-- End of Services block -->

      <!-- Clients block -->
      <!-- <div class="block-title">
            <h3>Clients</h3>
          </div>

          <div class="row">
            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_1.png" alt="image"></a>
              </div>
            </div>

            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="image"></a>
              </div>
            </div>

            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="image"></a>
              </div>
            </div>

            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="image"></a>
              </div>
            </div>

            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="image"></a>
              </div>
            </div>

            <div class="col-sm-4 col-md-2 subpage-block">
              <div class="client-block">
                <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="image"></a>
              </div>
            </div>
          </div> -->
      <!-- End of Clients block -->

      <!-- Press Block -->
      <Press />
      <!-- End of Press -->
      <!-- Fun facts block -->

      <!-- End of Fun fucts block -->
    </div>
  </section>
</template>
<script setup lang="ts">
import Services from "../about/Services.vue";
import Press from "../about/Press.vue";
</script>
<style lang=""></style>
