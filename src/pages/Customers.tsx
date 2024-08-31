import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement,
  name: string,
  email: string,
  gender: string,
  role: string,
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Role",
    accessor: "role"
  },
  {
    Header: "Action",
    accessor: "action"
  },
];
// https://randomuser.me/api/portraits/women/54.jpg
const img1 = "https://randomuser.me/api/portraits/women/54.jpg"

const img2 = "https://randomuser.me/api/portraits/men/55.jpg"

const img3 = "https://randomuser.me/api/portraits/men/50.jpg"

const img4 = "https://randomuser.me/api/portraits/women/50.jpg"

const img5 = "https://randomuser.me/api/portraits/men/54.jpg"

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img1} 
        alt="Shoes" />
    ),
    name: 'Emily Parker',
    email: 'emily@gmail.com',
    gender: 'female',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img2} 
        alt="Shoes" />
    ),
    name: 'Mitchell Johnson',
    email: 'mitchell@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img3} 
        alt="Shoes" />
    ),
    name: 'Steve Smith',
    email: 'steve@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img4} 
        alt="Shoes" />
    ),
    name: 'Sophie Devine',
    email: 'sophie@gmail.com',
    gender: 'female',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img5} 
        alt="Shoes" />
    ),
    name: 'Vivian Richards',
    email: 'vivian@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img2} 
        alt="Shoes" />
    ),
    name: 'Mitchell Johnson',
    email: 'mitchell@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img3} 
        alt="Shoes" />
    ),
    name: 'Steve Smith',
    email: 'steve@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img4} 
        alt="Shoes" />
    ),
    name: 'Sophie Devine',
    email: 'sophie@gmail.com',
    gender: 'female',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img5} 
        alt="Shoes" />
    ),
    name: 'Vivian Richards',
    email: 'vivian@gmail.com',
    gender: 'male',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }} 
        src={img1} 
        alt="Shoes" />
    ),
    name: 'Emily Parker',
    email: 'emily@gmail.com',
    gender: 'female',
    role: 'user',
    action: (
      <button>
        <FaTrash />
      </button>
    )
  }, 
  
];

const Customers = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(TableHOC<DataType>(
    columns,
    data,
    'dashboard-product-box',
    'Customers',
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

export default Customers;