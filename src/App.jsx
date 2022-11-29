import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyGroupGrid } from "./components/MyGroupGrid";
import { AddGroup } from "./components/AddGroup"
import { GroupDetails } from "./pages/GroupDetails";
import { ProfileDetails } from "./pages/ProfileDetails";
import { AddUser } from "./components/AddUser";
import { AuthProvider } from "./context/authContext";
import { Auth } from "./components/Auth";
import './firebase-config'
import Navbar from "./layouts/Navbar";
import styles from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/groups",
    element: <Navbar />,
  },
  {
    path: "/addgroup",
    element: <AddGroup/>,
  },
  {
    path: "/singup",
    element: <AddUser/>
  },
  {
    path: "/group/:groupId",
    element: <GroupDetails/>
  },
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/mygroups",
    element: <MyGroupGrid/>
  },

  {
    path: "/profileDetails",
    element: <ProfileDetails/>
  }
]);

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>MyApp</h1>
      </header>
      <main>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </main>
    </div>
  );
}
