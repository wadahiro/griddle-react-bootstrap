import * as React from 'react';
import { BootstrapPager } from './BootstrapPager';

export interface Options {
    maxButtons?: number,
    showPageInfo?: boolean
}

const defaultOptions: Options = {
    maxButtons: 5,
    showPageInfo: false
};

export function createBootstrapPager(options: Options = defaultOptions): any {
    return _createBootstrapPager(options, false);
}

export function createBootstrapPagerWithPageInfo(options: Options = defaultOptions): any {
    return _createBootstrapPager(options, true);
}

function _createBootstrapPager(options: Options = defaultOptions, showPageInfo: boolean): any {
    class Pager extends BootstrapPager {
        static defaultProps = {
            maxButtons: options.maxButtons
        };
        static griddle = null;
        static bindGriddle(griddle: any) {
            this.griddle = griddle;
        };

        getFilteredResults() {
            return showPageInfo && Pager.griddle.state.filteredResults && Pager.griddle.state.filteredResults.length;
        }

        getTotalResults() {
            return showPageInfo && Pager.griddle.props.results.length;
        }

        getResutlsPerPage() {
            return showPageInfo && Pager.griddle.state.resultsPerPage
        }

        render() {
            if (showPageInfo && Pager.griddle === null) {
                setTimeout(() => {
                    this.setState({});
                }, 0);
                return <div />;
            }
            return super.render();
        }
    }
    return Pager;
}