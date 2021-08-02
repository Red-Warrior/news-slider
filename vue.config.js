module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? '/news-slider/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
};
