import{r as c,j as s}from"./index-6f0d7676.js";import{B as h}from"./Button-0787857e.js";import{C as j}from"./Card-4ef03b10.js";import{C as x,a as m,T as p}from"./Table-69490aad.js";import{A as u}from"./Modal-715abe88.js";import"./Col-77f3c9a7.js";const A=()=>{const[d,l]=c.useState([]),n=JSON.parse(localStorage.getItem("users"))||[];c.useEffect(()=>{l(n)},[]);const o=t=>{const r=d.filter((i,a)=>a!==t);localStorage.setItem("users",JSON.stringify(r)),l(r)};return s.jsx("div",{children:s.jsx(j,{children:s.jsxs(x,{children:[s.jsxs("div",{className:"d-flex gap-5",children:[s.jsx(m,{tag:"h5",children:"Data Karyawan"}),s.jsx(u,{})]}),s.jsxs(p,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"No"}),s.jsx("td",{children:"Kode"}),s.jsx("th",{className:"pe-5 ps-5",children:"Name"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Alamat"}),s.jsx("th",{children:"Jabatan"}),s.jsx("th",{children:"Aksi"})]})}),s.jsx("tbody",{children:d.map(({name:t,email:r,alamat:i,jabatan:a},e)=>s.jsxs("tr",{className:"border-top",children:[s.jsx("td",{children:e+1}),s.jsx("td",{children:"KA0"+(e+1)}),s.jsx("td",{children:t}),s.jsx("td",{children:r}),s.jsx("td",{children:i}),s.jsx("td",{children:a}),s.jsx("td",{children:s.jsx(h,{onClick:()=>o(e),children:s.jsx("i",{className:"bi bi-trash"})})})]},e))})]})]})})})};export{A as default};
