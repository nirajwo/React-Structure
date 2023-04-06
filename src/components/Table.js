import React from "react";
import "./style.css";
import { Trash, Pen } from "react-bootstrap-icons";

/* Table for user listing */
const Table = ({ userData, handleAdd, handleUpdate, handleDelete }) => {
  return (
    <>
      <div className=" m-5 ">
        <div className="text-right mb-2 ">
          <button onClick={() => handleAdd()} className="add-btn">
            Add User
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead className="bg-darkgrey">
            <tr>
              <th>Sr. No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Domain</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.domain}</td>
                  <td className="text-center">
                    <Trash
                      style={{ marginRight: 20 }}
                      onClick={() => handleDelete({ id: item?.id })}
                    />
                    <Pen onClick={() => handleUpdate({ item })} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
