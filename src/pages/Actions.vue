<template>
  <Layout class="articles-page">

    <div class="cover">
     <div class="cover__container">
       <h1 class="text-highlight"><Blog class="h1__icon" focusable="false" aria-hidden="true"/>Actions</h1>
      </div>
    </div>

    <div class="content">
        <section class="articles">
          <article v-for="{ node } in $page.allAction.edges" :key="node.id">
            <g-image :src="node.illustration" focusable="false" alt="" aria-hidden="true"/>
            <p class="articles__date">{{ node.publishedDate }}</p>
            <h2><g-link :to="node.path">{{ node.title }}</g-link></h2>
            <p>{{ node.slug }}</p>
            <p>{{ node.porteur }}</p>
          </article>
        </section>
    </div>

  </Layout>
</template>

<page-query>

  query {
    allAction (sortBy: "publishedDate", order: DESC) {
      edges {
        node {
          id
          title
          cat
          slug
          publishedDate (format: "D MMMM YYYY", locale : "fr")
          tags{
            id
            path
          }
          ville
          codePostal
          codeCommune
          porteur
          partenaires
          document
          description
          path          
        }
      }
    }
  }

</page-query>

<script>

  import Blog from "~/assets/images/blog.svg"

  export default {
    components: {
      Blog,
    },
    metaInfo: {
      title: "Actions",
      meta: [{
        name: "description",
        content: "Partager vos projets de coopération de ressources et outils numérique entre ESMS."
      },
      {
        property: "og:title",
        content: "Actions - CMCO-ESMS"
      },
      {
        property: "og:description",
        content: "Partager vos projets de coopération de ressources et outils numérique entre ESMS .."
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@Design_Gouv"
      },
      {
        name: "twitter:title",
        content: "Actions - COCM-ESMS"
      },
      {
        name: "twitter:description",
        content: "Partager vos projets de coopération de ressources et outils numérique entre ESMS."
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr/designGouv.png"
      }],
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .articles-page {

    .cover {
      margin-bottom: 80px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 48px;
      }

    }

    h2 {
      a {
        border-bottom: none !important;
      }
    }

  }

</style>
