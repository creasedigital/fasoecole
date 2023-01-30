import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/auth/Signup";
import VerifyEmail from "./views/auth/VerifyEmail";

import Home from "./views/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/verify-email" element={<VerifyEmail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
