<template>
  <div class="main__menu">
    <v-navigation-drawer
      v-show="
        $vuetify.breakpoint.md ||
        $vuetify.breakpoint.sm ||
        $vuetify.breakpoint.xs
      "
      v-model="drawer"
      :clipped="clipped"
      :width="width"
      absolute
      app
      floating
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="social__container">
        <div v-for="(item, i) in social" :key="i" class="social">
          <a :href="item.url" target="_blank"
            ><img :src="item.icon" :alt="item.icon" class="social__icon"
          /></a>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        v-show="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.sm ||
          $vuetify.breakpoint.xs
        "
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-list
        v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
        class="desktop"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheMenu',
  data() {
    return {
      clipped: true,
      drawer: false,
      height: 'calc(100% - 100px)',
      width: 267,
      items: [
        {
          icon: '$code',
          title: 'Code',
          to: '/code',
        },
        {
          icon: '$fitness',
          title: 'Sport',
          to: '/sport',
        },
        {
          icon: '$life',
          title: 'Life',
          to: '/life',
        },
        {
          icon: '$about',
          title: 'About',
          to: '/about',
        },
        {
          icon: '$contact',
          title: 'Contact',
          to: '/contact',
        },
      ],

      social: [
        // {
        //   icon: require('~/assets/icons/FOOTER ICON/icon_bitchute.svg'),
        //   url: 'https://www.bitchute.com/',
        // },
        // {
        //   icon: require('~/assets/icons/FOOTER ICON/icon_dissenter.svg'),
        //   url: 'https://dissenter.com/',
        // },
        {
          icon: require('~/assets/icons/FOOTER ICON/icon_gab.svg'),
          url: 'https://gab.com/',
        },
        {
          icon: require('~/assets/icons/FOOTER ICON/icon_github.svg'),
          url: 'https://github.com/',
        },
        {
          icon: require('~/assets/icons/FOOTER ICON/icon_minds.svg'),
          url: 'https://www.minds.com/',
        },
        {
          icon: require('~/assets/icons/FOOTER ICON/icon_odysee.svg'),
          url: 'https://odysee.com/',
        },
        {
          icon: require('~/assets/icons/FOOTER ICON/icon_rumble.svg'),
          url: 'https://www.rumble.com/',
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.sm ||
        this.$vuetify.breakpoint.xs
        ? 'Heartless Careless'
        : 'HC'
    },
  },
})
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.main__menu {
  ::v-deep .v-navigation-drawer__content {
    padding-top: 56px;
  }
  .v-toolbar__title {
    font-family: 'mr_dafoe', sans-serif;
    font-size: 28px;
    line-height: 1.4;
    color: map-get($material-dark, text, theme);
    position: relative;
    padding: 0 !important;
    text-align: center;
    width: 100%;
  }
  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    .v-toolbar__title {
      width: unset;
      flex-basis: 90px;
      font-size: 40px;
      padding: 0 !important;
    }
  }
  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    ::v-deep .v-toolbar__content {
      justify-content: center;
    }
  }

  .v-list {
    &.desktop {
      display: flex;
      background-color: transparent;
    }
  }
  .v-list-item {
    padding: 0 20px;

    &__title {
      font-size: 18px;
      line-height: 1.22;
      letter-spacing: 0.54px;
      color: map-get($material-dark, text, primary);
      text-transform: uppercase;
    }
    &__action {
      &:first-child {
        margin-right: 4px;
      }
      ::v-deep svg {
        .cls-fill {
          fill: map-get($material-dark, text, primary);
        }
        .cls-stroke {
          stroke: map-get($material-dark, text, primary);
        }
      }
    }
    &--active {
      .v-list-item__title {
        color: map-get($material-dark, text, theme);
      }
      ::v-deep svg {
        .cls-fill {
          fill: map-get($material-dark, text, theme);
        }
        .cls-stroke {
          stroke: map-get($material-dark, text, theme);
        }
      }
    }
  }
  .desktop {
    .v-list-item--active::before {
      background-color: transparent;
    }
  }
  .social__container {
    display: flex;
    padding: 10px 7px;
  }

  .social {
    margin: 0 7px;
  }

  .social__icon {
    height: 28px;
    width: 28px;
    object-fit: contain;
  }
}
</style>
