import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";



// uses lazy for split the js bundle into smaller chunks for improve faster rendering
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route 
            path="/admindashboard" 
            element={
              <Link to="/admindashboard/dashboard"><button className="app">Visit Dashboard</button></Link>
            }> 
          </Route>
          <Route path="/admindashboard/dashboard" element={<Dashboard />} />
          <Route path="/admindashboard/products" element={<Products />} />
          <Route path="/admindashboard/transaction" element={<Transaction />} />
          <Route path="/admindashboard/customers" element={<Customers />} />


          {/* Charts */}
          <Route path="/admindashboard/chart/bar" element={<BarCharts />} />
          <Route path="/admindashboard/chart/line" element={<LineCharts />} />
          <Route path="/admindashboard/chart/pie" element={<PieCharts />} />


          {/* Apps */}
          <Route path="/admindashboard/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admindashboard/app/coupon" element={<Coupon />} />
          <Route path="/admindashboard/app/toss" element={<Toss />} />


          {/* Management */}
          <Route path="/admindashboard/products/new" element={<NewProduct />} />
          <Route path="/admindashboard/products/:id" element={<ProductManagement />} />
          <Route path="/admindashboard/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
