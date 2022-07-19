import "./Home.css";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import AddData from "../components/AddData/AddData";
import { userArr } from "../mock/users";
import { productsArr } from "../mock/products";

const Home = () => {
  const headerUser = ["Name", "Email", "Occupation", "Birthday"];
  const headerProduct = ["Product", "Company", "Price"];
  const printData = (value) => console.log(value);

  return (
    <>
      <Header />
      <Table type="user" headerData={headerUser} bodyData={userArr} />
      <AddData saveData={(val) => printData(val)} />
      <Table type="product" headerData={headerProduct} bodyData={productsArr} />
    </>
  );
};

export default Home;
