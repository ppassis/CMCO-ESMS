<template>
  <div>

    <SkipLink/>

    <div v-show="$i18n.locale == 'en-gb' " class="if-english">
      <g-link to="/en/about" >
        Don't speak french? Take a quick tour of what we do
      </g-link>
    </div>

    <Header />

    <main class="layout" id="main" role="main">
      <slot/>
      <Newsletter v-if="!hideNewsletter"/>
      <Offer v-if="showServices"/>
    </main>

    <Footer />

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Header from "~/components/Header.vue"
  import Newsletter from "~/components/messages/Newsletter.vue"
  import Offer from "~/components/messages/Offer.vue"
  import Footer from "~/components/Footer.vue"
  import SkipLink from "~/components/SkipLink.vue"

  export default {
    components: {
      Header,
      Newsletter,
      Offer,
      Footer,
      SkipLink,
    },
    props: {
      hideNewsletter: {
        default: false,
        type: Boolean
      },
      showServices: {
        default: false,
        type: Boolean
      },
    },
    mounted () {
      let src = "/assets/js/all.min.js"

      let dsfr = document.createElement('script');
      dsfr.type = "text/javascript";
      dsfr.src = src;

      let scripts = document.querySelectorAll('[src="' + src + '"]');
      if (scripts.length > 0) {
        scripts[0].remove();
      }

      document.body.appendChild(dsfr);
    }
  }
</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/roboto-v27-latin-regular.woff") format("woff2"),
         url("../assets/fonts/roboto-v27-latin-regular.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: url("../assets/fonts/roboto-v27-latin-500.woff") format("woff2"),
         url("../assets/fonts/roboto-v27-latin-500.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/roboto-v27-latin-700.woff") format("woff2"),
         url("../assets/fonts/roboto-v27-latin-700.woff2") format("woff");
    font-display: fallback;
  }
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/noto-sans-v12-latin-regular.woff") format("woff2"),
         url("../assets/fonts/noto-sans-v12-latin-regular.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 400;
    src: url("../assets/fonts/noto-sans-v12-latin-italic.woff") format("woff2"),
         url("../assets/fonts/noto-sans-v12-latin-italic.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    src: url("../assets/fonts/noto-sans-v12-latin-700.woff") format("woff2"),
         url("../assets/fonts/noto-sans-v12-latin-700.woff2") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 700;
    src: url("../assets/fonts/noto-sans-v12-latin-700italic.woff") format("woff2"),
         url("../assets/fonts/noto-sans-v12-latin-700italic.woff2") format("woff");
    font-display: fallback;
  }

  .if-english {
    background: $light-gray;
    text-align: center;

    a {
      display: block;
      border: 0;
      font-weight: bold;
      padding: 15px;
    }
  }

  .layout {
    max-width: 78.75vw;
    margin: 0 auto;
    padding: 0 30px;

    @media only screen and (max-width: $mobile-max-width) {
      padding: 0 12px;
    }

    *, ::after, ::before {
      box-sizing: unset;
    }
  }

</style>
