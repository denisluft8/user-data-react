import Header from "../components/Header";
import UserTable from "../components/UserTable";
import { userArr } from "../mock/users";
import { products, productsArr } from "../mock/products";

const Home = () => {
  const headerUser = ["Name", "Email", "Occupation", "Birthday",]
  const headerProduct = ["Product", "Company", "Price",]

  return (
    <>
      <Header />
      <UserTable type="user" headerData={headerUser} bodyData={userArr} />
      <UserTable type="product" headerData={headerProduct} bodyData={productsArr} />
    </>
  );
};

export default Home;
