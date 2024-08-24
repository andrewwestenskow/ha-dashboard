import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { globSync } from "glob";

export default {
  input: [...globSync("src/cards/*.ts"), ...globSync("src/views/*.ts")],
  output: {
    format: "es",
    dir: "dist",
  },
  plugins: [
    typescript(),
    resolve(),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts"],
    }),
  ],
};
