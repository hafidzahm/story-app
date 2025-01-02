const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWebpackPluginConfig = {
  meta: {
    viewport:
      "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
    "theme-color": "#4285f4",
  },
  templateParameters: {
    brandName: "Story App",
    navLinks: `
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="favicon.png" alt="" style="max-height: 50px"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tambah Cerita</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bahasa
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Indonesia</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Inggris</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <ul class="navbar-nav d-flex mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link dropdown" href="#">
            <i class="bi bi-person-circle"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
    `,
    footerContent:
      '<p class="text-center text-white mb-0">Made with ❤ by Hafidz</p>',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Beranda",
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/dashboard.html"),
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
