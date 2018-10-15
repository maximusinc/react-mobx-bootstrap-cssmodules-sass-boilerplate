import { BaseService } from "./base";
import { PredictInput } from "app/models";


export class PredictService extends BaseService {


    predict(input : PredictInput) : Promise<any> {

        return new Promise(function(resolve, reject){

            console.log("Service:", input);
            setTimeout(() => {
                resolve({
                    yes: '0.32',
                    no: '0.56',
                });
            }, 1000);
        });
    }
}