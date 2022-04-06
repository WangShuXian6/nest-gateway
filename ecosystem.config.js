module.exports = {
  apps: [
    {
      name: 'gateway',
      script: './dist/main.js',
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
      source_map_support: false,
    },
  ],
};
