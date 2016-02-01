import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, PageHeader, Alert, Table } from 'react-bootstrap';
import { BootstrapPager, GriddleBootstrap, createBootstrapPager } from 'griddle-react-bootstrap';

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

                    <p>
                        You can use <b>BootstrapPager Component</b> as <a href='http://griddlegriddle.github.io/Griddle/customization.html'>Custom Paging Component of Griddle</a>.
                        To display Bootstrap table style, you must set some props of Griddle as follows.
                    </p>

                    <pre>
                        {`<Griddle
    tableClassName={'table table-bordered table-striped table-hover'}
    useGriddleStyles={false}
    showFilter={true}
    showSettings={true}
    settingsToggleClassName='btn btn-default'
    results={fakeData}
    useCustomPagerComponent={true}
    customPagerComponent={ BootstrapPager }
    />`}
                    </pre>

                    <Griddle
                        tableClassName={'table table-bordered table-striped table-hover'}
                        useGriddleStyles={false}
                        showFilter={true}
                        showSettings={true}
                        settingsToggleClassName='btn btn-default'
                        results={fakeData}
                        useCustomPagerComponent={true}
                        customPagerComponent={ BootstrapPager }
                        />

                    <h3>Props</h3>
                    <Alert bsStyle='warning'>
                        <p>
                            Unfortunately, You cannot set options to Custom Pager Component of Griddle.
                            If you want to modify BootstrapPager Component behavior, please use <b>createBootstrapPager function</b> as below.
                        </p>
                    </Alert>

                    <PageHeader>createBootstrapPager</PageHeader>

                    <p>
                        You can use <b>createBootstrapPager function</b> for modify BootstrapPager Component behavior.
                        For example, you can change the number of buttons of pager to 10 as follows.
                    </p>

                    <pre>
                        {`<Griddle
    tableClassName={'table table-bordered table-striped table-hover'}
    useGriddleStyles={false}
    showFilter={true}
    showSettings={true}
    settingsToggleClassName='btn btn-default'
    results={fakeData}
    useCustomPagerComponent={true}
    customPagerComponent={ createBootstrapPager({ maxButtons: 10 }) }
    />`}
                    </pre>

                    <Griddle
                        tableClassName={'table table-bordered table-striped table-hover'}
                        useGriddleStyles={false}
                        showFilter={true}
                        showSettings={true}
                        settingsToggleClassName='btn btn-default'
                        results={fakeData}
                        useCustomPagerComponent={true}
                        customPagerComponent={ createBootstrapPager({ maxButtons: 10 }) }
                        />

                    <h4>Type of options</h4>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>maxButtons</td>
                                <td>number</td>
                                <td>5</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>

                    <PageHeader>GriddleBootstrap</PageHeader>

                    <p>
                        You can use <b>GriddleBootstrap Component</b> instead of Griddle Component.
                        Because this component is configured for Bootstrap table style, you don't need to set some props of Griddle.
                        In addition, this component shows a paging index information that isn't displayed in original Griddle.
                        Of course, you can use <a href='http://griddlegriddle.github.io/Griddle/properties.html'>props of the Griddle</a>.
                    </p>

                    <pre>
                        {`<GriddleBootstrap
    hover={true}
    striped={true}
    bordered={false}
    condensed={false}
    showFilter={true}
    showSettings={true}
    pagerOptions={{ maxButtons: 7 }}
    results={fakeData}
    />`}
                    </pre>

                    <GriddleBootstrap
                        hover={true}
                        striped={true}
                        bordered={false}
                        condensed={false}
                        showFilter={true}
                        showSettings={true}
                        pagerOptions={{ maxButtons: 7 }}
                        results={fakeData}
                        />

                    <h3>Props</h3>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>bordered</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>condensed</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>hover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>striped</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>pagerOptions</td>
                                <td>PagerOptions</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>

                    <h4>Props / PagerOptions</h4>
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>maxButtons</td>
                                <td>number</td>
                                <td>5</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>

                </Grid>

                <footer className="bs-docs-footer">
                    <Grid>
                        <p>
                            Code licensed <a rel="license" href="https://github.com/wadahiro/griddle-react-bootstrap/bootstrap/blob/master/LICENSE" target="_blank">MIT</a>.
                        </p>
                    </Grid>
                </footer>
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