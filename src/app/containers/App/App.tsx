import * as React from 'react';
// import "../../../bootstrap/scss/mixins";
// import "node_modules/bootstrap/scss/variables.scss";
// import "node_modules/bootstrap/scss/mixins.scss";
// import "node_modules/bootstrap/scss/buttons.scss";
import * as style from './style.scss';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Header } from 'app/components/Header';
// import { TodoList } from 'app/components/TodoList';
// import { Footer } from 'app/components/Footer';
import { TodoStore, RouterStore } from 'app/stores';
import {
    STORE_TODO,
    STORE_ROUTER,
    TODO_FILTER_LOCATION_HASH,
    TodoFilter,
    STORE_PREDICTIONS
} from 'app/constants';
import { PredictionForm } from 'app/components/PredictionForm';
import PredictionOutputs from 'app/components/PredictionOutputs/PredictionOutputs';
import PredictionsStore from 'app/stores/PredictionsStore';

export interface AppProps extends RouteComponentProps<any> {
    /** MobX Stores will be injected via @inject() **/
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
    [STORE_PREDICTIONS]: PredictionsStore
}

export interface AppState {
    filter: TodoFilter;
}

@inject( STORE_PREDICTIONS, STORE_ROUTER)
@observer
export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, context: any) {
        super(props, context);
        this.state = { filter: TodoFilter.ALL };
    }

    componentWillMount() {
        this.checkLocationChange();
    }

    componentWillReceiveProps(nextProps: AppProps, nextContext: any) {
        this.checkLocationChange();
    }

    checkLocationChange() {
        const router = this.props[STORE_ROUTER] as RouterStore;
        const filter = Object.keys(TODO_FILTER_LOCATION_HASH)
            .map((key) => Number(key) as TodoFilter)
            .find(
                (filter) => TODO_FILTER_LOCATION_HASH[filter] === router.location.hash
            );
        this.setState({ filter });
    }

    // private handleFilter = (filter: TodoFilter) => {
    //     const router = this.props[STORE_ROUTER] as RouterStore;
    //     const currentHash = router.location.hash;
    //     const nextHash = TODO_FILTER_LOCATION_HASH[filter];
    //     if (currentHash !== nextHash) {
    //         router.replace(nextHash);
    //     }
    // };

    getFilteredTodo(filter: TodoFilter) {
        const todoStore = this.props[STORE_TODO] as TodoStore;
        switch (filter) {
            case TodoFilter.ACTIVE:
                return todoStore.activeTodos;
            case TodoFilter.COMPLETED:
                return todoStore.completedTodos;
            default:
                return todoStore.todos;
        }
    }

    render() {
        // const todoStore = this.props[STORE_TODO] as TodoStore;
        const { children } = this.props;
        // const { filter } = this.state;
        // const filteredTodos = this.getFilteredTodo(filter);
        const {predict, outputs} = this.props[STORE_PREDICTIONS];

        return (
            <div className={style.normal}>
                <Header />
                <PredictionOutputs outputs={outputs}  />
                <PredictionForm predict={predict} />
                {children}
            </div>
        );
    }
}
