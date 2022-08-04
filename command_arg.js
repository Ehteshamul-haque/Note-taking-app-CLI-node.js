const yargs = require('yargs');
const params = yargs.argv;
const drive = yargs.argv._[0];



if(drive === 'driving'){
    if(params.speed && params.car){
        console.log(`You are driving ${params.car} with the speed of ${params.speed}`)
    }
}

console.log(yargs.argv)