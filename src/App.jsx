import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Todo from "./components/Todo/Todo";
import WordCounter from "./components/WordCounter/WordCounter";
import AppLayout from "./AppLayout";
import Calculator from "./components/Calculator/Calculator";
import ErrorPage from "./Error-404";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/todos",
          element: <Todo />,
        },
        {
          path: "/word-counter",
          element: <WordCounter />,
        },
        {
          path: "/calculator",
          element: <Calculator />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
