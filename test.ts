
import { test2 } from './test2';
export {test2} 
interface Type<T> {
    new (...args: any[]): T;
  }
function Injectable() {
    return function <T>(target: Type<T>) {
    };
  }
interface inter{
    name:string
}

@Injectable()
export class test implements inter{
    name="myname"
    sayhello(){
        console.log("hello")
    }
}