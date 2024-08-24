import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { globSync } from "glob";

export default {
  input: [...globSync("src/cards/*.ts"), ...globSync("src/views/*.ts")],
  output: {
    format: "es",
    dir: "dist",
    paths: {
      lit: "https://unpkg.com/lit-element@2.0.1/lit-element.js?module",
    },
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" })],
};
