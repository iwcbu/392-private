import Root from "./components/mains/Root.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router';

const router=createBrowserRouter(
  [
    {path:"*",Component:Root}
  ]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
