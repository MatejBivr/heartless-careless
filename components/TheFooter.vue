<template>
  <v-footer fixed app padless>
    <v-container padless>
      <v-row no-gutters>
        <v-col>
          <div class="social__container">
            <div v-for="(item, i) in social" :key="i" class="social">
              <a :href="item.url" target="_blank"
                ><img :src="item.icon" :alt="item.icon" class="social__icon"
              /></a>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row
        v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
        no-gutters
      >
        <v-col>
          <div class="link__container">
            <a
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
              class="link"
            >
              {{ item.title }}
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="subfooter">
            copyright &copy;
            <span class="subfooter__hc">Heartless Careless</span>
            {{ new Date().getFullYear() }} | designed by
            <a href="somelink">Araleri</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheFooter',
  data() {
    return {
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
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.col {
  display: flex;
  justify-content: center;
}
.container {
  padding: 0;
}
.social__container {
  padding: 19px 0 15px;
  display: flex;
}
@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .social__container {
    padding: 65px 0;
  }
}
.social {
  margin: 0 7px;
  display: block;
}

.social__icon {
  height: 28px;
  width: 28px;
  object-fit: contain;
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .social__icon {
    height: 64px;
    width: 64px;
    object-fit: contain;
  }
}

.link__container {
  flex-basis: 60%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .link {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: map-get($material-dark, text, primary);
    &:hover {
      color: map-get($material-dark, text, theme);
    }
  }
}
.subfooter {
  padding-bottom: 7px;
  font-size: 10px;
  line-height: 1.2;
  text-align: left;
  color: map-get($material-dark, text, primary);
  &__hc {
    font-family: mr_dafoe, sans-serif;
    font-size: 11px;
  }
}
@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .subfooter {
    font-size: 23px;
    line-height: 1.22;
    padding: 58px 0 87px;
    &__hc {
      font-size: 25px;
    }
  }
}
</style>
