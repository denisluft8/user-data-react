import { formatDate } from "../../utils/formatDate";
import "./table.css";

function Table(props) {
  const { headerData, bodyData, type } = props;
  const isUser = type === "user";

  const buildTableItems = () => {
    return bodyData.map((item) => (
      <tr className="data-tr">
        <td>{item.name}</td>
        {isUser ? (
          <>
            <td>{item.email}</td>
            <td>{item.occupation}</td>
            <td>{formatDate(item.birthday)}</td>
          </>
        ) : (
          <>
            <td>{item.company}</td>
            <td>{item.price}</td>
          </>
        )}
      </tr>
    ));
  };
  return (
    <div className="user-data">
      <table className="user-table">
        <thead>
          <tr className="data-th">
            {headerData.map((headerTable) => (
              <th>{headerTable}</th>
            ))}
          </tr>
        </thead>
        <tbody>{buildTableItems()}</tbody>
      </table>
    </div>
  );
}

export default Table;

//nth-child
//useState
//objectKey
