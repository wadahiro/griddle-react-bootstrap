import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from 'react-bootstrap';


export interface BootstrapPagerProps extends React.Props<BootstrapPager> {
    maxPage: number;
    currentPage: number;
    maxButtons?: number;
    pageInfoText?: (from: number, to: number, total: number) => string;
    filteredPageInfoText?: (from: number, to: number, filtered: number, total: number) => string;
    setPage: (number) => void;
    next: () => void;
    previous: () => void;
}

export const DEFAULT_MAX_BUTTONS = 5;

export class BootstrapPager extends React.Component<BootstrapPagerProps, any>{
    static defaultProps = {
        maxButtons: DEFAULT_MAX_BUTTONS
    };

    handleSelect = (eventKey, event) => {
        this.props.setPage(eventKey - 1);
    };

    getFilteredResults(): number {
        return null;
    }

    getTotalResults(): number {
        return null;
    }

    getResutlsPerPage(): number {
        return null
    }

    render() {
        const filteredResults = this.getFilteredResults();
        const totalResults = this.getTotalResults();
        const resultsPerPage = this.getResutlsPerPage();

        const showPageInfo = totalResults && resultsPerPage;

        let info = '';
        if (showPageInfo) {
            const isFiltered = filteredResults !== null && filteredResults < totalResults;
            const subTotal = isFiltered ? filteredResults : totalResults;

            const startRecordIndex = (this.props.currentPage * resultsPerPage) + 1;
            let endRecordIndex = startRecordIndex + resultsPerPage - 1;

            // for last page
            if (subTotal < endRecordIndex) {
                endRecordIndex = subTotal;
            }

            info = isFiltered ? this.props.filteredPageInfoText(startRecordIndex, endRecordIndex, filteredResults, totalResults) : this.props.pageInfoText(startRecordIndex, endRecordIndex, totalResults);
        }

        return (
            <div className='row'>
                <div className='paginate-info'>
                    <label className='pagination'>
                        {info}
                    </label>
                </div>
                <div className='paginate'>
                    <Pagination
                        prev={true}
                        next={true}
                        first={true}
                        last={true}
                        ellipsis={true}
                        items={this.props.maxPage}
                        maxButtons={this.props.maxButtons}
                        activePage={this.props.currentPage + 1}
                        onSelect={this.handleSelect}
                        />
                </div>
            </div>
        );
    }
}