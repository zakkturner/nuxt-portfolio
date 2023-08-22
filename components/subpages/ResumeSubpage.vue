<template>
  <section class="pt-page pt-page-3" data-id="resume">
    <div class="border-block-top-110"></div>
    <div class="section-inner">
      <div class="section-title-block">
        <div class="section-title-wrapper">
          <h2 class="section-title">Resume</h2>
          <h5 class="section-description">4 Years of Experience</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6 col-md-4 subpage-block">
          <div class="block-title">
            <h3>Experience</h3>
          </div>
          <div class="timeline">
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">Nov 2022 - Apr 2023</h5>
              <h4 class="event-name">Frontend-developer</h4>
              <span class="event-description">Comb's Enterprises</span>
              <p>
                Frontend development with React and Typescript to create a
                marketplace for minority businesses.
              </p>
            </div>
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">Nov 2021 - Nov 2022</h5>
              <h4 class="event-name">Frontend Developer</h4>
              <span class="event-description">Delta Airlines</span>
              <p>
                UI Development creating converting figma designs into high
                visibility sites including: https://www.business.delta.com and
                https://www.deltastarbucks.com/content/starbucks/en/overview.html
              </p>
            </div>
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">March 2021 - Nov 2021</h5>
              <h4 class="event-name">Frontend Developer</h4>
              <span class="event-description">Incident IQ</span>
              <p>
                Marketing development such as creating HTML Emails, A/B landing
                pages with Unbounce, and creating and managing Wordpress themes
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 subpage-block">
          <div class="block-title">
            <h3>Experience cont.</h3>
          </div>
          <div class="timeline">
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">Sept 2019 - March 2021</h5>
              <h4 class="event-name">Shopify developer</h4>
              <span class="event-description">j5create</span>
              <p>
                Shopify theme development and Nuxt/Vue development for a
                microsite.
              </p>
            </div>
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">Jan 2019 - Present</h5>
              <h4 class="event-name">Web Developer</h4>
              <span class="event-description">Freelance</span>
              <p>
                Working on various projects with technologies including React,
                Vue, Laravel, Wordpress, and Shopify
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 subpage-block">
          <div class="block-title">
            <h3>Education</h3>
          </div>
          <div class="timeline">
            <!-- Single event -->
            <div class="timeline-event te-primary">
              <h5 class="event-date">2015</h5>
              <h4 class="event-name">Telecommunications</h4>
              <span class="event-description">Ball State University</span>
              <!-- <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12">
          <div class="download-cv-block">
            <button class="button" @click.prevent="downloadFile">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import axios from "axios";
import FileSaver from "file-saver";

const downloadFile = async () => {
  try {
    const response = await axios.get("/resume/Zach_Turner_Resume.pdf", {
      responseType: "blob",
    });
    const fileName = "Zachary_Turner_Resume.pdf";
    FileSaver.saveAs(response.data, fileName);
  } catch (error) {
    console.error("Error downloading file: ", error);
  }
};
</script>
<style lang=""></style>
