<template>

  <footer role="contentinfo" >
    <!-- 
    <div class="jobs-banner" v-if="$static.allJob.edges.length > 0">
        <p class="jobs-banner__text"><font-awesome :icon="['fas', 'bullhorn']"  aria-hidden="true" height="24px" width="24px" size="lg" class="jobs-banner__icon"/> Nous recrutons ! <g-link to="/recrutement/">Voir les postes ouverts <font-awesome :icon="['fas', 'arrow-right']" transform="shrink-4" aria-hidden="true" height="16px" width="16px"/></g-link></p>
    </div>
    -->
    <div class="footer">
      <img src="/assets/images/logo.png" width="120" height="111" alt="Coopération et mutualisation des compténces et outils entre ESMS."/>

      <div class="footer__content">

        <div class="footer__description">

          <g-link to="/" class="footer__logo" title="CoMuCO - Retour à l’accueil">
            <p class="footer__dg-title text-highlight">CoMuCO</p>
            <p class="footer__dg-tagline">Par le GT #4 du Conseil du Numérique en Santé</p>
          </g-link>
          <p>
            CoMuCO est propulsé par la <a href="https://numerique.gouv.fr" title="direction interministérielle du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">direction interministérielle du numérique</a>.</br>
            Le <a href="https://github.com/DISIC/design.numerique.gouv.fr" title="code source - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">code source</a> est disponible en licence libre.
          </p>
        </div>

        <div class="footer__websites">
          <div>
            <p>CoMuCO</p>
            <ul>
              <li><g-link to="/equipe/">Notre équipe</g-link></li>
              <li><g-link to="/contact/">Contact</g-link></li>
              <li><a href="https://twitter.com/design_gouv/" title="Twitter - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Twitter <font-awesome  width="0" :icon="['fab', 'twitter']"/>
                </a></li>
              <li><a href="https://www.instagram.com/design_gouv/" title="Instagram - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Instagram <font-awesome  width="0" :icon="['fab', 'instagram']"/>
                </a></li>
              <li><a href="https://www.youtube.com/channel/UCMH9lC8dSlRVRfb0LoKuJZw" title="Youtube - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Youtube <font-awesome  width="0" :icon="['fab', 'youtube']"/>
                </a></li>
              <li><a href="https://www.linkedin.com/company/designgouv" title="Linkedin - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">
                Linkedin <font-awesome  width="0" :icon="['fab', 'linkedin']"/>
                </a></li>
            </ul>
          </div>
          <div>
            <p>Services</p>
            <ul>
              <li><a href="https://observatoire.numerique.gouv.fr" title="L’observatoire du numérique - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">L’Observatoire du numérique</a></li>
              <li><a href="https://france-relance.transformation.gouv.fr/61a2-ameliorer-lexperience-usager-dans-une-demarch" title="Notre guichet France Relance - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">Notre guichet France Relance</a></li>
            </ul>
          </div>
          <div>
            <p>Autres univers</p>
            <ul>
              <li><a href="https://franceconnect.gouv.fr" title="FranceConnect - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">FranceConnect</a></li>
              <li><a href="https://etalab.gouv.fr" title="etalab.gouv.fr - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">etalab.gouv.fr</a></li>
              <li><a href="https://beta.gouv.fr" title="beta.gouv.fr - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">beta.gouv.fr</a></li>
              <li><a href="https://data.gouv.fr" title="data.gouv.fr - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">data.gouv.fr</a></li>
              <li><a href="https://api.gouv.fr" title="api.gouv.fr - Nouvelle fenêtre" target="_blank" rel="noreferrer noopener">api.gouv.fr</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__sites-publics">
          <ul>
            <li><g-link to="/misc/accessibilite/">Accessibilité : totalement conforme</g-link></li>
            <li><g-link to="/misc/donnees-personnelles/">Données personnelles</g-link></li>
            <li><g-link to="/misc/mentions-legales/">Mentions légales</g-link></li>
            <li><g-link to="/misc/plan-du-site/">Plan du site</g-link></li>
          </ul>
        </div>

      </div>
    </div>

  </footer>

</template>

<script>

  export default {
    name: 'Footer'
  }

</script>


<static-query>

  query {
    allJob (sortBy: "title", order: ASC) {
      edges {
        node {
        	id
          title
          type
          path
        }
      }
    }
  }

</static-query>


<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  footer {
    margin-top: 6rem;

    @media only screen and (max-width: $mobile-max-width) {
      margin-top: 4rem;
    }

    .jobs-banner {
      background-color: $light-gray;
      padding: 1rem;
      position: relative;

      @media only screen and (max-width: $mobile-max-width) {
        padding: 1rem;
      }

      &__text {
        max-width: 640px;
        text-align: center;
        margin: auto;
        font-weight: bold;

        a {
          border-bottom: none !important;
          margin-left: 1rem;
          font-weight: normal;

          @media only screen and (max-width: $mobile-max-width) {
            display: block;
            margin-top: 0.5rem;
          }

          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }
      }

      &__icon {
        color: $red;
        margin-right: 0.5rem;
      }
    }

    .footer {
      padding: 2rem 1.25rem;
      border-top: 1px solid $gray;
      color: $black;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      a {
        border-bottom: none !important;
      }

      .footer__description a.footer__logo {
        display: inline-block;
        text-decoration: none;
      }

      a.footer__logo {
        box-shadow: none;
      }

      @media only screen and (max-width: $mobile-max-width) {
        padding: 1.5rem 0.75rem;
        display: inline-block;
      }

      .footer__dg-title {
        margin: 0;
        font-size: 2rem;
        font-weight: 800;
        color: $primary;
        font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;

        @media only screen and (max-width: $mobile-max-width) {
          font-size: 1.5rem;
          margin-top: 16px;
        }
      }

      .footer__dg-tagline {
        margin-left: 0.125rem;
        margin-top: -0.125rem;
        font-weight: bold;
        color: var(--g700);
        font-size: 0.875rem;
        font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
      }

      .footer__content {
        max-width: 8°;
        margin: 0px 40px 0px 40px;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 0;
        }
      }

      .footer__description {
        max-width: 640px;
      }

      .footer__websites {
        margin: 16px 0 32px 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        div {
          margin-right: 48px;
        }

        ul {
          padding: 0;

          li {
            list-style-type: none;
          }
        }
      }

      .footer__sites-publics {
        margin-top: 12px;

        a {
          font-size: 0.875rem;
        }

        ul {
          padding: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          li {
            list-style-type: none;
            margin-right: 24px;
            display: inline-flex;
          }
        }
      }
    }
  }

</style>
