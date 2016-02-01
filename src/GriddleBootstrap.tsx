import * as React from 'react';
import { createBootstrapPagerWithPageInfo } from './BootstrapPagerFactory';

const Griddle = require('griddle-react');

export interface GriddleProps<T> extends React.Props<T> {
    results: any[];
    showSettings?: boolean;
    showFilter?: boolean;
    showPager?: boolean;
    resultsPerPage?: number;
    useGriddleStyles?: boolean;
    tableClassName?: string;
    useCustomPagerComponent?: boolean;
    useCustomGridComponent?: boolean;
    customPagerComponent?: any;
    nextText?: string;
    previousText?: string;
}

export interface GriddleBootstrapProps extends GriddleProps<GriddleBootstrap> {
    bordered?: boolean;
    condensed?: boolean;
    hover?: boolean;
    striped?: boolean;
    tableClassName?: string;
    pagerOptions?: PagerOptions;
}

export interface PagerOptions {
    maxButtons?: number;
}

export class GriddleBootstrap extends React.Component<GriddleBootstrapProps, any> {
    static defaultProps = {
        tableClassName: '',
        bordered: false,
        condensed: false,
        hover: false,
        striped: false,
        pagerOptions: {
            maxButtons: 5
        }
    };

    render() {
        let tableClassName = 'table ' + this.props.tableClassName;
        if (this.props.bordered) {
            tableClassName += ' table-bordered';
        }
        if (this.props.condensed) {
            tableClassName += ' table-condensed';
        }
        if (this.props.hover) {
            tableClassName += ' table-hover';
        }
        if (this.props.striped) {
            tableClassName += ' table-striped';
        }

        return (
            <Griddle
                {...this.props}
                ref={ (ref) => {
                    ref.props.customPagerComponent.bindGriddle(ref)
                } }
                tableClassName={tableClassName}
                useGriddleStyles={false}
                settingsToggleClassName='btn btn-default'
                useCustomPagerComponent={true}
                customPagerComponent={ createBootstrapPagerWithPageInfo(this.props.pagerOptions) }
                />
        );
    }
}
