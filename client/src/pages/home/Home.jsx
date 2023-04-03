import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import axios from "axios"

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWRmYzcwYWQzZGEyY2MyNjdjNDVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODM0NDUyOCwiZXhwIjoxNjc4Nzc2NTI4fQ.WcWt3qY6VH05bblCPO7cNGYGIJJhix_rpyJOZvOzzE4"
          }
        })
        setLists(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home