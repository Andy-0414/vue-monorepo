import Test from "./Test.vue";
import { Meta } from "@storybook/vue3";

export default {
  title: "Example/Test",
  component: Test,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: {},
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
