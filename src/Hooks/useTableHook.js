import React, { useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  resetAllData,
} from "../redux/actions/dashboard.actions";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/slices/modal";

const useTableHook = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.dashboard);
  const { isshowLoader } = useSelector((state) => state.loader);
  const { title, submitBtnText, type, showModal, submitId } = useSelector(
    (state) => state.modalSlice
  );

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");

  /* Form inputs to add/edit user */
  const formItems = [
    {
      itemName: "First Name",
      value: fname,
      onValueChange: (e) => setFName(e.target.value),
    },
    {
      itemName: "Last Name",
      value: lname,
      onValueChange: (e) => setLName(e.target.value),
    },
    {
      itemName: "Email",
      value: email,
      onValueChange: (e) => setEmail(e.target.value),
    },
    {
      itemName: "Password",
      value: password,
      type: "password",
      onValueChange: (e) => setPassword(e.target.value),
    },
    {
      itemName: "Phone",
      value: phone,
      onValueChange: (e) => setPhone(e.target.value),
    },
    {
      itemName: "Domain",
      value: domain,
      onValueChange: (e) => setDomain(e.target.value),
    },
  ];

  /* Add/Edit Modal Content */
  const addModalContent = formItems?.map((item) => (
    <div className="mb-3">
      <div>
        <label for={item?.itemName?.toLowerCase()} className="block mb-2">
          {item?.itemName}
        </label>
      </div>
      <div>
        <input
          required
          type={item?.type ? item.type : "text"}
          id={item?.itemName?.toLowerCase()}
          name={item?.itemName?.toLowerCase()}
          value={item?.value}
          onChange={(e) => item?.onValueChange(e)}
          className="border block  rounded w-100 p-1  "
        />
      </div>
      {item?.dropdownContent}
    </div>
  ));

  /* Delete Modal Content*/
  const deleteModalContent = "Are you sure you want to delete user?";

  /* To close Modal*/
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  /* Call api to add user */
  const handleAddUser = (e) => {
    e.preventDefault();
    /* Make api call for add user */
    dispatch(addUser({ fname, lname, email, password, phone, domain }));
  };

  /* Show Add user Modal */
  const handleAdd = () => {
    setFName("");
    setLName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setDomain("");
    dispatch(
      openModal({
        title: "Add User",
        submitBtnText: "Add",
        type: "ADD",
      })
    );
  };

  /* Call api to edit user */
  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id: submitId,
        fname,
        lname,
        email,
        password,
        phone,
        domain,
      })
    );
  };

  /* Show Edit user Modal*/
  const handleUpdate = ({ item }) => {
    const { firstName, lastName, email, phone, domain, password } = item;
    setFName(firstName);
    setLName(lastName);
    setEmail(email);
    setPassword(password);
    setPhone(phone);
    setDomain(domain);
    dispatch(
      openModal({
        title: "Edit User",
        submitBtnText: "Update",
        submitId: item?.id,
        type: "EDIT",
      })
    );
  };

  /* Call api to delete user */
  const handleDeleteUser = (e) => {
    e.preventDefault();
    dispatch(deleteUser({ id: submitId }));
  };

  /* Show Delete user Modal */
  const handleDelete = ({ id }) => {
    dispatch(
      openModal({
        title: "Delete User",
        submitBtnText: "Delete",
        submitId: id,
        type: "DELETE",
      })
    );
  };

  /* Call get users api for user data listing on page load */
  useEffect(() => {
    dispatch(getUser());
    return () => dispatch(resetAllData());
  }, []);

  return {
    isshowLoader,
    addModalContent,
    deleteModalContent,
    userData,
    showModal,
    title,
    submitBtnText,
    type,
    handleCloseModal,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
};

export default useTableHook;
