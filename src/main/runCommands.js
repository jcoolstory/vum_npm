import {exec,spawn} from "child_process"
export default function run(command, logout){
    
    //exec(`npm run ${command}`, (error, stdout, stderr) => {
    exec(`yarn ${command}`, (error, stdout, stderr) => {
     //do whatever here
        //console.log("stdout : ",stdout);
        //console.error("error", error);
        //console.error("error", stderr);
        logout(stdout)
        logout(error)
    })
}

export function runCommand(command ) {
    var p = spawn("cmd",["/c " ,command.name.split()]);
    //console.log(["/c",command.name.split()])
    p.on('exit', command.exit);
    p.stdout.setEncoding("ascii");
    p.stdout.on('data', command.stdout || function (out) {
        process.stdout.write(out);
    });
    p.stderr.on('data', command.stderr || function (err) {
        process.stdout.write(err);
    });  
}
