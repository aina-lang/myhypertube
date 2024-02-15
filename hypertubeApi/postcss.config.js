module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('tailwindcss'),
    require('autoprefixer'),
    // Autres plugins PostCSS peuvent être ajoutés ici
  ]
};
