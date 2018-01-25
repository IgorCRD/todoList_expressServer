module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: "airbnb-base",
  rules: {
    indent: ["error", 4]
  },
  env: {
    node: true
  }
};
