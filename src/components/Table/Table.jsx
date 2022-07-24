import { useMemo, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import "./table.css";

function Table(props) {
  const { headerData, bodyData, removeItem, sortData } = props;

  //sort
  
  //sort
  return (
    <div className="user-data">
      <table className="user-table">
        <thead>
          <tr className="data-th">
            {headerData.map((headerTable) => (
              <th onClick={sortData} id={"header-"+headerTable.toLowerCase()}>
                {headerTable}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((item) => (
            <tr className="data-tr">
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.occupation}</td>
              <td>{formatDate(item.birthday)}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() =>
                    removeItem(
                      `${item.name}${item.email}${item.occupation}${item.birthday}`
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

//nth-child
//useState
//objectKey
