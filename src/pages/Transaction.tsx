import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string,
  amount: number,
  discount: number,
  quantity: number,
  status: ReactElement,
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  },
];

const arr: DataType[] = [
  {
    user: 'Emily Parker',
  amount: 150208.67,
  discount: 18081.81,
  quantity: 2,
  status: 
    <span className="red">Processing</span>,
  action:
    <Link to="/adminDashboard/transaction/amount">
      Manage
    </Link>
  },

  {
    user: 'Xaviors',
  amount: 18902.94,
  discount: 608.32,
  quantity: 7,
  status: 
    <span className="green">Shipped</span>,
  action:
    <Link to="/adminDashboard/transaction/amount">
      Manage
    </Link>
  },

  {
    user: 'Smith',
  amount: 8732.52,
  discount: 203.89,
  quantity: 12,
  status: 
    <span className="purple">Delivered</span>,
  action:
    <Link to="/adminDashboard/transaction/amount">
      Manage
    </Link>
  },
]

const Transaction = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(
    columns,
    data,
    'dashboard-product-box',
    'Transactions',
    true
  ), []);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />

      {/* main */}
      <main>
        {Table()}
      </main>
    </div>
  )
}

export default Transaction;
