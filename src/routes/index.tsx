

import HomeLayout from "@/layouts/HomeLayout";
import Task from "@/pages/Task";
import User from "@/pages/User";



import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
{
path: "/",
Component:HomeLayout,
children:[{
  path:'users',
  Component:User,
},
{
  path:'task',
  Component:Task,
},

]
},


])
export default router;