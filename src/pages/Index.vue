<template>
  <Layout class="index-page">

    <div class="cover">
      <div class="cover__container">
        <h1><span class="text-highlight">Co</span>opération et <span class="text-highlight">Mu</span>tualisation des <span class="text-highlight">C</span>ompétences et des <span class="text-highlight">O</span>utils entre les établissements et services médico-sociaux.</h1>
        <p class="cover__subtitle">En complément de la feuille de route de la transformation numérique du secteur, notre groupe de travail a conçu et développé un guide pratique pour accompagner vos démarches de mutualisation. Vous trouverez sur ce site des idées et outils pour accompagner vos actions de coopération.</p>
      </div>
    </div>

    <div class="content">

      <Commando/>

      <section class="items">

          <div class="item item--left">
            <div class="item__content">
              <Design focusable="false" class="item__icon" aria-hidden="true"/>
              <h2>Outils numériques</h2>
              <p>
                Proposer ou utiliser des solutions numériques <strong>simples</strong>, <strong>accessibles</strong>, <strong>agréables</strong> et <strong> dédiées</strong> au secteur médico-social.
              </p>
            </div>

           <g-link to="/actions/" class="item__link button button--highlight">
              Les outils et projets mutualisables<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

          <div class="item item--right">
            <div class="item__content">
              <Accessibilite focusable="false" class="item__icon" aria-hidden="true"/>
              <h2>Compétences</h2>
              <p>
                Mutualiser les <strong>compétences</strong> telles qu'un DSI, un RSSI, un développeur ou enore un médiateur numérique entre plusieurs structures.
              </p>
            </div>

            <g-link to="/accessibilite-numerique/" class="item__link button button--highlight">
              Les compétences en détails<font-awesome width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
            </g-link>
          </div>

      </section>

      <section class="bricks">

        <div class="brick brick--left">
          <div class="brick__description">
            <Outils focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Guide</h2>

            <p>
              Nous mettons à votre disposition un guide pour vous éclairer sur les sujets de la <strong>coopération</strong> et de la <strong>mutualisation</strong> de <strong>compétences</strong> et <strong>outils numériques</strong>.
            </p>
          </div>
          <g-link to="/outils/" class="brick__link">
            Accéder au guide<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

        <div class="brick brick--right">
          <div class="brick__description">
            <Formations focusable="false" class="brick__icon" aria-hidden="true"/>

            <h2>Foire aux questions</h2>

            <p>
              De nombreuses questions/réponses sont disponibles, que ce soit pour <strong>se regrouper</strong> autour d'une projet mutualisé ou pour trouver les bonnes <strong>modalités de financement</strong>.
            </p>
          </div>
          <g-link to="/formations/" class="brick__link">
            Voir la FAQ<font-awesome  width="0" class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3"/>
          </g-link>
        </div>

      </section>


      <section class="team">

        <div class="team__title">
          <Equipe focusable="false" class="team__icon" aria-hidden="true"/>
          <h2>Notre équipe</h2>
        </div>

        <div class="team__content">
          <g-image class="team__image" src="~/assets/images/team-photos/equipe.png" alt="L’équipe du groupe de travail sourire aux lèvres"/>
          <div class="team__text">
            <p>Ce site, le guide et la FAQ sont avant tout le fruit du travail d'une équipe, <strong>le Groupe de travail #4 du Conseil du Numérique en Santé</strong>, diverse et heureuse de contribuer aux côtés des acteurs institutionnels à l’accélération du numérique en santé dans le secteur médico-social.</p>
            <g-link to="/equipe/">
              Découvrir l’équipe et notre mission<font-awesome class="button__icon" :icon="['fas', 'arrow-right']" transform="shrink-3" aria-hidden="true" height="16px" width="16px"/>
            </g-link>
          </div>
        </div>

      </section>

    </div>

  </Layout>
</template>


