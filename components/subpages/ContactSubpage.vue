<script lang="ts" setup>


import ContactInfo from "~/components/contact/ContactInfo.vue";
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
        <contact-info></contact-info>
        <div class="col-sm-6 col-md-6 subpage-block">
          <div class="block-title">
            <h3>Contact Form</h3>
          </div>
          <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="messages"></div>

            <div class="controls">
              <div class="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  required
                  data-error="Name is required."
                />
                <div class="form-control-border"></div>
                <i class="form-control-icon pe-7s-user"></i>
                <div class="help-block with-errors"></div>
              </div>

              <div class="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                  data-error="Valid email is required."
                />
                <div class="form-control-border"></div>
                <i class="form-control-icon pe-7s-mail"></i>
                <div class="help-block with-errors"></div>
              </div>

              <div class="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  class="form-control"
                  placeholder="Message for Me"
                  rows="4"
                  required
                  data-error="Please, leave me a message."
                ></textarea>
                <div class="form-control-border"></div>
                <i class="form-control-icon pe-7s-comment"></i>
                <div class="help-block with-errors"></div>
              </div>

              <input
                type="submit"
                class="button btn-send"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang=""></style>
