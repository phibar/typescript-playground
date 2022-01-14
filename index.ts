import { readFile, readFileSync } from 'fs';
import { CompilerOptions, transpile, transpileModule } from 'typescript';
import { create, register, createRepl, createEsmHooks, RegisterOptions } from 'ts-node'

// import ttypescript from'ttypescript'
// import { CompilerOptions } from 'typescript'

// import {} from 'ttypescript'

import { findConfigFile, readConfigFile, sys } from 'typescript'
// import ts from 'ttypescript'

// transpileModule()

const f = findConfigFile("/Users/philippbartels/github/ONCE-DAO/tsrepl", sys.fileExists)
if (f) {
    const configFile = readConfigFile(f, sys.readFile);

    const source = (readFileSync("test.ts")).toString('utf8');
    // console.log(source);

    const t = transpile(source,  configFile.config.compilerOptions )
    console.log(t);

    let registerOptions: RegisterOptions = {
        cwd:process.cwd(),
        compilerOptions: configFile.config.compilerOptions 
     
    };

    const service = register(registerOptions)
    const repl = createRepl()
    repl.setService(service)

   console.log(service.compile("","test.ts"))
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



