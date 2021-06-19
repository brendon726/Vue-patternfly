import {PfGrid, PfGridItem} from "@vue-patternfly/core/src/layouts/Grid";
import {argTypesFromProps} from '@/utils';

export default {
  title: "Layouts/Grid Item",
  component: PfGridItem,
  subcomponents: {PfGrid},
  argTypes: argTypesFromProps(PfGridItem.props),
};

const Template = (args) => ({
  components: { PfGrid, PfGridItem },
  setup() {
    return { args };
  },
  template: `
    <pf-grid gutter>
      <pf-grid-item span="8">
        span = 8
      </pf-grid-item>
      <pf-grid-item span="4" row-span="2">
        span = 4, rowSpan = 2
      </pf-grid-item>
      <pf-grid-item v-bind="args" style="border-color: var(--pf-global--palette--green-300)">
        span = {{ args.span }}, rowSpan = {{ args.rowSpan }}
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
    </pf-grid>
  `,
});

export const Default = Template.bind({});
Default.args = {
  span: 2,
  rowSpan: 3,
};
