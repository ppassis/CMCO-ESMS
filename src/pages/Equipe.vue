<template>
  <Layout class="team-page">

    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li>
          <g-link to="/">Accueil</g-link>
        </li>
        <li>
          <span aria-current="page">Notre équipe</span>
        </li>
      </ol>
    </nav>

    <div class="cover">
     <div class="cover__container">

       <h1>Le Groupe de Travail 4 du Conseil du Numérique en Santé</h1>

      </div>
    </div>

    <div class="content">

        <section>
          <h2>Mission</h2>
          <p>
            Parmi les 5 thématiques des groupes de travail du Conseil du Numérique en Santé (CNS), les GT du Médico-Social sont des espaces de travail pour l’écosystème qui ont vocation à identifier et traiter des sujets qui ne sont pas encore couverts par la trajectoire numérique dédiée pour le médico-social et par les travaux actuellement menés par les acteurs institutionnels en charge de la politique du numérique en santé.
          </p>
          <p>
            L’objectif est d’alimenter la feuille de route de transformation numérique du secteur, au travers de la production de livrables concrets, en s’appuyant sur des acteurs de terrain pour que la transformation numérique du médico-social soit la plus en adéquation possible avec les attentes et les vécus des métiers et des usagers.
          </p>
          <p>
            Les GT sont autonomes et regroupent une centaine de participants de différents profils et de différentes régions : des représentants d’ESMS, des professionnels de santé, des industriels, des institutionnels, des Conseils départementaux, des MDPH et CLIC, des associations, des Groupements d'Appui à la e-Santé, etc.
          </p>
          
          <h2>Les livrables du GT #4</h2>
          <ul>
            <li>
              Le guide <a href="https://observatoire.numerique.gouv.fr">démarches de mutualisation</a> également disponible dans les différentes rubriques de la FAQ 
            </li>
            <li>
              Ce site web permettant aux acteurs du médico-social de partager et se regrouper autour d'actions de mutualisation des compétences et des outils numériques 
            </li>
          </ul>
        </section>

        <section>
          <h2>Notre équipe</h2>
          <ul class="team">
            <li v-for="{ node } in team" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" :alt="node.firstName+' '+node.lastName" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>En appui</h2>
          <ul class="team">
            <li v-for="{ node } in external" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" :alt="node.firstName+' '+node.lastName" />
              <h3>{{ node.firstName }} {{ node.lastName }}</h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Le groupe de travail</h2>
          <ul class="team">
            <li v-for="{ node } in commando" :key="node.id">
              <g-image :src="node.photo" quality="100" height="150" width="150" :alt="node.firstName+' '+node.lastName" />
              <h3><g-link :to="'/equipe/' + node.id">{{ node.firstName }} {{ node.lastName }}</g-link></h3>
              <p>{{ node.job_title }}</p>
              <p v-if="node.sub_team_link">
                <g-link :to="node.sub_team_link">{{ node.sub_team }}</g-link>
              </p>
              <p v-else-if="node.sub_team">{{ node.sub_team }}</p>
              <p v-if="node.twitter">
                <g-link :to=" 'https://twitter.com/' + node.twitter">@{{ node.twitter }}</g-link>
              </p>
            </li>
          </ul>
        </section>

    </div>

  </Layout>
</template>

<page-query>

  query {
    allPeople (sortBy: "lastName", order: ASC) {
      edges {
        node {
        	id
          firstName
          lastName
          job_title
          sub_team
          sub_team_link
          twitter
          photo (width: 150, height: 150, quality: 100)
          group
          content
        }
      }
    }
  }

</page-query>

<script>

  export default {
    metaInfo: {
      title: "Équipe",
      meta: [{
        name: "robots",
        content: "noindex"
      }],
    },
    computed: {
      team: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'team')
      },
      external: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'external')
      },
      commando: function () {
        return this.$page.allPeople.edges.filter(edge => edge.node.group === 'commando')
      },
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .team-page {

    .team {
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;

      h3 {
        margin: 4px 0;

        a {
          color: $black;
          border: none;

          &:hover {
            color: $primary;
          }
        }
      }

      li {
        list-style: none;
        text-align: center;
        width: 30%;
        margin: 24px 4px;

        @media only screen and (max-width: $mobile-max-width) {
          width: 46%;
        }

        img {
          border-radius: 50em;
          max-width: 150px;
          margin: 0 auto;
        }

        p {
            margin: 0;
        }
      }
    }
  }

</style>
