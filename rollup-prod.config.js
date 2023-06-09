import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
  ]
};