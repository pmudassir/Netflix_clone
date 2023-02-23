import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWRmYzcwYWQzZGEyY2MyNjdjNDVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg2OTU0NCwiZXhwIjoxNjc3MzAxNTQ0fQ.chSWsa2tFXnc1Vn3WjaOxv-ItjhOkq9q-S3xw4pRm0s"
          }
        })
        res.data.map((item) => (
          setUserStats((prev) => [
            ...prev, { name: MONTHS[item._id - 1], "New User": item.total }
          ])
        ))
      } catch (error) {
        console.log(error);
      }
    }
    getStats()
  }, [])

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
