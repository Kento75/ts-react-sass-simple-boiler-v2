const path = require('path');
const rules = [
  /* TypeScript用の設定 */
  {
    // 対象とする拡張子を指定
    test: /\.tsx?/,
    // 対象から外すディレクトリを指定
    exclude: /node_modules/,
    // babelを使用する
    loader: 'babel-loader',
  },
  /* Sass用設定 */
  {
    // 対象とする拡張子を指定
    test: /\.scss$/,
    use: [
      // linkタグへの出力用
      "style-loader",
      // CSSのバンドル設定
      {
        loader: "css-loader",
        options: {
          url: false,
          // // ソースマップの有効化 development と production で勝手に切り替わるのでコメントアウト
          // sourceMap: true,

          // sass-loader と postcss-loader を使用するので 2 を設定
          // ここを参考に設定 https://github.com/webpack-contrib/css-loader#importloaders
          importLoaders: 2,
        }
      },
      "postcss-loader",
      {
        loader: "sass-loader",
        // options: {
        // // ソースマップの有効化 development と production で勝手に切り替わるのでコメントアウト
        //   sourceMap: true,
        // }
      }
    ]
  },
];

module.exports = {
  // ブラウザ環境で使用するためwebをtargetとする
  target: 'web',
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // 起点となるTSXファイル（エントリーポイント）
  entry: './src/index.tsx',
  // ビルド後の出力先設定
  output: {
    // 出力先パス
    path: path.resolve(__dirname, 'build'),
    // ファイル名
    filename: 'bundle.js',
  },
  module: {
    // ビルド時に使用するルール（上で設定）を設定
    rules,
  },
  resolve: {
    // 対象とする拡張子を指定
    extensions: ['.ts', '.tsx', '.js'],
  },
  // webpack-dev-serverの設定
  devServer: {
    // 起点となるパス
    contentBase: './',
    // ポート番号
    port: 5000,
  },
};