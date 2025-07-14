
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Outlet, useLocation } from "react-router";

export default function HomeLayout() {
  const location = useLocation();

  // Paths where Hero should NOT appear
  const hideHeroOn = ["/task", "/users"];

  const shouldHideHero = hideHeroOn.includes(location.pathname);

  return (
    <>
      <Header />
      {!shouldHideHero && <Hero />}
      <Outlet />
    </>
  );
}
