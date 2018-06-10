System.config({
  map: {
    // System.js files
    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    //'text': 'libs/systemjs-plugin-text/text.js',

    // App files
    'main': './src/main.js',
    'myRouter': './src/my_router.js',
    // templates
   // 'homeTemplate': 'templates/home.handlebars',

   // Library files
   'jquery':'./node_modules/jquery/dist/jquery.js',
  },
  transpiler: 'plugin-babel',
  packages: {
    '/':{
      defaultExtension: 'js'
    }
  }
});

System.import('main');
