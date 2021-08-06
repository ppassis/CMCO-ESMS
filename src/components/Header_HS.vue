<template>
<header role="banner" class="rf-header">
    <div class="rf-container rf_container__header">
        <div class="rf-header__body">
            <div class="rf-header__body-row">
                <div class="rf-header__brand">
                    <div class="rf-header__brand-top">
                        <div class="rf-header__logo">
                            <img src="/assets/images/logo.png" width="96" height="89" class="header__logo-rf" alt="Portail de coopération et mutualisation de compétences et outils entre ESMS."/>
                        </div>
                        <div class="rf-header__navbar">
                            <button class="rf-btn--search rf-btn" data-rf-opened="false" aria-controls="modal-866" title="Rechercher">
                                Rechercher
                            </button>
                            <button class="rf-btn--menu rf-btn" data-rf-opened="false" aria-controls="modal-870" aria-haspopup="menu" title="Menu" id="rf-btn-menu-mobile-3">
                                Menu
                            </button>
                        </div>
                    </div>
                    <div class="rf-header__service">
                        <a href="/" title="Accueil - [À MODIFIER | Nom du site / service]">
                            <p class="rf-header__service-title">Nom du site / service</p>
                        </a>
                        <p class="rf-header__service-tagline">baseline - précisions sur l‘organisation</p>
                    </div>
                </div>
                <div class="rf-header__tools">
                    <div class="rf-header__tools-links">
                        <ul class="rf-links-group">
                            <li>
                                <a class="rf-link rf-fi-add-circle-line" href="#">Créer un espace</a>
                            </li>
                            <li>
                                <a class="rf-fi-lock-line" href="#">Se connecter</a>
                            </li>
                            <li>
                                <a class="rf-link rf-fi-account-line" href="#">S’enregistrer</a>
                            </li>
                        </ul>
                    </div>
                    <div class="rf-header__search rf-modal" id="modal-866">
                        <div class="rf-container rf-container-lg--fluid">
                            <button class="rf-link--close rf-link" aria-controls="modal-866">Fermer</button>
                            <div class="rf-search-bar" id="search-865" role="search">
                                <label class="rf-label" for="search-865-input">Recherche
                                </label>
                                <input class="rf-input" placeholder="Rechercher" type="search" id="search-865-input" name="search-865-input">
                                <button class="rf-btn" title="Rechercher">
                                    Rechercher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="rf-header__menu rf-modal" id="modal-870" aria-labelledby="rf-btn-menu-mobile-3">
        <div class="rf-container">
            <button class="rf-link--close rf-link" aria-controls="modal-870">Fermer</button>
            <div class="rf-header__menu-links"></div>
            <nav class="rf-nav" id="navigation-869" role="navigation" aria-label="Menu principal">
                <ul class="rf-nav__list">
                    <li class="rf-nav__item">
                        <a class="rf-nav__link" href="#" target="_self">accès direct</a>
                    </li>
                    <li class="rf-nav__item">
                        <a class="rf-nav__link" href="#" target="_self">accès direct</a>
                    </li>
                    <li class="rf-nav__item">
                        <a class="rf-nav__link" href="#" target="_self">accès direct</a>
                    </li>
                    <li class="rf-nav__item">
                        <a class="rf-nav__link" href="#" target="_self">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
</template>

