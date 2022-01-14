"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var typescript_1 = require("typescript");
var ts_node_1 = require("ts-node");
// import ttypescript from'ttypescript'
// import { CompilerOptions } from 'typescript'
// import {} from 'ttypescript'
var typescript_2 = require("typescript");
// import ts from 'ttypescript'
// transpileModule()
var f = (0, typescript_2.findConfigFile)("/Users/philippbartels/github/ONCE-DAO/tsrepl", typescript_2.sys.fileExists);
if (f) {
    var configFile = (0, typescript_2.readConfigFile)(f, typescript_2.sys.readFile);
    var source = ((0, fs_1.readFileSync)("test.ts")).toString('utf8');
    // console.log(source);
    var t = (0, typescript_1.transpile)(source, configFile.config.compilerOptions);
    console.log(t);
    var registerOptions = {
        cwd: process.cwd(),
        compilerOptions: configFile.config.compilerOptions
    };
    var service = (0, ts_node_1.register)(registerOptions);
    var repl = (0, ts_node_1.createRepl)();
    repl.setService(service);
    console.log(service.compile("", "test.ts"));
    // repl.start()
    // const s = create({})
}
// console.log("f", configFile.config.compilerOptions)
//     console.log('transpile', transpile(`export class test{
//     name="myname"
//     sayhello(){
//         console.log("hello")
//     }
// }`,  configFile.config.compilerOptions, "pb.js"))
// }
// const service =tsnode.register({files:true})
// // console.log(service.compile('','test.ts'))
// const repl =tsnode.createRepl()
// repl.setService(service)
// repl.start()
// ttypescript.transpile()
// const co:CompilerOptions={}
// console.log('transpile',transpile(`export class test{
//     name="myname"
//     sayhello(){
//         console.log("hello")
//     }
// }`,{module:ModuleKind.ESNext},"pb.js")
// transform()
// const f =create({compiler:})
// console.log( f.name)
// console.log("TI",f.getTypeInfo("","test.ts",10))
// const repl = createRepl()
// const service = create()
// service.compile("","test.ts",4)
// repl.setService(service)
// repl.start()
