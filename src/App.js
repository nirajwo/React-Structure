import "./App.css";
import Table from "./components/Table";
import Loader from "./components/Loader";
import CommonModal from "./components/Modal";
import useTableHook from "./Hooks/useTableHook";
import { ADD, EDIT } from "./utils/constants";

function App() {
  const {
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
  } = useTableHook();

  return (
    <>
      {/*Loader */}
      {isshowLoader && <Loader />}

      {/*Modal for add/edit/delete user */}
      <CommonModal
        show={showModal}
        modalTitle={title}
        handleClose={handleCloseModal}
        content={
          type == ADD
            ? addModalContent
            : type == EDIT
            ? addModalContent
            : deleteModalContent
        }
        handleSubmit={(e) =>
          type == ADD
            ? handleAddUser(e)
            : type == EDIT
            ? handleEditUser(e)
            : handleDeleteUser(e)
        }
        submitBtnText={submitBtnText}
      />

      {/*Table for users list*/}
      <Table
        userData={userData}
        handleAdd={handleAdd}
        handleUpdate={({ item }) => handleUpdate({ item })}
        handleDelete={({ id }) => handleDelete({ id })}
      />
    </>
  );
}

export default App;
