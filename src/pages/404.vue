<template>
  <Layout>
    <div class="rf-container">
      <div class="cover">
        <div class="cover__container">
        <h1>Oups, <span class="text-highlight">cette page n'existe pas</span></h1>
        <p class="cover__subtitle">Vous pouvez <a href="./">retourner à l'accueil</a>, consulter le <a href="/misc/plan-du-site/">plan du site</a></p><br />
        <RideIllustration class="illustration" focusable="false" aria-hidden="true"/>
      </div>
      </div>      
    </div>
  </Layout>
</template>


<script>

  import RideIllustration from "~/assets/images/cry.svg";

  export default {
    components: {
      RideIllustration,
    },
    metaInfo: {
      title: "Erreur 404",
      meta: [{
          name: 'description',
          content: "Oups, cette page n'existe pas."
        }],
      }
    }

</script>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

</style>
