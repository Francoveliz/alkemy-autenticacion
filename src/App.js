import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<PublicRoute restricted exact path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
