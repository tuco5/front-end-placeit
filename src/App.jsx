import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomePage from "./pages/home/home.page";
import MockupsPage from "./pages/mockups/mockups.page";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mockups" element={<MockupsPage />} />
          <Route path="/*" element={<HomePage notFound="true" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
