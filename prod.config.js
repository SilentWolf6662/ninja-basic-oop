/* jshint esversion: 6 */

import CopyPlugin from "copy-webpack-plugin";
import { ProvidePlugin } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import { resolve } from "path";

//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');




export const mode = "production";
export const watch = true;
export const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    }),
  ],
};
export const plugins = [
  new ProvidePlugin({
    PIXI: "pixi.js",
  }),

  new CopyPlugin({
    patterns: [{ from: "./assets", to: "./assets" }],
    options: {
      concurrency: 100,
    },
  }),
];
export const entry = ["./src/app.js"];
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: [
        /(node_modules)/,
        resolve(__dirname, "browser.js"),
        resolve(__dirname, "bootstrap.js"),
      ],
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },

    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },

    {
      test: /\.(jpg|png|svg)$/,
      loader: "url-loader",
    },

    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
  ],
};
export const devtool = "inline-source-map";
export const output = {
  filename: "bundle.js",
  path: resolve(`${__dirname}/dist`),
};
