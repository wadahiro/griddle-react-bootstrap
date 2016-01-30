import * as React from 'react';
import { BootstrapPager } from './BootstrapPager';

export function createBootstrapPager(): any {
    class Pager extends BootstrapPager {
        static griddle = null;
        static bindGriddle(griddle: any) {
            this.griddle = griddle;
        }

        getFilteredResults() {
            return Pager.griddle.state.filteredResults && Pager.griddle.state.filteredResults.length;
        }

        getTotalResults() {
            return Pager.griddle.props.results.length;
        }

        getResutlsPerPage() {
            return Pager.griddle.state.resultsPerPage
        }

        render() {
            if (Pager.griddle === null) {
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