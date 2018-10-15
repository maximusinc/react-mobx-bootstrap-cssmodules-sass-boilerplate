import { observable, action, runInAction } from "mobx";
import { PredictInput } from "app/models";
import { predictService } from "./../services";


export class PredictionsStore {

    @observable outputs: Array<any> = [];

    @action
    predict = (input: PredictInput) => {

        predictService.predict(input).then((ou) => {
            runInAction(() => {
                this.outputs.push(ou)
            });
        });

    }

}

export default PredictionsStore;