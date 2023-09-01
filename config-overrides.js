
module.exports = {
    webpack: function (config, env) {
      // Add the target option
      config.target = 'node';
  
      // Return the modified config
      return config;
    },
  };
  