import Header from '../components/Header'
import Table from '../components/Table'
import { userArr } from '../mock/users'
import { productsArr } from '../mock/products'

const Home = () => {
  const headerUser = ['Name', 'Email', 'Occupation', 'Birthday']
  const headerProduct = ['Product', 'Company', 'Price']

  return (
    <>
      <Header />
      <Table type="user" headerData={headerUser} bodyData={userArr} />
      <Table type="product" headerData={headerProduct} bodyData={productsArr} />
    </>
  )
}

export default Home
