import styles from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

import { h, mergeProps, resolveDynamicComponent } from 'vue';

const PfBullseye = (props, { slots, attrs }) => h(resolveDynamicComponent(props.component), mergeProps({ class: styles.bullseye }, attrs), slots.default());

PfBullseye.props = {
  component: {
    type: [String, Object],
    default: 'div',
  },
};

PfBullseye.inheritAttrs = false;

Object.defineProperty(PfBullseye, 'name', { value: 'PfBullseye', writable: false });

export default PfBullseye;
