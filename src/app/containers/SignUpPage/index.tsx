import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { STORE_ROUTER } from 'app/constants';
import { Button } from "reactstrap";
import * as styles from './style.scss';
// import "bootstrap/dist/css/bootstrap.css";
// import * as style from './style.scss';

export interface SignUpPageProps extends RouteComponentProps<any> {
    /** MobX Stores will be injected via @inject() **/
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
}

@inject(STORE_ROUTER)
@observer
export class SignUpPage extends React.Component<SignUpPageProps, any> {
    constructor(props: any, context: any) {
        super(props, context);
        console.log("CCC");
    }

    handleClick() {
        console.log(styles);

        console.log("Click");
    }


    render() {
        return (
            <div>
                Hello Page!
                <Button color="danger" onClick={this.handleClick} > Delete </Button>
            </div>
        );
    }
}