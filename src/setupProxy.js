const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/eod/",
    createProxyMiddleware({
      target: "https://eodhistoricaldata.com/",
      changeOrigin: true,
    })
  );
};
