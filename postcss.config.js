module.exports = ctx => {
  const plugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('tailwindcss'),
    require('postcss-nested'),
  ]

  if (ctx.env === 'production') {
    console.log("postcss: building for prod");
    plugins.push(
      require('cssnano')({ preset: 'default' }),
      require('autoprefixer')
    )
  } else {
    console.log("postcss: building for dev");
  }

  return { plugins }
}