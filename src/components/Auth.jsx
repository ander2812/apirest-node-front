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

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API = "http://localhost:8080/api/myGroups"
  const API2 = "http://localhost:8080/api/profileDetails"
  const { singUp } = useAuth();
  const { login } = useAuth();
  const [setGroup] = useState([]);
  const [setCourse] = useState([]);
  const navigate = useNavigate();


  const submit = async () => {
    //console.log(email, password);
    await login(email, password);
    const id = auth.currentUser.uid


    axios.post(API,{
      id: id
    }).then((response) => {
      //console.log(response);
      setGroup(response.data)
      });
      //console.log(id)
    navigate("/groups");

    axios.post(API2,{
      id: id
    }).then((response) => {
      //console.log(response);
      setGroup(response.data)
      });
      //console.log(id)
  };

  const onClick = async () => {

    navigate("/singup");
  };
  return (
    <div className="w-full max-w-xs m-auto">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Form>
            <Form.Group className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button onClick={submit} variant="primary">
              Submit
            </Button>
            <p></p>
            <h3>¿Aun no tienes cuenta?</h3>
            <Button onClick={onClick} variant="primary">
              Sing Up
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
