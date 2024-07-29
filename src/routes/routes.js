import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout.jsx"))

export const GetById = lazy(() => import("../components/getById/getById"))

export const Login = lazy(() => import("../components/login/login"))

export const Home = lazy(() => import("../components/home/home"))

export const Basket = lazy(() => import("../components/basket/basket.jsx"))

export const Sups = lazy(() => import("../components/home/sups/sups"))

export const Garnirs = lazy(() => import("../components/home/garnirs/garnirs"))

export const Breakfast = lazy(() => import("../components/home/breakfast/breakfast"))

export const Salats = lazy(() => import("../components/home/salats/salats"))

export const Breads = lazy(() => import("../components/home/breads/breads"))

export const Deserts = lazy(() => import("../components/home/deserts/deserts"))

export const Drinks = lazy(() => import("../components/home/drinks/drinks"))