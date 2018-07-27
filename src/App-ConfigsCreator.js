const fs = require('fs');
const color = require('colors');

function configsCreate(){
    const config = require(process.cwd() +'/App.config.js').configs;
    for(let key of Object.keys(config)){
    
        var arr = config[key];
        for(let key in arr){
            if(typeof arr === "object"){
                try{
                    fs.writeFileSync(arr[key],"",'utf8');
                }catch(e){
                console.error(e);
                }
                process.stdout.write(color.green(`\n \u{1F5CE} ${arr[key]} \u{2713}`));
            }else{
                throw new TypeError("Keys is not objects!");
            }
        
        }
            
        }
        process.exit();
            
}


module.exports = configsCreate;