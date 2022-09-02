import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import Search from "./pages/Search/Search";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/movies.bu" element={<Home />} />
					<Route path="/movies.bu/movie/:id" element={<Movie />} />
					<Route path="/movies.bu/search" element={<Search />} />
					<Route path="*" element={<Navigate to="/movies.bu/" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
