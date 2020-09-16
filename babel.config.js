const { NODE_ENV } = process.env;

module.exports = function exports(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: [
              'last 2 Chrome versions',
              'last 2 Firefox versions',
              'last 2 Safari versions',
              'last 2 Edge versions'
            ]
          },
          debug: NODE_ENV === 'production'
        }
      ],
      [
        '@babel/preset-typescript',
        {
          allExtensions: true,
          isTSX: true
        }
      ],
      '@babel/preset-react'
    ],
    plugins: ['emotion']
  };
};
