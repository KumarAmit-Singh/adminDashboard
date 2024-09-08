import { ChangeEvent, FormEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar";

const img = 
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q==804"

const ProductManagement = () => {

  const [name, setName] = useState<string>("Nike Shoes");
  const [price, setPrice] = useState<number>(200);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);


  const changeImageHandler = (
    event: ChangeEvent<HTMLInputElement>) => 
  {
    const file:File | undefined = event.target.files?.[0];

    const reader:FileReader = new FileReader();
    if(file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if(typeof reader.result === 'string') {
          setPhotoUpdate(reader.result)
        }
      }
    }
  }

  const submitHandler = (event:FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();

    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="product-management">

        {/* for left side of block */}
        <section>
          <strong>
            ID- VASDJBSFKNDGF 
          </strong>
          <img src={photo} alt="Product" />
          <p>{name}</p>
          {
            stock > 0 ? (
              <span className="green">{stock} Available</span>
            ) : (
              <span className="red">Not Available</span>
            )
          }
          <h3>${price}</h3>
        </section>

        {/* for right side  of block */}
        <article>
          <form onSubmit={submitHandler} style={{
            gap: 28
          }}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input required
                type="text" 
                placeholder="Name" 
                value={nameUpdate} 
                onChange={(event) => setNameUpdate(event.target.value)} 
              />
            </div>
            <div>
              <label>Price</label>
              <input required
                type="number" 
                placeholder="Price" 
                value={priceUpdate} 
                onChange={(event) => setPriceUpdate(Number(event.target.value))} 
              />
            </div>
            <div>
              <label>Stock</label>
              <input required
                type="number" 
                placeholder="Stock" 
                value={stockUpdate} 
                onChange={(event) => setStockUpdate(Number(event.target.value))} 
              />
            </div>
            <div>
              <label>Photo</label>
              <input required
                type="file" 
                placeholder="Photo" 
                onChange={changeImageHandler} 
              />
            </div>
            
            {
              photoUpdate && <img src={photoUpdate} alt="New Image" />
            }

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  )
}


export default ProductManagement;