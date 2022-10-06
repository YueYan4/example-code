
import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

if (process.argv.length == 0 || args.h){
  console.log("arguments missing")
  process.exit()
}

var multiple = 1;
if (args.m) {
  multiple = args.m
}

var range = 6;
range += 1;
if(args.r) {
  range = args.r
}
if (multiple == 1){
  var ans = Math.floor(Math.random() * range);
}
else{
  var ans = [];
  for(var i = 0; i < multiple;i++){
    ans[i] = Math.floor(Math.random() * range))
  }
}

console.log(ans)
