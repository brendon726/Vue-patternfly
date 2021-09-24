import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { h } from 'vue';

export default {
  name: 'PfHintFooter',

  render() {
    return h('div', { class: styles.hintFooter }, this.$slots);
  },
};