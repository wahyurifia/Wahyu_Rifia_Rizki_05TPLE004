import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const Starter = lazy(() => import("../views/Starter.js"));
const Karyawan = lazy(() => import("../views/Karyawan.js"));
const Jabatan = lazy(() => import("../views/Jabatan.js"));
const Divisi = lazy(() => import("../views/Divisi.js"));
const Absensi = lazy(() => import("../views/Absensi.js"));
const Izin = lazy(() => import("../views/Izin.js"));
const Lembur = lazy(() => import("../views/Lembur.js"));


const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/karyawan", exact: true, element: <Karyawan /> },
      { path: "/jabatan", exact: true, element: <Jabatan /> },
      { path: "/divisi", exact: true, element: <Divisi /> },
      { path: "/absensi", exact: true, element: <Absensi /> },
      { path: "/izin", exact: true, element: <Izin /> },
      { path: "/lembur", exact: true, element: <Lembur /> },
    ],
  },
];

export default ThemeRoutes;
