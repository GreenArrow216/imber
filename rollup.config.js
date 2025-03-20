import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/rain-effect.min.js",
            format: "umd",
            name: "RainEffect",
            plugins: [terser()]
        }
    ]
};
