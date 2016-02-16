import * as React from 'react';
import { createBootstrapPagerWithPageInfo, PagerOptions, defaultPagerOptions } from './BootstrapPagerFactory';

const Griddle = require('griddle-react');

/**
 * refrences http://griddlegriddle.github.io/Griddle/properties.html
 */
export interface GriddleProps<T> extends React.Props<T> {
    columns?: any[];
    columnMetadata?: any[];
    results?: any[];
    resultsPerPage?: number;
    initialSort?: string;
    initialSortAscending?: boolean;
    gridClassName?: string;
    tableClassName?: string;
    customFormatClassName?: string;
    settingsText?: string;
    filterPlaceholderText?: string;
    nextText?: string;
    previousText?: string;
    maxRowsText?: string;
    enableCustomFormatText?: string;
    childrenColumnName?: string;
    metadataColumns?: any[];
    showFilter?: boolean;
    showSettings?: boolean;
    useCustomRowComponent?: boolean;
    useCustomGridComponent?: boolean;
    useCustomPagerComponent?: boolean;
    useGriddleStyles?: boolean;
    customRowComponent?: React.ReactInstance;
    customGridComponent?: React.ReactInstance;
    customPagerComponent?: React.ReactInstance;
    enableToggleCustom?: boolean;
    noDataMessage?: string;
    customNoDataComponent?: React.ReactInstance;
    showTableHeading?: boolean;
    showPager?: boolean;
    useFixedHeader?: boolean;
    useExternal?: boolean;
    externalSetPage?: Function;
    externalChangeSort?: Function;
    externalSetFilter?: Function;
    externalSetPageSize?: Function;
    externalMaxPage?: number;
    externalCurrentPage?: number;
    externalSortColumn?: string;
    externalSortAscending?: boolean;
    externalLoadingComponent?: React.ReactInstance;
    externalIsLoading?: boolean;
    enableInfiniteScroll?: boolean;
    bodyHeight?: number;
    paddingHeight?: number;
    rowHeight?: number;
    infiniteScrollLoadTreshold?: number;
    useFixedLayout?: boolean;
    isSubGriddle?: boolean;
    enableSort?: boolean;
    sortAscendingClassName?: string;
    sortDescendingClassName?: string;
    parentRowCollapsedClassName?: string;
    parentRowExpandedClassName?: string;
    settingsToggleClassName?: string;
    nextClassName?: string;
    previousClassName?: string;
    sortAscendingComponent?: string;
    sortDescendingComponent?: string;
    parentRowCollapsedComponent?: string;
    parentRowExpandedComponent?: string;
    settingsIconComponent?: string;
    nextIconComponent?: string;
    previousIconComponent?: string;
    onRowClick?: Function;
}

export interface GriddleBootstrapProps extends GriddleProps<GriddleBootstrap> {
    bordered?: boolean;
    condensed?: boolean;
    hover?: boolean;
    striped?: boolean;
    pagerOptions?: PagerOptions;
}

export class GriddleBootstrap extends React.Component<GriddleBootstrapProps, any> {
    static defaultProps = {
        tableClassName: '',
        settingsToggleClassName: 'btn btn-default',
        bordered: false,
        condensed: false,
        hover: false,
        striped: false,
        pagerOptions: defaultPagerOptions
    };

    state = {
        pagerClass: null
    };

    constructor(props) {
        super(props);
        this.state.pagerClass = createBootstrapPagerWithPageInfo(props.pagerOptions);
    }

    componentWillReceiveProps(nextProps: GriddleBootstrapProps) {
        const { pagerOptions } = this.props;
        const nextPagerOptions = nextProps.pagerOptions;
        if (pagerOptions.filteredPageInfoText !== nextPagerOptions.filteredPageInfoText ||
            pagerOptions.maxButtons !== nextPagerOptions.maxButtons ||
            pagerOptions.pageInfoText !== nextPagerOptions.pageInfoText) {

            const nextPagerClass = createBootstrapPagerWithPageInfo(nextProps.pagerOptions);
            if (this.state.pagerClass) {
                nextPagerClass.bindGriddle(this.state.pagerClass.getGriddle());
            }

            this.setState({
                pagerClass: nextPagerClass
            });
        }
    }

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
                    if (ref) {
                        ref.props.customPagerComponent.bindGriddle(ref);
                    }
                } }
                tableClassName={tableClassName}
                useGriddleStyles={false}
                useCustomPagerComponent={true}
                customPagerComponent={this.state.pagerClass}
                />
        );
    }
}
