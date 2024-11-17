<template>
  <section class="pt-page pt-page-4" data-id="portfolio">
    <div class="border-block-top-110"></div>
    <div class="section-inner">
      <div class="section-title-block">
        <div class="section-title-wrapper">
          <h2 class="section-title">Portfolio</h2>
          <h5 class="section-description">My Best Works</h5>
        </div>
      </div>

      <!-- Portfolio Content -->
      <div class="portfolio-content">
        <!-- Portfolio filter -->
      <PortfolioFilters />
        <!-- End of Portfolio filter -->
        <div v-if="loading">
          <h2>Loading...</h2>
        </div>
        <!-- Portfolio Grid -->
       <PortfolioGrid :projects="projects" v-else/>
        <!-- /Portfolio Grid -->
      </div>
      <!-- /Portfolio Content -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import PortfolioItem from "../portfolio/PortfolioItem.vue";
// import projects from "~/data/projects";
import axios from "axios";
import { ref, onMounted } from "vue";
import {Project} from "~/components/types";
import PortfolioFilters from "~/components/portfolio/PortfolioFilters.vue";

const projects = ref<Project[]>([]);
const err = ref(null);
const loading = ref(false);
onMounted(async () => {
  try {
    loading.value = true;

    const response = await axios.get("http://localhost:8000/api/v1/projects");
    projects.value = response.data;
    if(response.status == 200){
      loading.value = false;

    }
    console.log(response.data);
  } catch (e: any) {
    err.value = e.message;
  }
  console.log("Projects", projects.value);
});
</script>
<style lang=""></style>
