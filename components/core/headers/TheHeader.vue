<template>
  <header id="site_header" class="header mobile-menu-hide header-color-dark">
    <div class="my-photo tilt-effect">
      <img src="/images/me.png" alt="image" />
    </div>

    <div class="site-title-block">
      <h1 class="site-title">Zach Turner</h1>
    </div>

    <!-- Navigation -->
    <div class="site-nav">
      <!-- Main menu -->
      <ul id="nav" class="site-main-menu">
        <li>
          <a class="pt-trigger" href="#home" data-animation="21"
            ><i class="menu-icon pe-7s-icon pe-7s-home"></i>Home</a
          ><!-- href value = data-id without # of .pt-page. -->
        </li>
        <li>
          <a class="pt-trigger" href="#about_me" data-animation="17"
            ><i class="menu-icon pe-7s-icon pe-7s-user"></i>About me</a
          >
        </li>
        <li>
          <a class="pt-trigger" href="#resume" data-animation="18"
            ><i class="menu-icon pe-7s-icon pe-7s-id"></i>Resume</a
          >
        </li>
        <li>
          <a class="pt-trigger" href="#portfolio" data-animation="19"
            ><i class="menu-icon pe-7s-icon pe-7s-portfolio"></i>Portfolio</a
          >
        </li>
        <li>
          <a class="pt-trigger" href="#contact" data-animation="20"
            ><i class="menu-icon pe-7s-icon pe-7s-mail"></i>Contact</a
          >
        </li>
      </ul>
      <!-- /Main menu -->
    </div>
    <!-- Navigation -->
  </header>
</template>

<script setup lang="ts"></script>
<style lang=""></style>
