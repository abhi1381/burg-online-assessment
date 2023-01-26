function UserForm({
  handleAddUser,
  handleUpdateUser,
  editUserData,
  editId,
  setEditId,
  setUpdateUserData,
}) {
  let isEditMode = false;
  let buttonText = "Add";
  if (editId !== null) {
    isEditMode = true;
    buttonText = "Update";
  }

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          value={editUserData?.first_name}
          onChange={(e) =>
            setUpdateUserData({ ...editUserData, first_name: e.target.value })
          }
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={editUserData?.last_name}
          onChange={(e) =>
            setUpdateUserData({ ...editUserData, last_name: e.target.value })
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={editUserData?.email}
          onChange={(e) =>
            setUpdateUserData({ ...editUserData, email: e.target.value })
          }
        />
      </label>
      <button onClick={() => setEditId(null)}>Cancel</button>
      <button
        onClick={() => {
          if (isEditMode) {
            handleUpdateUser(editId);
          } else {
            handleAddUser(editUserData);
            setUpdateUserData({ first_name: "", last_name: "", email: "" });
          }
        }}
        type="button"
      >
        {buttonText} User
      </button>
    </form>
  );
}

export default UserForm;
