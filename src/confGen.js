const fs = require('fs');
const color = require('colors');

   
const config = `

 module.exports = { \n

   configs: { \n
      esSupport: ['.babelrc','webpack.config.js'], \n
      taskrunners: ['Gulpfile.js','Gruntfiles.js', 'Rollup.js'],\n
      packagemenegers:['bower.json','yarn.lock'],\n
      testsframeworks:[],\n
      linters:['.eslinrer.js','.eshinter.js'],\n
      deploy:[],\n
      other:['README.md','LICENSE','.gitignore','.evn'] \n
   },
   structure:{
    html: false,
    styles: false,
    views: true,
    styles_src: false,
    typescript: false,
    

  }
 };
`;


function createConfig(){
      fs.writeFile('App.config.js',config,'utf8',(err) => {
        process.stdout.write(color.green(' \u{1F5CE} App.config.js \u{2713}'));
            if (err) throw err;
                 process.exit();
                       
        });
     
  }
  




module.exports = createConfig;