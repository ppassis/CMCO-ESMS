<template>
  <Layout class="sitemap-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Plan du site</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container cover__container--light">

       <h1>Plan du site</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2><a href="/actions/">la liste des actions de coopération et mutualisation</a></h2>
          <h2><a href="/accessibilite-numerique/">Accessibilité</a></h2>
          <ul>
          <li><a href="/accessibilite-numerique/cadre-legal/">Obligations légales et sanctions</a></li>
          <li><a href="/accessibilite-numerique/RGAA/">Le Référentiel général d'amélioration de l'accessibilité</a></li>
          <li><a href="/accessibilite-numerique/schema-pluriannuel/">Schéma pluriannuel de mise en accessibilité</a></li>
          <li><a href="/accessibilite-numerique/declaration-accessibilite/">Déclaration d'accessibilité</a></li>
          </ul>
          <h2><a href="/outils/">Outils et aides</a></h2>
          <ul>
          <li><a href="/outils/">La FAQ </a></li>
          <li><a href="/outils/checklist-dev/">Le guide</a></li>
          </ul>
          <h2>Et </h2>
          <ul>
            <li><a href="/equipe/">Notre équipe</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/misc/accessibilite/">Accessibilité</a></li>
            <li><a href="/misc/donnees-personnelles/">Données personnelles</a></li>
            <li><a href="/misc/mentions-legales/">Mentions légales</a></li>
          </ul>
        </section>

    </div>

  </Layout>
</template>


<script>

  export default {
    metaInfo: {
      title: "Plan du site",
      meta: [{
        name: "robots",
        content: "index"
      }],
    }
  }

</script>


<style lang="scss">

  .sitemap-page {


  }

</style>
