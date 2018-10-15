import * as React from 'react';
import { observer } from 'mobx-react';

export interface PredictionOutputsProps {
    outputs: Array<any>
}

@observer
export class PredictionOutputs extends React.Component<PredictionOutputsProps, any> {
    constructor(props?: PredictionOutputsProps, context?: any) {
        super(props, context);
    }

    render() {
        const { outputs } = this.props;
        return (
        <ul>
            {outputs.map(({ yes, no }, index) => (<li key={`${yes}-${no}-${index}`} >
                <div className="row" >
                    <div className="col">{yes}</div>
                    <div className="col">{no}</div>
                </div>
            </li>))}
        </ul>
        );
    }
}


export default PredictionOutputs;