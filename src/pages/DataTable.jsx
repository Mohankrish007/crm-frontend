import './DataTable.css';
import { useTable, usePagination, useSortBy } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';

const DataTable = ({ columns, data }) => {
    const [tableData, setTableData] = useState(data); // Initialize with an empty array

    const {
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        gotoPage,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex, pageSize },
        setPageSize
    } = useTable(
        {
            columns,
            data: tableData, // Pass tableData here
            initialState: { pageIndex: 0, pageSize: 5, sortBy: [{ id: 'code', desc: false }] }
        },
        useSortBy,
        usePagination
    );

    // Function to handle deletion of a row
    const handleDelete = (rowToDelete) => {
        console.log(rowToDelete);
        const newData = tableData.filter(row => row.code != rowToDelete.code); // Filter out the row by id
        setTableData(newData);
    };

    // Function to handle updating of a row
    const handleUpdate = (rowToUpdate) => {
        // Implement your update logic here
        console.log('Update row:', rowToUpdate);
    };

    return (
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
            <TableContainer component={Paper}>
                <Table {...getTableProps()} size="small">
                    <TableHead>
                        {headerGroups.map(headerGroup => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </TableCell>
                                ))}
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.column.id === 'firstName' && cell.value.startsWith('http') ? (
                                                <a href={cell.value} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{cell.value}</a>
                                            ) : (
                                                cell.render('Cell')
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <Button onClick={() => handleDelete(row.original)}><DeleteIcon /></Button>
                                        <Button onClick={() => handleUpdate(row.original)}><EditIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <TablePagination
                    component="div"
                    count={tableData.length}
                    rowsPerPage={pageSize}
                    page={pageIndex}
                    onPageChange={(e, newPage) => gotoPage(newPage)}
                    onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
                    ActionsComponent={({ onPageChange, page }) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                Prev
                            </Button>
                            <span>
                                {pageIndex + 1} of {pageOptions.length}
                            </span>
                            <Button onClick={() => nextPage()} disabled={!canNextPage}>
                                Next
                            </Button>
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default DataTable;
