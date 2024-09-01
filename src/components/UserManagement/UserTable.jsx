import React, { useState } from "react";
import { MdMoreVert, MdArrowBack } from "react-icons/md";
import styles from "./UserManagement.module.css";

function UserTable() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);

  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "9123456787",
      team: "Management"
    },
  ];

  const handleActionClick = (event, user) => {
    setMenuPosition({
      top: event.clientY,
      left: event.clientX,
    });
    setMenuVisible(!menuVisible);
    setUserToEdit(user); // Set the user to edit
  };

  const handleEdit = () => {
    setMenuVisible(false);
    setModalVisible(true);
    setCurrentAction('edit');
  };

  const handleDelete = () => {
    setMenuVisible(false);
    setModalVisible(true);
    setCurrentAction('delete');
  };

  const handleDeleteConfirm = () => {
    console.log("User deleted");
    setModalVisible(false);
    // Handle deletion logic here
  };

  const handleEditConfirm = () => {
    console.log("User edited");
    setModalVisible(false);
    // Handle edit logic here
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Phone Number</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <button
                  className={styles.editButton}
                  onClick={(e) => handleActionClick(e, user)}
                >
                  <MdMoreVert />
                </button>
                {menuVisible && (
                  <div
                    className={styles.actionMenu}
                    style={{
                      position: "absolute",
                      top: menuPosition.top,
                      left: menuPosition.left,
                    }}
                  >
                    <div onClick={handleEdit}>Edit</div>
                    <div onClick={handleDelete}>Delete</div>
                  </div>
                )}
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.team}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Modal */}
      {modalVisible && currentAction === 'delete' && (
        <div className={styles.modalOverlay}>
          <div className={styles.editModal}>
            <button className={styles.backButton} onClick={handleCloseModal}>
              <MdArrowBack />
            </button>
            <h2 className={styles.modalTitle1}>Delete User</h2>
            <p className={styles.modalSubtitle}>Are you sure you want to delete this user?</p>
            <div className={styles.buttonGroup}>
              <button className={styles.submitButton1} onClick={handleDeleteConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {modalVisible && currentAction === 'edit' && (
        <div className={styles.modalOverlay}>
          <div className={styles.editModal}>
            <button className={styles.backButton} onClick={handleCloseModal}>
              <MdArrowBack />
            </button>
            <h2 className={styles.modalTitle1}>Edit User</h2>
            <form className={styles.editForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <div>
                  <label>
                    First Name
                    <input
                      type="text"
                      value={userToEdit?.name}
                      placeholder="First Name"
                      className={styles.inputField}
                      disabled
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Last Name
                    <input
                      type="text"
                      value={userToEdit?.name}
                      placeholder="Last Name"
                      className={styles.inputField}
                      disabled
                    />
                  </label>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div>
                  <label>
                    Email ID
                    <input
                      type="text"
                      value={userToEdit?.email}
                      placeholder="Email ID"
                      className={styles.inputField}
                      disabled
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Role
                    <select
                      defaultValue={userToEdit?.team}
                      className={styles.inputField}
                    >
                      <option value="Management">Management</option>
                      <option value="Development">Stock</option>
                      <option value="Design">Sales</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.submitButton} onClick={handleEditConfirm}>
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserTable;
