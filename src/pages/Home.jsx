import "./Home.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import AddData from "../components/AddData/AddData";
import SearchBar from "../components/SearchBar/SearchBar";
import { userArr } from "../mock/users";

const Home = () => {
  const headerUser = ["Name", "Email", "Occupation", "Birthday"];
  const [newUserArr, setNewUserArr] = useState(userArr);
  const [searchedItem, setSearchedItem] = useState("");

  const sortData = () => {
    let sortUserName = [...newUserArr].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setNewUserArr(sortUserName);
  };

  const searchedArray = newUserArr.filter((item) => {
    if (item.name.toLowerCase().includes(searchedItem.toLowerCase())) {
      return true;
    }
  });
  function onSearch(e) {
    setSearchedItem(e);
  }

  const addDataToArr = (form) => {
    setNewUserArr([...newUserArr, form]);
  };

  useEffect(() => {
    setTimeout(() => {
      // alert('Novo Usuário Adicionado')
    }, 100);
  }, [newUserArr]);

  const deleteData = (data) => {
    let restOfDataArray = newUserArr.filter(
      (element, ind) =>
        `${element.name}${element.email}${element.occupation}${element.birthday}` !==
        data
    );
    setNewUserArr(restOfDataArray);
  };

  return (
    <>
      <Header />
      <SearchBar searchedData={searchedItem} onSearch={onSearch} />
      <Table
        type="user"
        headerData={headerUser}
        bodyData={searchedArray}
        removeItem={(index) => deleteData(index)}
        sortData={sortData}
      />
      <AddData saveData={(val) => addDataToArr(val)} />
    </>
  );
};

export default Home;

//campo de busca pelo nome
//ordenação - select que vai listar os items de cabeçario e quando selecionar ordenar por ordem alfabética
