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
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWRmYzcwYWQzZGEyY2MyNjdjNDVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg2OTU0NCwiZXhwIjoxNjc3MzAxNTQ0fQ.chSWsa2tFXnc1Vn3WjaOxv-ItjhOkq9q-S3xw4pRm0s"
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
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home