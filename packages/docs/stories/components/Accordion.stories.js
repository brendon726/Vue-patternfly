import { PfAccordion, PfAccordionItem } from '../../../core/src/components/Accordion';
import { ref } from 'vue';

export default {
  title: "Components/Accordion",
  component: PfAccordion,
  subcomponents: {PfAccordionItem},
  argTypes: {
    level: {
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6],
      },
    },
  },
};

const Template = (args) => ({
  components: { PfAccordion, PfAccordionItem },
  setup() {
    const expanded = ref(null);
    return { args, expanded };
  },
  template: `<pf-accordion v-bind="args">
    <pf-accordion-item title="Item One" :expanded="expanded == 1" @update:expanded="expanded = $event ? 1 : null">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </pf-accordion-item>

    <pf-accordion-item title="Item Two" :expanded="expanded == 2" @update:expanded="expanded = $event ? 2 : null">
      <p>
        Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
        ultrices, faucibus erat id, maximus nunc.
      </p>
    </pf-accordion-item>

    <pf-accordion-item title="Item Three" :expanded="expanded == 3" @update:expanded="expanded = $event ? 3 : null">
      <p>
        Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.
      </p>
    </pf-accordion-item>

    <pf-accordion-item title="Item Four" :expanded="expanded == 4" @update:expanded="expanded = $event ? 4 : null">
      <p>
        Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
        sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
        eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
        pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
        Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
      </p>
    </pf-accordion-item>

    <pf-accordion-item title="Item Five" :expanded="expanded == 5" @update:expanded="expanded = $event ? 5 : null">
      <p>
        Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.
      </p>
    </pf-accordion-item>
  </pf-accordion>`,
});

export const Default = Template.bind({});

export const DefinitionList = Template.bind({});
DefinitionList.args = {
  dl: true,
};