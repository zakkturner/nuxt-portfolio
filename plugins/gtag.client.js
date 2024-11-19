
    import VueGtag, { trackRouter } from 'vue-gtag-next'

    export default defineNuxtPlugin((nuxtApp) => {
        const { gtagId } = useRuntimeConfig().public;
        nuxtApp.vueApp.use(VueGtag, {
            property: {
                id: gtagId
            }
        })
        trackRouter(useRouter())
    })