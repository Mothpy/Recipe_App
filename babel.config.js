module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current" }, modules: "commonjs" },
    ],
    [
      "@babel/preset-react",
      {
        // Auto imports the functions JSX transpiles to
        runtime: "automatic",
      }
    ]
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};