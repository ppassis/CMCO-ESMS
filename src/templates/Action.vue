<template>
  <Layout class="action-page">

    <div class="cover">

      <nav aria-label="Breadcrumb" class="breadcrumb">
        <ol>
          <li>
            <g-link to="/">Accueil</g-link>
          </li>
          <li>
            <g-link to="/actions/">Actions</g-link>
          </li>
          <li>
            <p aria-current="page">
              <span v-html="cropedTitle" />
            </p>
          </li>
        </ol>
      </nav>

     <div class="cover__container">
        <div class="cover__text">
          <p class="cover__subtitle"><span v-html="$page.action.publishedDate" /></p>
          <h1 v-html="$page.action.title" />
        </div>
      </div>
    </div>

    <div class="content">

      <div v-html="$page.action.content" />

      <div class="tags">
        <g-link class="tags__item" v-for="tag in $page.action.tags" :key="tag.id" :to="tag.path">{{tag.id}}</g-link>
      </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.action.title,
      meta: [{
        name: "description",
        content: this.$page.action.description
      },
      {
        property: "og:title",
        content: this.$page.action.title + " - CoMuCO ESMS"
      },
      {
        property: "og:description",
        content: this.$page.action.description
      },
      {
        property: "og:image",
        content: "https://design.numerique.gouv.fr" 
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@collectif-SI-MS-PACA"
      },
      {
        name: "twitter:title",
        content: this.$page.action.title + " - DesignGouv"
      },
      {
        name: "twitter:description",
        content: this.$page.action.description
      },
      {
        name: "twitter:image",
        content: "https://design.numerique.gouv.fr" 
      }],
    }
  },
  created() {
    this.cropedTitle =
      this.$page.action.title.length > 30 ?
      this.$page.action.title.substring(0, 28) + "..." :
      this.$page.action.title;
  }
}
</script>

<page-query>
query Actions ($id: ID!) {
  action: action (id: $id) {
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
    shortDescription
    longDescription
    content          
  }
}
</page-query>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .action-page {

    .breadcrumb {
      width: 100vw;
      position: relative;
      margin-left: -50vw;
      left: 50%;

      @media only screen and (max-width: $mobile-max-width) {
        margin-top: 8px;
      }

      p {
        display: inline-block;
      }
    }

    .cover {
      margin-top: 0px;
      margin-bottom: 64px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 48px;
      }

      &__container {
        height: 100px;
        padding: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      &__text {
        width: 640px;
        background-color: white;
        padding: 4px 32px 0 32px;
      }

      h1 {
        font-size: 2.5em;
        line-height: 1.2;
        color: $black;
        display: inline-block;
        margin: 8px 0 0 0;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 2em;
          margin: 0;
        }
      }

      &__subtitle {
        margin-top: 8px;
      }
    }

    .content {
      max-width: 640px;

      h2 {
        margin-top: 1.5em;
      }

      .guests { /* special pour l'evenement */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        flex-basis: auto;
        text-align: center;

        > div {
          width: 48%;
        }

      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    .tags {
      margin-top: 3em;

      &__item {
        display: inline-block;
        padding: 2px 10px;
        margin: 0px 12px 12px 0;
        border-radius: 16px;
        border: 2px solid $gray;
        font-size: 0.825em;
        font-weight: 900;
        color: $black;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0px 8px 8px 0;
          font-size: 0.825em;
        }

        &:hover {
          border: 2px solid $primary;
          color: $primary;
        }
      }
    }
  }

</style>
