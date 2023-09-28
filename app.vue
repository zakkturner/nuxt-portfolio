<template>
  <div class="preloader">
    <div class="preloader-animation">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </div>
  <ClientOnly>
    <div id="page" class="page template-style-dark">
      <!-- Header -->
      <the-header></the-header>

      <!-- /Header -->

      <!-- Mobile Header -->
      <the-mobile-header></the-mobile-header>
      <!-- /Mobile Header -->

      <!-- Arrows Nav -->
      <arrow-nav></arrow-nav>
      <!-- /Arrows Nav -->

      <!-- Main Content -->
      <div id="main" class="site-main">
        <!-- Page changer wrapper -->
        <div
          class="pt-wrapper"
          style="background-image: url(images/main_bg_light.jpg)"
        >
          <!-- Subpages -->
          <div class="subpages">
            <!-- Home Subpage -->
            <HomeSubpage />
            <!-- End of Home Subpage -->

            <!-- About Me Subpage -->
            <AboutSubpage />
            <!-- End of About Me Subpage -->

            <!-- Resume Subpage -->
            <ResumeSubpage />
            <!-- End Resume Subpage -->

            <!-- Portfolio Subpage -->
            <PortfolioSubpage />
            <!-- /Portfolio Subpage -->

            <!-- Contact Subpage -->
            <ContactSubpage />
            <!-- End Contact Subpage -->
          </div>
        </div>
        <!-- /Page changer wrapper -->
      </div>
      <!-- /Main Content -->
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import TheHeader from "~/components/core/headers/TheHeader.vue";
import TheMobileHeader from "~/components/core/headers/TheMobileHeader.vue";
import HomeSubpage from "~/components/subpages/HomeSubpage.vue";
import ResumeSubpage from "~/components/subpages/ResumeSubpage.vue";
import AboutSubpage from "~/components/subpages/AboutSubpage.vue";
import ContactSubpage from "~/components/subpages/ContactSubpage.vue";
import PortfolioSubpage from "~/components/subpages/PortfolioSubpage.vue";
import ArrowNav from "~/components/core/navigation/ArrowNav.vue";
</script>
<style>
.page {
  height: 100vh;
}
</style>