<script>
  import Navigation from "~/components/Navigation.vue"

  export default {
    name: 'Header',
    components: {
        Navigation
    }
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .rf-header {
    box-shadow: none !important;
    margin: 0 0 16px 0 !important;

    .rf-container__header {
      margin: 0;
      max-width: none;
      padding-right: 0rem;
      padding-left: 0rem;

      .rf-header__body {
        max-width: 1080px;
        margin: 0 auto;
        font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;

        .rf-header__brand {
          .header__logo-rf {
            path {
              fill: rgba($primary, 0.5);
            }        
          }
        }

        .rf-service {
          &__title {
            font-size: 2rem;
            font-weight: 800;
            color: $primary;

            @media only screen and (max-width: $mobile-max-width) {
              font-size: 1.5rem;
            }
          }

          &__tagline {
            margin-left: 0.125rem;
            margin-top: 0.125rem;
            font-weight: bold;
          }
        }

        .rf-header__navbar {
          @media only screen and (max-width: $mobile-max-width) {
            margin-top: 0.5rem;
          }

          //Fix menu icon positoin on Safari
          @media not all and (min-resolution:.001dpcm) {
            @supports (-webkit-appearance:none) {
              .rf-btn::before {
                padding-bottom: 32px;
              }
            }
          }
        }
      }
    }
  }

  /*
 * DSFR v1.0.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions)
 */
@charset "UTF-8";

/* ------------------------------------ *\
  NAVIGATION
\* ------------------------------------ */

.rf-nav {
  --link-underline: none;
  --link-blank-font: none;
  --link-blank-content: none;
  --ul-type: none;
  --ol-type: none;
  --ul-start: 0;
  --ol-start: 0;
  --xl-block: 0;
  --li-bottom: 0;
  --ol-content: none;
  z-index: 3500;
}

.rf-nav *:focus, .rf-nav *:focus-visible {
  z-index: 4000;
}

.rf-nav__list {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.rf-nav__list > .rf-nav__link, .rf-nav__list > .rf-nav__btn,
.rf-nav__list > * > .rf-nav__link, .rf-nav__list > * > .rf-nav__btn {
  font-weight: bold;
}

.rf-nav__item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 0 1 auto;
}

.rf-nav__link, .rf-nav__btn {
  width: 100%;
  padding: 0.75rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
}

.rf-nav__link[aria-current], .rf-nav__btn[aria-current] {
  position: relative;
}

.rf-nav__link[aria-current]::before, .rf-nav__btn[aria-current]::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: -1rem;
  width: 2px;
  height: 1.5rem;
  margin-top: -0.75rem;
}

.rf-nav__link {
  display: block;
}

.rf-nav__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.rf-nav__btn::after {
  font: normal normal normal 1rem/1 dsrf-icons;
  content: "";
  margin-left: 0.5rem;
  margin-right: 0;
  transition: transform 0.3s;
}

