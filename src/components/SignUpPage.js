import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [object, setObject] = useState({
    name: "",
    email: "",
    password: "",
    Address: "",
    image: null,
  });
 

  const handleChange = (e) => {
    e.preventDefault();
    setObject({ ...object, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setObject({ ...object, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(object)
    setObject({
      name: "",
      email: "",
      password: "",
    });
    navigate('/form'); 
  };

  return (
    <div className={styles.body}>
    <div className={styles.main}>
      <div className={styles.main1}>
        <h1>SignUpPage✍️</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <br/>
            <input
              type="text"
              id="name"
              name="name"
              value={object.name}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              value={object.email}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={object.password}
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <button className={styles.btn} type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;