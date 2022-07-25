import "./Home.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import AddData from "../components/AddData/AddData";
import SearchBar from "../components/SearchBar/SearchBar";
import { userArr } from "../mock/users";

const Home = () => {
  const headerUser = ["Name", "Email", "Occupation", "Birthday"];
  const columnMap = {
    Name: { key: "name", type: "string" },
    Email: { key: "email", type: "string" },
    Occupation: { key: "occupation", type: "string" },
    Birthday: { key: "birthday", type: "date" },
  };
  const [newUserArr, setNewUserArr] = useState(userArr);
  const [searchedItem, setSearchedItem] = useState("");
  const [order, setOrder] = useState("");
  const [sortStatus, setSortStatus] = useState({});


  const sortData = (headerUser) => {
    const { key, type } = columnMap[headerUser];

    const sorted = [...newUserArr].sort((a, b) => {
      let sortValue = 0;
      if (type === "date") {
        sortValue = new Date(a[key]) - new Date(b[key]);
      } else {
        sortValue = a[key].localeCompare(b[key]);
      }
      return order === "dsc" ? -sortValue : sortValue;
    });
    setNewUserArr(sorted);

    setSortStatus((prev) => ({
      ...prev,
      [headerUser]: order === "dsc" ? "asc" : "dsc",
    }));

    if (order === "" || "asc") {
      setOrder("dsc");
    }
    if (order === "dsc") {
      setOrder("asc");
    }
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
        removeItem={(el) => deleteData(el)}
        sortData={sortData}
        ordIcon={sortStatus}
      />
      <AddData saveData={(val) => addDataToArr(val)} />
    </>
  );
};

export default Home;

//campo de busca pelo nome
//ordenação - select que vai listar os items de cabeçario e quando selecionar ordenar por ordem alfabética
