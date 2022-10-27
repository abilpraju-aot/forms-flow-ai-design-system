
import { createProgressBar } from './components/Progress';

export default {
  title: 'Components/Progress',
  argTypes: {
    label: { control: 'text' },
    width : {control: 'number'},
    height: {control: 'number'}
  },
}

const Template= (args) => {
  return createProgressBar(args);
};

export const Success = Template.bind({});
Success.args = {
  type: "forms-flow-progress-bar ",
  label:  "25%",
  width : 20
};

export const  Warning = Template.bind({});
Warning.args = {
    type: "forms-flow-progress-bar-warning",
    label:  "25%",
    width : 20
};


export const Danger = Template.bind({});
Danger.args = {
    type: "forms-flow-progress-bar-danger",
    label:  "25%",
    width : 20
};

// export const SecondaryOutline = Template.bind({});
// SecondaryOutline.args = {
//   label: 'Button',
//   type: 'forms-flow-btn-secondary-outline'
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   type: 'forms-flow-btn-danger',
//   label: 'Button',
// };

// export const DangerOutline = Template.bind({});
// DangerOutline.args = {
//   type: 'forms-flow-btn-danger-outline',
//   label: 'Button',
// };
