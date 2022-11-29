import "firebase/auth";
import React, { useState } from "react";
import cors from "cors"
import { auth } from "../firebase-config";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export function AddUser(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API = "http://localhost:8080/api/auth"
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const navigate = useNavigate();
    const { singUp } = useAuth();

    const submit = async () => {
        console.log(email, password, name, username);
        await singUp(email, password);

        const id = auth.currentUser.uid

        axios.post(API,{

          name: name,
          id: id,
          username: username,
          email: email,
            
          }).then((response) => {
            console.log(response);
            });
        
        navigate("/");
      };

    return(

        <div className="w-full max-w-xs m-auto">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Form>
            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicEmail">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button onClick={submit} variant="primary">
              Submit
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>

    );
}