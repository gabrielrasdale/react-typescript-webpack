module.exports = {
    entry: [
    "./src/index.tsx"
  ],
    output: {
    path: __dirname + "/build/",
    publicPath: "/build/",
    filename: "app.js"
  },
    resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
   module: {
    loaders: [
        {
          test: /\.tsx?$/,
          loaders: ['ts-loader'],
          exclude: /node_modules/
        }
      ]
  },
}