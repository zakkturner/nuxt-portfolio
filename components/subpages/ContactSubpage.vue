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
        <div class="col-sm-6 col-md-6 subpage-block">
          <div class="block-title">
            <h3>Get in Touch</h3>
          </div>
          <p>
            Crafting Beautiful and Functional Websites: Let's Connect and Get
            Started!
          </p>
          <div class="contact-info-block">
            <div class="ci-icon">
              <i class="pe-7s-icon pe-7s-map-marker"></i>
            </div>
            <div class="ci-text">
              <h5>Atlanta, GA USA</h5>
            </div>
          </div>
          <div class="contact-info-block">
            <div class="ci-icon">
              <i class="pe-7s-icon pe-7s-mail"></i>
            </div>
            <div class="ci-text">
              <h5>zakkturner1993@gmail.com</h5>
            </div>
          </div>
          <div class="contact-info-block">
            <div class="ci-icon">
              <i class="pe-7s-icon pe-7s-call"></i>
            </div>
            <div class="ci-text">
              <h5>317-728-0446</h5>
            </div>
          </div>
          <div class="contact-info-block">
            <div class="ci-icon">
              <i class="pe-7s-icon pe-7s-check"></i>
            </div>
            <div class="ci-text">
              <h5>Freelance Available</h5>
            </div>
          </div>
        </div>

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
<script lang="ts" setup></script>
<style lang=""></style>
