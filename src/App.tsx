import React from "react";
import { ErrorBoundary } from "../src/components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header/Header";
import { TourList } from "./components/TourList/TourList";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

export const App: React.FC = () => {
  const appTitle = process.env.REACT_APP_TITLE || "Знайди свій наступний тур";

  return (
    <div className="container">
      <ErrorBoundary>
        <Header title={appTitle} />
        <TourList />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};
