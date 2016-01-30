import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from 'react-bootstrap';


export interface BootstrapPagerProps extends React.Props<BootstrapPager> {
    maxPage: number;
    currentPage: number;
    maxButtons?: number;
    setPage: (number) => void;
    next: () => void;
    previous: () => void;
    pagerStyle: any;
    pagingInfoStyle: any;
}

export class BootstrapPager extends React.Component<BootstrapPagerProps, any>{
    static defaultProps = {
        maxButtons: 5,
        pagerStyle: {
            float: 'right!important',
            paddingRight: 16
        },
        pagingInfoStyle: {
            float: 'left!important',
            paddingLeft: 16
        }
    };

    handleSelect = (event, selectedEvent) => {
        this.props.setPage(selectedEvent.eventKey - 1);
    };

    getFilteredResults() {
        return null;
    }

    getTotalResults() {
        return null;
    }

    getResutlsPerPage() {
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

            const infoFiltered = isFiltered ? ` / Filtered from ${totalResults}` : '';
            info = `Display ${startRecordIndex} - ${endRecordIndex}. (Total: ${subTotal} ${infoFiltered})`;
        }

        return (
            <div className='row'>
                <div style={this.props.pagingInfoStyle}>
                    <label className='pagination'>
                        {info}
                    </label>
                </div>
                <div style={this.props.pagerStyle}>
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