import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./Page/AuthPage";
import MainPage from "./Page/MainPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/main">
                    <MainPage/>
                </Route>
                <Redirect to="/main"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};