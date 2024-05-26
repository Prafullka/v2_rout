const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
  // publicPath: process.env.NODE_ENV === "production" ? "/v2_rout/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/v2_rout/dist/" : "/",
});
