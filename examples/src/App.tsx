import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, PageHeader } from 'react-bootstrap';
import { BootstrapPager, GriddleBootstrap} from 'griddle-react-bootstrap';

const Griddle = require('griddle-react');

const fakeData = makeFakeData();

export interface Props extends React.Props<App> {
}

export default class App extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <div className="bs-docs-header">
                    <div className="container" >
                        <h1>Griddle React Bootstrap Examples</h1>
                    </div>
                </div>
                <Grid>
                    <PageHeader>BootstrapPager</PageHeader>

                    <p>You can use <b>BootstrapPager Component</b> as <a href='http://griddlegriddle.github.io/Griddle/customization.html'>Custom Paging Component of Griddle</a>.</p>

                    <pre>
                        {`<Griddle
    tableClassName={'table table-bordered table-striped table-hover'}
    useGriddleStyles={false}
    results={fakeData}
    useCustomPagerComponent={true}
    customPagerComponent={ BootstrapPager }
    />`}
                    </pre>

                    <Griddle
                        tableClassName={'table table-bordered table-striped table-hover'}
                        useGriddleStyles={false}
                        results={fakeData}
                        useCustomPagerComponent={true}
                        customPagerComponent={ BootstrapPager }
                        />

                    <PageHeader>GriddleBootstrap</PageHeader>

                    <p>You can use <b>GriddleBootstrap Component</b> instead of Griddle Component.
                        This component shows a paging index information!Of course,
                        you can use <a href='http://griddlegriddle.github.io/Griddle/properties.html'>props of the Griddle</a>.
                    </p>

                    <pre>
                        {`<GriddleBootstrap hover={true} striped={true} results={fakeData} />`}
                    </pre>

                    <GriddleBootstrap hover={true} striped={true} results={fakeData} />
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

function makeFakeData(size = 93) {
    const rows = [];
    for (let i = 1; i <= size; i++) {
        rows.push({
            id: i,
            name: `example-${i}`
        });
    }
    return rows;
}