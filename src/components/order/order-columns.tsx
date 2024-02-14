'use client';

import { ColumnDef } from '@tanstack/react-table';

import { OrderColumn } from '@/types';

// Define the columns for the billboard table
export const columns: ColumnDef<OrderColumn>[] = [
	{
		accessorKey: 'id',
		header: 'Order ID'
	},
	{
		accessorKey: 'createdAt',
		header: 'Date'
	},
	{
		accessorKey: 'products',
		header: 'Products'
	},
	{
		accessorKey: 'phone',
		header: 'Phone'
	},
	{
		accessorKey: 'address',
		header: 'Address'
	},

	{
		accessorKey: 'total',
		header: 'Total'
	},
	{
		accessorKey: 'paid',
		header: 'Paid',
		// row.original is the original row object provided to the table
		cell: ({ row }) => (row.original.paid ? 'Yes' : 'No')
	}
];