.rf-nav__btn[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

.rf-menu {
  z-index: 2500;
  margin: 0 -1rem;
  padding: 0 1rem;
  width: auto;
}

.rf-menu *:focus, .rf-menu *:focus-visible {
  z-index: 3000;
}

.rf-menu__list {
  margin: 0;
  padding: 0.5rem 0 1.5rem;
}

.rf-menu__list > *:first-child, .rf-menu__list > *:first-child > .rf-nav__link,
.rf-menu__list > *:hover, .rf-menu__list > *:hover > .rf-nav__link,
.rf-menu__list > *:hover + *, .rf-menu__list > *:hover + * > .rf-nav__link {
  box-shadow: none;
}

.rf-menu .rf-nav__link {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rf-menu .rf-nav__link::before {
  left: 0;
}

.rf-mega-menu {
  z-index: 2500;
  margin: 0 -1rem 1px;
  padding: 0 1rem;
}

.rf-mega-menu *:focus, .rf-mega-menu *:focus-visible {
  z-index: 3000;
}

.rf-mega-menu:focus {
  outline: none;
}

.rf-mega-menu .rf-link--close {
  display: none;
}

.rf-mega-menu .rf-nav__link {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rf-mega-menu .rf-nav__link::before {
  left: 0;
}

.rf-mega-menu__leader {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rf-mega-menu__category {
  margin-bottom: 0;
}

.rf-mega-menu__list {
  padding-bottom: 0.75rem;
}

.rf-nav__link, .rf-nav__btn {
  color: var(--g800);
  background-color: var(--t-plain);
}

:root:not([data-rf-theme="dark"]) .rf-nav__link,
:root:not([data-rf-theme="dark"]) .rf-nav__btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root:not([data-rf-theme="dark"]) [class*="rf-scheme-light"] .rf-nav__link,
:root:not([data-rf-theme="dark"]) [class*="rf-scheme-light"] .rf-nav__btn,
:root:not([data-rf-theme="dark"]) [class*="--scheme-light-"] .rf-nav__link,
:root:not([data-rf-theme="dark"]) [class*="--scheme-light-"] .rf-nav__btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root:not([data-rf-theme="dark"]) [class*="rf-scheme-dark"] .rf-nav__link,
:root:not([data-rf-theme="dark"]) [class*="rf-scheme-dark"] .rf-nav__btn,
:root:not([data-rf-theme="dark"]) [class*="--scheme-dark-"] .rf-nav__link,
:root:not([data-rf-theme="dark"]) [class*="--scheme-dark-"] .rf-nav__btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

:root[data-rf-theme="dark"] .rf-nav__link, .rf-nav__btn {
  --color-hover: var(--block-color-hover);
  --color-active: var(--block-color-active);
}

.rf-nav__link[aria-current], .rf-nav__btn[aria-current] {
  color: var(--bf500);
}

.rf-nav__link[aria-current]::before, .rf-nav__btn[aria-current]::before {
  background-color: var(--bf500);
}

.rf-nav__item {
  box-shadow: inset 0 -1px 0 0 var(--g300);
}

.rf-mega-menu {
  background-color: var(--w-g750);
}

.rf-mega-menu__list {
  box-shadow: 0 1px 0 0 var(--g300);
}

@media (min-width: 62em) {
  .rf-nav__list {
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 -1rem;
  }

  .rf-nav__list > *:first-child:nth-last-child(2) ~ *,
  .rf-nav__list > *:first-child:nth-last-child(3) ~ *,
  .rf-nav__list > *:first-child:nth-last-child(4) ~ * {
    margin-left: 1.25rem;
  }

  .rf-nav__list > .rf-nav__link, .rf-nav__list > .rf-nav__btn,
  .rf-nav__list > * > .rf-nav__link, .rf-nav__list > * > .rf-nav__btn {
    padding: 1rem;
    margin: 0;
    width: auto;
    height: 100%;
    min-height: 3.5rem;
    font-weight: normal;
  }

  .rf-nav__list > .rf-nav__link[aria-current]::before,
  .rf-nav__list > .rf-nav__btn[aria-current]::before,
  .rf-nav__list > * > .rf-nav__link[aria-current]::before,
  .rf-nav__list > * > .rf-nav__btn[aria-current]::before {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: 0;
  }

  .rf-nav__list > .rf-nav__link[aria-current]:not([aria-expanded="true"]),
  .rf-nav__list > .rf-nav__btn[aria-current]:not([aria-expanded="true"]),
  .rf-nav__list > * > .rf-nav__link[aria-current]:not([aria-expanded="true"]),
  .rf-nav__list > * > .rf-nav__btn[aria-current]:not([aria-expanded="true"]) {
    z-index: 3500;
  }

  .rf-nav__item {
    box-shadow: none;
    align-items: flex-start;
  }

  .rf-nav__item--align-right {
    align-items: flex-end;
  }

  .rf-nav__link, .rf-nav__btn {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  .rf-nav__btn {
    padding: 1rem 0.75rem 1rem 1rem;
  }

  .rf-nav__btn {
    justify-content: flex-start;
  }

  .rf-menu {
    position: absolute;
    top: 100%;
    margin-top: -0.25rem;
    padding-top: 0.25rem;
  }

  .rf-menu::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0.25rem 1rem 2rem;
    z-index: -1;
  }

  .rf-menu__list {
    padding: 0 0 2rem;
  }

  .rf-menu__list {
    width: 20rem;
  }

  .rf-menu .rf-nav__link {
    padding: 0.75rem 1rem;
  }

  .rf-menu .rf-nav__link::before {
    left: 0;
  }

  .rf-mega-menu {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    margin: -2px 0 0;
    padding: 0 0 2.25rem;
  }

  .rf-mega-menu > .rf-container::before {
    content: "";
    display: block;
    height: 2px;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 1rem;
  }

  .rf-mega-menu .rf-link--close {
    display: flex;
  }

  .rf-mega-menu .rf-nav__link {
    padding: 0.75rem 1rem;
  }

  .rf-mega-menu .rf-nav__link::before {
    left: 0;
  }

  .rf-mega-menu__leader {
    padding-left: 0;
    padding-right: 0;
  }

  .rf-mega-menu__list {
    box-shadow: none;
  }

  .rf-nav__btn[aria-expanded="true"] {
    color: var(--bf500-plain);
    background-color: var(--bf200-bf300);
  }

  .rf-menu::after {
    background-color: var(--w-g750);
  }

  .rf-menu .rf-nav__link {
    box-shadow: 0 calc(-1rem - 1px) 0 -1rem var(--g300);
  }

  .rf-mega-menu > .rf-container::before {
    background-color: var(--bf200-bf300);
  }

  .rf-mega-menu__category {
    box-shadow: 0 calc(1rem + 1px) 0 -1rem var(--g300);
  }
}

@media (hover: hover) and (pointer: fine) {
  .rf-nav__link:not(a):not(:disabled):hover, a.rf-nav__link[href]:hover,
  a.rf-nav__btn[href]:hover, .rf-nav__btn:not(a):not(:disabled):hover {
    background-image: linear-gradient(0deg, var(--color-hover), var(--color-hover));
  }

  .rf-nav__link:not(a):not(:disabled):active, a.rf-nav__link[href]:active,
  a.rf-nav__btn[href]:active, .rf-nav__btn:not(a):not(:disabled):active {
    background-image: linear-gradient(0deg, var(--color-active), var(--color-active));
  }
}


</style>
