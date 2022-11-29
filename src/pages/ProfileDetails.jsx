import { IoExitOutline } from "react-icons/io5";
import axios from "axios";
import { ProfileGrid } from "../components/ProfileGrid";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";
import { BiBookAdd } from "react-icons/bi";
export function ProfileDetails() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  var sum = 0;
  var temp = false;
  const imgUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";
  const API = "http://localhost:8080/api/profileDetails";
  var count = 0;

  const handleClick = async () => {
    console.log("presionando boton");
    navigate("/addGroup");
  };

  const handleClick2 = async () => {
    auth.signOut();
    navigate("/");
  };

  useEffect(() => {

    axios.get(API).then((resp) => {
      setUser(resp.data);
      console.log(resp.data);
    });

      console.log("este es el id del usuario " + user.id);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className={styles.movieDetails}>
          <img
            className={`${styles.col} ${styles.movieImage}`}
            src={imgUrl}
            alt={user.name}
          />
          <div className={styles.col}>
          <div>
            <h1>Perfil:</h1>
          </div>
          <br></br>
          <p>
            <strong>Nombre:</strong>
            <br />
            {user.name}
          </p>
          <p>
            <strong>Email:</strong> <br />
            {user.email}
          </p>
          <p>
            <strong>Username:</strong>
            <br />
            {user.username}
          </p>

          <button type="button" onClick={() => handleClick()}>
            <BiBookAdd size={40} color="#6badf0" />
          </button>

          <br />

          <strong>Crear Grupo</strong>

          <br />
          <br />

          <button type="button" onClick={() => handleClick2()}>
            <IoExitOutline size={40} color="#6badf0" />
          </button>
          <br />
          <strong>Cerrar Sesion</strong>
        </div>
      </div>
      <br />
      <br />

      <div className={styles.movieDetails}>

      <h1>Grupos</h1>

      </div>
      <ProfileGrid />
    </div>
  );
}
