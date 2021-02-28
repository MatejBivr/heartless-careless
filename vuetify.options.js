import colors from 'vuetify/es5/util/colors'
import AboutIcon from '~/components/icons/AboutIcon'
import CodeIcon from '~/components/icons/CodeIcon'
import ContactIcon from '~/components/icons/ContactIcon'
import FitnessIcon from '~/components/icons/FitnessIcon'
import LifeIcon from '~/components/icons/LifeIcon'

export default {
  customProperties: true,
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#fcbc0d',
        accent: '#FFF',
        secondary: '#707070',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
  icons: {
    values: {
      about: {
        component: AboutIcon,
        props: {
          name: 'about',
        },
      },
      code: {
        component: CodeIcon,
        props: {
          name: 'code',
        },
      },
      contact: {
        component: ContactIcon,
        props: {
          name: 'contact',
        },
      },
      fitness: {
        component: FitnessIcon,
        props: {
          name: 'fitness',
        },
      },
      life: {
        component: LifeIcon,
        props: {
          name: 'life',
        },
      },
    },
  },
}
