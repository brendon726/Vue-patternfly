import {
  PfForm,
  PfFormGroup,
  PfFormFieldGroup,
  PfFormFieldGroupHeader,
} from '@vue-patternfly/core/src/components/Form';
import PfPopover from '@vue-patternfly/core/src/components/Popover.vue';
import PfButton from '@vue-patternfly/core/src/components/Button';
import PfTextInput from '@vue-patternfly/core/src/components/TextInput';
import PfHelpIcon from '@vue-patternfly/icons/dist/esm/icons/help-icon';
import PfTrashIcon from '@vue-patternfly/icons/dist/esm/icons/trash-icon';
import PfExclamationCircleIcon from '@vue-patternfly/icons/dist/esm/icons/exclamation-circle-icon';
import { ref } from 'vue';

export default {
  title: 'Components/Form',
  component: PfForm,
  subcomponents: {
    PfFormGroup,
    PfFormFieldGroup,
    PfFormFieldGroupHeader,
  },
};

export const Basic = (args) => ({
  components: { PfForm, PfFormGroup, PfPopover, PfButton, PfHelpIcon, PfTextInput },
  setup() {
    return { args };
  },
  template: `
    <pf-form v-bind="args">
      <pf-form-group label="Name" required field-id="simple-form-name-01" helperText="Please provide your full name">
        <template #labelIcon>
          <pf-popover>
            <template #header>
              <div>
                The <a href="https://schema.org/name" target="_blank">name</a> of a <a href="https://schema.org/Person" target="_blank">Person</a>
              </div>
            </template>

            <template #body>
              <div>
              Often composed of <a href="https://schema.org/givenName" target="_blank">givenName</a> and <a href="https://schema.org/familyName" target="_blank">familyName</a>.
              </div>
            </template>

            <pf-button
              aria-label="More info for name field"
              aria-describedby="simple-form-name-01"
              className="pf-c-form__group-label-help"
            >
              <pf-help-icon no-vertical-align />
            </pf-button>
          </pf-popover>
        </template>

        <pf-text-input required id="simple-form-name-01" name="simple-form-name-01" aria-describedby="simple-form-name-01-helper" />
      </pf-form-group>
    </pf-form>
  `,
});

export const InvalidWithFormAlert = (args) => ({
  components: { PfForm, PfFormGroup, PfPopover, PfButton, PfExclamationCircleIcon, PfTextInput },
  setup() {
    const age = ref('Five');
    return { args, age };
  },
  template: `
    <pf-form v-bind="args">
      <pf-form-group label="Age" label-info="Additional label info" field-id="age" helperTextInvalid="Age has to be a number">
        <template v-if="age === ''" #helperText>
          <pf-exclamation-circle-icon /> Please enter your age
        </template>

        <template #helperTextInvalidIcon>
          <pf-exclamation-circle-icon />
        </template>

        <pf-text-input id="age" pattern="[0-9]+" v-model="age" required name="age" aria-describedby="age" autovalidate="change" />
      </pf-form-group>
    </pf-form>
  `,
});

export const FieldGroup = (args) => ({
  components: { PfForm, PfFormGroup, PfFormFieldGroup, PfFormFieldGroupHeader, PfTextInput, PfButton, PfTrashIcon },
  setup() {
    return { args };
  },
  template: `
    <pf-form v-bind="args">
      <pf-form-group label="Name" required field-id="form-expandable-field-groups-label1">
        <pf-text-input required id="form-expandable-field-groups-label1" name="form-expandable-field-groups-label1" />
      </pf-form-group>

      <pf-form-field-group expandable toggleAriaLabel="Details">
        <template #header>
          <pf-form-field-group-header title="Field group 1" description="Field group 1 description.">
            <pf-button variant="link">Delete all</pf-button>
          </pf-form-field-group-header>
        </template>

        <pf-form-field-group expandable toggleAriaLabel="Details">
          <template #header>
            <pf-form-field-group-header title="Nested field group 1" description="Nested field group 1 description.">
              <pf-button variant="plain" aria-label="Remove">
                <pf-trash-icon />
              </pf-button>
            </pf-form-field-group-header>
          </template>

          <pf-form-group label="City" required field-id="form-expandable-field-groups-city">
            <pf-text-input required id="form-expandable-field-groups-city" name="form-expandable-field-groups-city" />
          </pf-form-group>

          <pf-form-group label="State" required field-id="form-expandable-field-groups-state">
            <pf-text-input required id="form-expandable-field-groups-state" name="form-expandable-field-groups-state" />
          </pf-form-group>
        </pf-form-field-group>

        <pf-form-field-group expandable toggleAriaLabel="Details">
          <template #header>
            <pf-form-field-group-header title="Nested field group 2" description="Nested field group 2 description.">
              <pf-button variant="plain" aria-label="Remove">
                <pf-trash-icon />
              </pf-button>
            </pf-form-field-group-header>
          </template>

          <pf-form-group label="City 2" required field-id="form-expandable-field-groups-city2">
            <pf-text-input required id="form-expandable-field-groups-city2" name="form-expandable-field-groups-city2" />
          </pf-form-group>

          <pf-form-group label="State 2" required field-id="form-expandable-field-groups-state2">
            <pf-text-input required id="form-expandable-field-groups-state2" name="form-expandable-field-groups-state2" />
          </pf-form-group>
        </pf-form-field-group>

        <pf-form-group label="Phone" required field-id="form-expandable-field-groups-phone">
          <pf-text-input required id="form-expandable-field-groups-phone" name="form-expandable-field-groups-phone" />
        </pf-form-group>

        <pf-form-group label="Mobile" required field-id="form-expandable-field-groups-mobile">
          <pf-text-input required id="form-expandable-field-groups-mobile" name="form-expandable-field-groups-mobile" />
        </pf-form-group>
      </pf-form-field-group>

      <pf-form-field-group toggleAriaLabel="Details">
        <template #header>
          <pf-form-field-group-header title="Field group 2 (non-expandable)" description="Field group 2 description.">
            <pf-button variant="link">Delete all</pf-button>
          </pf-form-field-group-header>
        </template>

        <pf-form-group label="Username" required field-id="form-expandable-field-groups-username">
          <pf-text-input required id="form-expandable-field-groups-username" name="form-expandable-field-groups-username" />
        </pf-form-group>

        <pf-form-group label="Nickname" required field-id="form-expandable-field-groups-nickname">
          <pf-text-input required id="form-expandable-field-groups-nickname" name="form-expandable-field-groups-nickname" />
        </pf-form-group>
      </pf-form-field-group>
    </pf-form>
  `,
});
