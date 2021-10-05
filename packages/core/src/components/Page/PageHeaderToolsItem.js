
import styles from '@patternfly/react-styles/css/components/Page/page';

import { breakpointProp, classesFromBreakpointProps } from '../../util.ts';
import { h } from 'vue';

export default {
  name: 'PfPageHeaderToolsItem',

  props: {
    ...breakpointProp('visibility', String, ['', 'hidden', 'visible']),
    selected: Boolean,
  },

  render() {
    return h('div', {
      class: [
        styles.pageHeaderToolsItem,
        classesFromBreakpointProps(this.$props, ['visibility'], styles, { short: true }),
        {
          [styles.modifiers.selected]: this.selected,
        },
      ],
    }, this.$slots);
  },
};
