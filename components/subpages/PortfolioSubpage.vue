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
        <ul id="portfolio_filters" class="portfolio-filters">
          <li class="active">
            <a class="filter btn btn-sm btn-link active" data-group="all"
              >All</a
            >
          </li>
          <li>
            <a class="filter btn btn-sm btn-link" data-group="frontend"
              >Frontend</a
            >
          </li>
          <li>
            <a class="filter btn btn-sm btn-link" data-group="ecommerce"
              >Ecommerce</a
            >
          </li>
          <li>
            <a class="filter btn btn-sm btn-link" data-group="wordpress"
              >Wordpress/PHP</a
            >
          </li>
        </ul>
        <!-- End of Portfolio filter -->

        <!-- Portfolio Grid -->
        <div
          id="portfolio_grid"
          class="portfolio-grid portfolio-masonry masonry-grid-3"
        >
          <!-- Portfolio Item 1 -->
          <PortfolioItem
            v-for="project in projects"
            key="project.id"
            :name="project.name"
            :description="project.description"
            :short_description="project.short_description"
            :categories="project.categories"
            :image="project.img_src"
            :site="project.site"
          />
          <!-- /Portfolio Item 1 -->
        </div>
        <!-- /Portfolio Grid -->
      </div>
      <!-- /Portfolio Content -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import PortfolioItem from "../portfolio/PortfolioItem.vue";
import projects from "~/data/projects";
</script>
<style lang=""></style>
