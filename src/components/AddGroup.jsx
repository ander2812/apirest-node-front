import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";
import axios from 'axios'
import cors from "cors"

export function AddGroup() {
    /*$("element").on("event", function(){
        $.get("datos de la lista", function(newData){
            that.setState(newData);

            // to sync manually do
            that.refs.myRef.syncData();
        });
    });*/
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    var id = Math.random().toString(36).substr(2, 18)
    const navigate = useNavigate();
    const API = "http://localhost:8080/api/groups"
    const [image, setImage] = useState("");
    const [endhour, setEndHour] = useState(0);
    const [starthour, setStartHour] = useState(0);
    const [day, setDay] = useState("");
    const [date, setDate] = useState("");

    const schedule2 = {
        day: day, 
        startHour: parseInt(starthour), 
        endHour: parseInt(endhour)}
    
    const schedule = [schedule2]

    const submit = async () => {

        console.log(image);

        axios.post(API,{
            
            name: name,
            description: description,
            id: id,
            owner_id: auth.currentUser.uid,
            creationDate: date,
            schedule: schedule
              
            }).then((response) => {
              console.log(response);
              });
          
          navigate("/groups");
        
    }

    return (
        <div className="w-full max-w-xs m-auto">
            <Card sx={{ minwitdh : 275}}>
                <CardContent>
                    <Form>
                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Fecha de creacion</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Horario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter day"
                                onChange={(e) => setDay(e.target.value)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Enter start hour"
                                onChange={(e) => setStartHour(e.target.value)}
                            />
                            <Form.Control
                                type="number"
                                placeholder="Enter end hour"
                                onChange={(e) => setEndHour(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Seleccione una foto</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="choose image"
                                onChange={(e) => setImage(e.target.value)}
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