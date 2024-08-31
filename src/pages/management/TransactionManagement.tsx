import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img = 
        "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"

const orderItems: OrderItemType[] = [
  {
    name: 'Laptop',
    photo: img,
    _id: "asdsaasdas",
    quantity: 3,
    price: 122000
  }
]

const TransactionManagement = () => {

  const [order, setOrder] = useState<OrderType>({
    name: 'Amit Singh',
    address: "48 MaharanaPratap Street",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    pinCode: 234567,
    status: "Processing",
    subtotal: 366000,
    tax: 32900,
    shippingCharges: 366,
    discount: 73200,
    totalAmount: 366000 + 32900 + 366 - 73200,
    orderItems,
    _id: "asdnasjdhbn" 
  })

  const {
    name, 
    address, 
    city, 
    country, 
    state, 
    pinCode, 
    subtotal, 
    shippingCharges, 
    tax, 
    discount, 
    totalAmount, 
    status
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered"
    }))
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="product-management">
        <section style={{
          padding: "2rem"
        }}>
          <h2>Order Items</h2>

          {
            order.orderItems.map( i => (
              <ProductCard
                name={i.name}
                photo={i.photo}
                _id={i._id}
                quantity={i.quantity}
                price={i.price}
              />
            ))
          }
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Address: 
            {`
              ${address}, 
              ${city},
              ${state},
              ${country},
              ${pinCode},
            `}</p>

            <h5>Amount Info</h5>
            <p>Subtotal: {subtotal}</p>
            <p>ShippingCharges: {shippingCharges}</p>
            <p>Tax: {tax}</p>
            <p>Discount: {discount}</p>
            <p>Total: {totalAmount}</p>

            <h5>Status</h5>
            <p>Status:{" "}
              <span 
                className={
                  status === "Delivered" 
                  ? "purple" 
                  : status === "Shipped" 
                  ? "green" 
                  : "red"
                }
              >
                {status}
              </span>
            </p>

            <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}

const ProductCard = (
 {
  name,
  photo,
  price,
  quantity,
  _id
 } : OrderItemType
) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />

    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} x {quantity} = ${price * quantity}
    </span>
  </div>
)

export default TransactionManagement;