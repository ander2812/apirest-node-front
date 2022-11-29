import styles from "./GroupCard.module.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import axios from 'axios'
import 'firebase/firestore';
import { auth } from "../firebase-config";
import stylesButton from "./JoinGroup.module.css";
import { Link } from "react-router-dom";

export function GroupCard({ group }) {
  //const db = getDatabase();

  const imgUrl = "https://www.prep2021chih.org.mx/wp-content/uploads/2022/10/Focus-Groups.webp";
  const API = "http://localhost:8080/api/groups"

  const handleClick = async () => {

    const id = auth.currentUser.uid

    axios.post(API+"/idUser",{
      id: id
    }).then((response) => {
      //console.log(response);
      });
      //console.log(id)

      axios.post(API+"/addgroup",{
        id: group.id,
        name: group.name,
        description: group.description,
        creationDate: group.creationDate,
        ownerId: group.ownerId,
        schedule: group.schedule
      }).then((response) => {
        //console.log(response);
        });




  };

  return (
    <li className={styles.movieCard}>
      <Link to={"/group/" + group.id}>
        <div>
          <br />
          <strong>{group.name}</strong> <br />
        </div>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          alt={group.name}
          src={imgUrl}
        />
        <div>
        {group.schedule.map((schedule) => schedule.day)}
        <br />
        {group.schedule.map((schedule) => parseInt(schedule.startHour))}
          - 
        {group.schedule.map((schedule) => parseInt(schedule.endHour))}

        <br />

        </div>
      </Link>
      <strong>Unirse</strong> <br />
        <button type="button" onClick={() => handleClick()}>
          <AiOutlineUsergroupAdd size={40} color="#6badf0" />
        </button>
    </li>
  );
}
