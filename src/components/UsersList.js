import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUser,
  deleteUser,
} from "../store/usersSlice";
import UserForm from "./UserForm";

function UsersList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [updateUserData, setUpdateUserData] = useState({});
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersRequest());
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => dispatch(fetchUsersSuccess(data.data)))
      .catch((error) => dispatch(fetchUsersFailure(error)));
  }, [dispatch]);

  useEffect(() => {
    if (editId) {
      setUpdateUserData(users.find((user) => user.id === editId));
    }
  }, [users, editId]);

  const handleAddUser = (newUser) => {
    dispatch(addUser({ ...newUser, id: users.length + 1 }));
  };

  const handleUpdateUser = (id) => {
    if (editId === id) {
      dispatch(updateUser({ id, updates: updateUserData }));
      setEditId(null);
      setUpdateUserData({ first_name: "", last_name: "", email: "" });
      return;
    }
    setEditId(id);
  };

  const handleDeleteUser = (id) => {
    setEditId(null);
    setUpdateUserData({});
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`${user.id}`}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdateUser(user.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserForm
        handleAddUser={handleAddUser}
        handleUpdateUser={handleUpdateUser}
        editUserData={updateUserData}
        setUpdateUserData={setUpdateUserData}
        editId={editId}
        setEditId={() => setEditId(null)}
      />
    </div>
  );
}

export default UsersList;
