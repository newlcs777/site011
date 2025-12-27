import { Routes, Route } from "react-router-dom";

import LandingHomePage from "../modules/landing/pages/LandingHomePage";
import LandingLoginPage from "../modules/landing/pages/LandingLoginPage";
import AboutPage from "../modules/landing/pages/AboutPage";
import BeliefPage from "../modules/landing/pages/BeliefPage";
import LocationPage from "../modules/landing/pages/LocationPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingHomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/nosso-credo" element={<BeliefPage />} />
      <Route path="/onde-estamos" element={<LocationPage />} />
      <Route path="/admin/login" element={<LandingLoginPage />} />
    </Routes>
  );
}
