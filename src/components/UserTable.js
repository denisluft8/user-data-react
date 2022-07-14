import { formatDate } from "../utils/formatDate";

function UserTable(props) {
  const { headerData, bodyData, type } = props;
  if (type==="user"){
    return(
    <table className="user-Table">
      <thead>
        <tr className="data-th">
          {headerData.map((headerTable) => (
            <th>{headerTable}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((user, index) => (
          <tr key={`user-${index}`} className={`user-${index}`}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.occupation}</td>
            <td>{formatDate(user.birthday)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}else if(type==="product"){
  return(
    <table className="user-Table">
      <thead>
        <tr className="data-th">
          {headerData.map((headerTable) => (
            <th>{headerTable}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((user, index) => (
          <tr key={`user-${index}`} className={`user-${index}`}>
            <td>{user.product}</td>
            <td>{user.company}</td>
            <td>{user.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
}

export default UserTable;
//nth-child

//if
//useState
//objectKey