<script>

  import Commando from "~/components/alerts/Commando.vue"
  import Design from "~/assets/images/design.svg"
  import Accessibilite from "~/assets/images/accessibilite.svg"
  import Outils from "~/assets/images/outils.svg"
  import Formations from "~/assets/images/formations.svg"
  import Accompagnement from "~/assets/images/accompagnement.svg"
  import Observatoire from "~/assets/images/observatoire.svg"
  import FranceRelance from "~/assets/images/franceRelance.svg"
  import Equipe from "~/assets/images/equipe.svg"

  export default {
    components: {
      Commando,
      Design,
      Accessibilite,
      Outils,
      Formations,
      Accompagnement,
      Observatoire,
      FranceRelance,
      Equipe
    },
    metaInfo: {
      title: "Accueil",
      meta: [{
        name: "description",
        content: "Partager vos projets de coopération de ressources et outils numérique entre ESMS."
      },
      {
        property: "og:title",
        content: "CMCO-ESMS"
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
        content: "@CoMuCo-ESMS"
      },
      {
        name: "twitter:title",
        content: "CoMuCO - COCM-ESMS"
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

  .index-page {

    .alert {
      margin-bottom: 80px;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: 64px;
      }
    }

    .team {
      position: relative;

      &:hover {
        .team__icon {
          transform: rotate(180deg);
        }
      }

      &__title {
        margin-bottom: 1.5rem;

        h2 {
          display: inline-block;
          padding: 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        height: 2rem;
        width: 2rem;
        margin-bottom: -0.25rem;
        margin-right: 0.75rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          margin-bottom: -6px;
        }
      }

      &__content {
        display: flex;
        align-items: flex-start;
        margin: 0;

        @media only screen and (max-width: $mobile-max-width) {
          display: initial;
        }

        .team__text {
          padding-left: 2rem;

          @media only screen and (max-width: $mobile-max-width) {
            padding: 1rem 0;
          }

          p {
            margin: 0 0 1rem 0;
          }

          a {
            border-bottom: none !important;
            text-align: right;

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

        .team__image {
          max-width: 240px;
        }
      }
    }

    .actions {

      &__title {
        margin-bottom: 1.5rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: flex;
        }

        h2 {
          display: inline-block;
          padding: 0.25rem 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }
      }

      &__icon {
        display: inline-block;
        transition: .2s all;
        min-width: 2rem;
        height: 2rem;
        width: 2rem;
        margin-bottom: -0.25rem;
        margin-right: 0.75rem;

        @media only screen and (max-width: $mobile-max-width) {
          display: inline;
          margin-bottom: -6px;
        }
      }

      &__list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .action {
          position: relative;
          flex-basis: 44%;
          margin: 0 1.5% 1.5rem 1.5%;
          padding-left: 2%;
          border-left: 4px solid $primary;
          list-style: none;


          @media only screen and (max-width: $mobile-max-width) {
            flex-basis: 94%;
            margin: 0 3% 1.5rem 3%;
          }

          h3 {
            margin: 0;

            a {
              border-bottom: none !important;

              &:after {
                position: absolute;
                content: "";
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              }

              svg {
                margin-left: 4px;
                transition: .2s all;
              }
            }
          }

          p {
            margin: 8px 0 0 0;
          }

          &__illustration {
            height: 36px;
            width: 36px;
            background-color: $light-gray;
            border-radius: 50%;
            color: $red;
          }

          &:hover {
            border-left: 4px solid $red;

            h3 {
              color: $primary;

              svg {
                margin-left: 12px;
              }
            }
          }
        }
      }
    }

    .bricks {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .brick {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 1;
        flex-basis: 49%;
        margin-bottom: 24px;
        background-color: $light-gray;
        border-radius: 32px;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          margin-bottom: 16px;
        }

        &__description {
          display: inline-block;
          margin: 24px 24px 0 24px;
        }

        &--right {
          margin-left: 0.5%;
        }

        &--left {
          margin-right: 0.5%;
        }

        h2 {
          display: inline-block;
          padding: 4px 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

        &__link {
          margin: 4px 24px 24px 24px;
          text-align: right;
          border: none;
        }

        &__icon {
          display: inline-block;
          transition: .2s all;
          height: 2rem;
          width: 2rem;
          margin-bottom: -0.25rem;
          margin-right: 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            margin-bottom: -6px;
          }
        }

        a {
          border-bottom: none !important;

          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &:hover {
          .brick__icon {
            transform: rotate(180deg);
          }
        }
      }
    }

    .items {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      @media only screen and (max-width: $mobile-max-width) {
        align-items: start;
        margin: 0 0 4rem 0;
      }

      .item {
        position: relative;
        flex-basis: 48%;

        @media only screen and (max-width: $mobile-max-width) {
          flex-basis: 100%;
          flex-grow: 1;
        }

        &--left {
          margin-right: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0 0 3rem 0;
          }
        }

        &--right {
          margin-left: 2%;

          @media only screen and (max-width: $mobile-max-width) {
            margin: 0;
          }
        }

        &__link {
          margin-top: 0.5rem;

          &--disabled {
            font-weight: bold;
            margin-top: 2rem;

            @media only screen and (max-width: $mobile-max-width) {
              font-size: 0.875em;
              margin-top: 1rem;
            }
          }

          &::after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
        }

        &__icon {
          display: inline-block;
          transition: .2s all;
          height: 2rem;
          width: 2rem;
          margin-bottom: -0.25rem;
          margin-right: 0.75rem;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
            margin-bottom: -6px;
          }
        }

        h2 {
          display: inline-block;
          padding: 0;
          margin: 0;

          @media only screen and (max-width: $mobile-max-width) {
            display: inline;
          }
        }

        &:hover, &:focus {
          .item__icon {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

</style>
