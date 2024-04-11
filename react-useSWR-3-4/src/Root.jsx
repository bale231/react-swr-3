import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import GithubUser from "./components/GithubUser";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Root() {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <Routes>
            <Route path="users" element={<GithubUser />} />
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </>
  );
}

export default Root;
