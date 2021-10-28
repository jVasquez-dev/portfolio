import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { AboutScreen } from "../components/Screens/AboutScreen";
import { HomeScreen } from "../components/Screens/HomeScreen";
import { ProjectsScreen } from "../components/Screens/ProjectsScreen";
import { ResumeScreen } from "../components/Screens/ResumeScreen";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";

export const  AppRouter = () => {
    return (
        <Router>
            <div>

                <Header />
                <main>
                    <Switch>
                        <Route path="/about">
                            <AboutScreen />
                        </Route>
                        <Route path="/projects">
                            <ProjectsScreen />
                        </Route>
                        <Route path="/resume">
                            <ResumeScreen />
                        </Route>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                </main>
                <Footer />
                
            </div>
        </Router>
    );
}