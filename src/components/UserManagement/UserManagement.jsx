import React, { useState } from "react";
import styles from "./UserManagement.module.css";
import SearchBar from "./SearchBar";
import UserTable from "./UserTable";

function UserManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Users</h1>
          <p className={styles.subtitle}>Manage Users of Company</p> {/* New subtitle */}
          <SearchBar />
        </div>
        <button className={styles.addButton} onClick={openModal}>
          + Add Users
        </button>
      </header>
      <UserTable />

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h2 className={styles.modalTitle}>Add User</h2>
            <form className={styles.form}>
              <label className={styles.label}>
                Select Role
                <div className={styles.dropdownContainer}>
                  <select name="role" className={styles.selectInput}>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </label>
              <label className={styles.label}>
                First Name
                <input type="text" name="firstName" className={styles.input} />
              </label>
              <label className={styles.label}>
                Last Name
                <input type="text" name="lastName" className={styles.input} />
              </label>
              <label className={styles.label}>
                Email Address
                <input type="email" name="email" className={styles.input} />
              </label>
              <label className={styles.label}>
                Password
                <input type="password" name="password" className={styles.input} />
              </label>
              <label className={styles.label}>
                Confirm Password
                <input type="password" name="confirmPassword" className={styles.input} />
              </label>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default UserManagement;
