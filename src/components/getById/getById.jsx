import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GetById = () => {

  const { id } = useParams()

  const [data, setData] = useState([])

  async function get(id) {
    const {data} = await axios.get("http://localhost:3000/data/")
    setData(data)
  }

  useEffect(() => {
    get(id)
  }, [])



  return (
    <div>
      
    </div>
  )
}

export default GetById