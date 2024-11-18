<script lang="ts" setup>


import ContactInfo from "~/components/contact/ContactInfo.vue";
import ContactForm from "~/components/contact/ContactForm.vue";
</script>
<template>
  <section class="pt-page pt-page-5" data-id="contact">
    <div class="border-block-top-110"></div>
    <div class="section-inner">
      <div class="section-title-block">
        <div class="section-title-wrapper">
          <h2 class="section-title">Contact</h2>
          <h5 class="section-description">Get in Touch</h5>
        </div>
      </div>

      <div class="row">
        <ContactInfo />
        <ContactForm/>
      </div>
    </div>
  </section>
</template>

