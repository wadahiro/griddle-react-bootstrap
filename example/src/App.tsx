import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GriddleBootstrapPagination } from 'griddle-bootstrap-pagination';


export interface Props extends React.Props<App> {
}

export default class App extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <GriddleBootstrapPagination />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
