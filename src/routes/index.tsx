
import App from "@/App";
import Task from "@/pages/task";
import User from "@/pages/user";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
{
path: "/",
Component:App,
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