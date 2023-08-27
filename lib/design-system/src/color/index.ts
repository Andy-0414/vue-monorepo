import { reactiveComputed, useDark } from "@vueuse/core";
import { computed } from "vue";
import light from "./light";
import dark from "./dark";

export const isDark = useDark();

export interface IColorTable {
  background: string;
  text: string;
}

export const adaptive = reactiveComputed(() => (isDark.value ? dark : light));
