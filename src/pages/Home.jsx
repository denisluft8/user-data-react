import './Home.css'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Table from '../components/Table/Table'
import AddData from '../components/AddData/AddData'
import { userArr } from '../mock/users'
import { productsArr } from '../mock/products'

const Home = () => {
  const headerUser = ['Name', 'Email', 'Occupation', 'Birthday']
  const headerProduct = ['Product', 'Company', 'Price']
  const [newUserArr, setNewUserArr] = useState(userArr)
  const addDataToArr = form => {
    setNewUserArr([...newUserArr, form])
  }
  const deleteData = indexUserArr => {
    let restOfDataArray = newUserArr.filter(
      (element, ind) => ind !== indexUserArr
    )
    setNewUserArr(restOfDataArray)
  }

  useEffect(() => {
    setTimeout(() => {
      // alert('Novo Usuário Adicionado')
    }, 100)
  }, [newUserArr])

  return (
    <>
      <Header />
      <Table
        type="user"
        headerData={headerUser}
        bodyData={newUserArr}
        removeItem={index => deleteData(index)}
      />
      <AddData saveData={val => addDataToArr(val)} />
    </>
  )
}

export default Home

//campo de busca pelo nome
//ordenação - select que vai listar os items de cabeçario e quando selecionar ordenar por ordem alfabética
