import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { 
    useTable, 
    Column, 
    TableOptions, 
    useSortBy, 
    usePagination,
} from "react-table";

// using for top-transaction in dashbaoard.tsx
function TableHOC<T extends Object>(
    columns: Column<T>[], 
    data: T[], 
    containerClassname: string, 
    heading: string,
    showPagination: boolean =  false
) {
    return function HOC() {

        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 6,
            }
        }

        const {
            getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            page, 
            prepareRow,
            nextPage,
            pageCount,
            state: {pageIndex },
            previousPage,
            canNextPage,
            canPreviousPage
        } = useTable(options, useSortBy, usePagination);

        return(
        <div className={containerClassname}>
            <h2 className="heading">
                {heading}
            </h2>


            <table className="table" {...getTableProps}>
                <thead>
                    {
                        headerGroups.map((headerGroup, index) => (
                            // console.log(headerGroup),
                            <tr {...headerGroup.getHeaderGroupProps()}  key={index}>
                                {headerGroup.headers.map((column, value) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} key={value}>
                                            {column.render("Header")}
                                            {
                                                column.isSorted && <span key={value}>{column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}</span>
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                          prepareRow(row);  

                          return <tr {...row.getRowProps()} key={index}>
                            {
                                row.cells.map((cell, value) => (
                                    <td {...cell.getCellProps} key={value}>
                                        {cell.render("Cell")}
                                    </td>
                                ))
                            }
                          </tr>
                        })  
                    }
                </tbody>
            </table>

            {
                showPagination && (
                    <div className="table-pagination">
                        <button disabled={!canPreviousPage} onClick={previousPage}>
                            Prev
                        </button>
                        <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                        <button disabled={!canNextPage} onClick={nextPage}>
                            Next
                        </button>
                    </div>
                )
            }
        </div>
        )
    }
}

export default TableHOC;