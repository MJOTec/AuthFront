import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import axios from "axios";
import Login from "./componentes/Login";

//Listado temporal de productos
const productos = [
  {
    id: 1,
    producto: "Microprocesador i3",
    precio: 120,
  },
  {
    id: 2,
    producto: "Microprocesador i5",
    precio: 250,
  },
];

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://webintegradora.azurewebsites.net/api/products');
          setProductos(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      fetchProducts();
    }, []);
  
    const updateProductos = (newProduct) => {
      setProductos(prevProductos => [...prevProductos, newProduct]);
    };


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      
    }
  }, [])
  
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggeAppUser", JSON.stringify(user));

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const productsForm = () => (
        <Header/>
  );


  return (
    <>
      {/*{user === null && loginForm()}
      {user !== null && productsForm()} */}

      {user === null ? (
        <Login
        />
      ) : (
        productsForm()
      )}
    </>
  );
}

export default App;
