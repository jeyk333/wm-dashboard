'use client';

import { useState, FC, ChangeEvent } from 'react';
import {
  ColumnDef,
  SortingState,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Column,
  Row,
  Table as TableType,
  HeaderGroup,
  Header,
} from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { Orders, OrderType } from '@/constants/orders';
import ArrowLink from '@/assets/images/link-arrow.png';

export const columns: ColumnDef<OrderType>[] = [
  {
    accessorKey: 'product',
    header: ({ column }: { column: Column<OrderType> }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Product
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div className="flex items-center">
        <Image
          src={row.original.image}
          alt={row.getValue('product')}
          height={40}
          width={40}
          className="mr-4"
        />
        <p className="truncate w-32">{row.getValue('product')}</p>
      </div>
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }: { column: Column<OrderType> }) => {
      return (
        <Button
          className="pl-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div className="w-24">
        <p> {dayjs(row.getValue('date')).format("DD MMM 'YYYY")}</p>
        <p className="text-xs">
          {' '}
          {dayjs(row.getValue('date')).format('hh:mm A')}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'time',
    header: ({ column }: { column: Column<OrderType> }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Time spent
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div className="lowercase">{row.getValue('time')}</div>
    ),
  },
  {
    accessorKey: 'value',
    header: ({ column }: { column: Column<OrderType> }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Order value
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div>${row.getValue('value')}</div>
    ),
  },
  {
    accessorKey: 'commission',
    header: ({ column }: { column: Column<OrderType> }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Commission
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div className="font-bold text-base">${row.getValue('commission')}</div>
    ),
  },
  {
    accessorKey: 'link',
    header: '',
    cell: ({ row }: { row: Row<OrderType> }) => (
      <div className="pr-4 w-32 md:w-full">
        <Link
          href={row.getValue('link')}
          className="Capitalize text-text-light flex items-center justify-end gap-3"
        >
          View Chat <Image src={ArrowLink} alt="Link" width={18} height={18} />
        </Link>
      </div>
    ),
  },
];

const OrderTable: FC = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table: TableType<OrderType> = useReactTable({
    data: Orders,
    columns,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
    },
  });

  return (
    <div className="mt-6 md:mt-12">
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader className="bg-table-header">
            {table
              .getHeaderGroups()
              .map((headerGroup: HeaderGroup<OrderType>) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(
                    (header: Header<OrderType, unknown>) => {
                      return (
                        <TableHead
                          key={header.id}
                          className="pl-4 text-text-dark text-sm h-[54px] w-2/12"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      );
                    },
                  )}
                </TableRow>
              ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: Row<OrderType>) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="pl-4 h-[74px]">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
        <div>
          <Button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="bg-white"
          >
            {'<<'}
          </Button>
          <Button
            className="bg-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </Button>
          <span className="mx-2 md:mx-4 text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-white"
          >
            {'>'}
          </Button>
          <Button
            className="bg-white"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </Button>
        </div>

        <div className="text-sm">
          <select
            value={table.getState().pagination.pageSize}
            className="border border-border py-2 rounded-md px-2"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20].map((pageSize: number) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
