import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Header } from "./components/Header/Header";
import { TourList } from "./components/TourList/TourList";
import { Footer } from "./components/Footer/Footer";
import { TourDetailsPage } from "./pages/TourDetailsPage/TourDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

export const App: React.FC = () => {
  const appTitle = process.env.REACT_APP_TITLE || "Знайди свій наступний тур";

  return (
    <div className="container">
      <ErrorBoundary>
        <Header title={appTitle} />

        <Routes>
          <Route path="/" element={<TourList />} />
          <Route path="/tours/:id" element={<TourDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </ErrorBoundary>
    </div>
  );
};
