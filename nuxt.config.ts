// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      link:[
        {rel:'stylesheet', href: '/css/bootstrap.css'},
        {rel:'stylesheet', href: '/css/normalize.css'},
        {rel:'stylesheet', href: '/css/animate.css'},
        {rel:'stylesheet', href: '/css/transition-animations.css'},
        {rel:'stylesheet', href: '/css/jquery.mCustomScrollbar.min.css'},
        {rel:'stylesheet', href: '/css/owl.carousel.css'},
        {rel:'stylesheet', href: '/css/magnific-popup.css'},
        {rel:'stylesheet', href: '/css/main.css'},
      ],
      script:[
        {src: '/js/jquery-2.1.3.min.js'},
        {src: '/js/modernizr.custom.js'},
        {src: '/js/bootstrap.min.js', body: true},
        {src: '/js/pages-switcher.js', body: true},
        {src: '/js/imagesloaded.pkgd.min.js', body: true},
        {src: '/js/validator.js', body: true},
        {src: '/js/jquery.shuffle.min.js', body: true},
        {src: '/js/masonry.pkgd.min.js', body: true},
        {src: '/js/owl.carousel.min.js', body: true},
        {src: '/js/jquery.magnific-popup.min.js', body: true},
        {src: '/js/jquery.mCustomScrollbar.concat.min.js', body: true},
        {src: '/js/tilt.jquery.min.js', body: true},
        {src: '/js/jquery.hoverdir.js', body: true},
        {src: '/js/main.js', body: true},
      ]
    }
  }
})
