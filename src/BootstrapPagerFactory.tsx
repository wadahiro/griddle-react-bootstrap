import * as React from 'react';
import { BootstrapPager, DEFAULT_MAX_BUTTONS } from './BootstrapPager';

export interface PagerOptions {
    maxButtons?: number;
    pageInfoText?: (from: number, to: number, total: number) => string;
    filteredPageInfoText?: (from: number, to: number, filtered: number, total: number) => string;
}

export const defaultPagerOptions: PagerOptions = {
    maxButtons: DEFAULT_MAX_BUTTONS,
    pageInfoText: (from: number, to: number, total: number) => `Display ${from} - ${to}. (Total: ${total})`,
    filteredPageInfoText: (from: number, to: number, filtered: number, total: number) => `Display ${from} - ${to}. (Total: ${filtered} / Filtered from ${total})`
};

export function createBootstrapPager(options: PagerOptions = defaultPagerOptions): any {
    return _createBootstrapPager(options, false);
}

export function createBootstrapPagerWithPageInfo(options: PagerOptions = defaultPagerOptions): any {
    return _createBootstrapPager(options, true);
}

function _createBootstrapPager(options: PagerOptions = defaultPagerOptions, showPageInfo: boolean): any {
    class Pager extends BootstrapPager {
        static defaultProps = {
            maxButtons: options.maxButtons || defaultPagerOptions.maxButtons,
            pageInfoText: options.pageInfoText || defaultPagerOptions.pageInfoText,
            filteredPageInfoText: options.filteredPageInfoText || defaultPagerOptions.filteredPageInfoText
        };
        static griddle = null;
        static bindGriddle(griddle: any) {
            this.griddle = griddle;
        };

        getFilteredResults(): number {
            return showPageInfo && Pager.griddle.state.filteredResults && Pager.griddle.state.filteredResults.length;
        }

        getTotalResults(): number {
            return showPageInfo && Pager.griddle.props.results && Pager.griddle.props.results.length;
        }

        getResutlsPerPage(): number {
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