import React from "react";
import "./Datagrid.css";

import Footer from "../../src/layout/Footer/Footer.js";
const haut = String.fromCharCode(0x2191);
const bas = String.fromCharCode(0x2193);

const Posts = ({
  posts,
  loading,
  ChangeOrder,
  SetChangeOrder,
}) => {
  if (loading) {
    return <h2>Chargement des données...</h2>;
  }

  return (
    <body>
<div class="divTable blueTable">
<div class="divTableHeading">
<div class="divTableRow">
<div class="divTableHead">ID
            {
              <button
                class="SortBtn"
                onClick={() => SetChangeOrder(!ChangeOrder)}
              >
                {" "}
                {ChangeOrder ? haut : bas}{" "}
              </button>
            }{" "}</div>
<div class="divTableHead">Prenom{" "}
            {
              <button
                class="SortBtn"
                onClick={() => SetChangeOrder(!ChangeOrder)}
              >
                {" "}
                {ChangeOrder ? haut : bas}{" "}
              </button>
            }{" "}</div>
<div class="divTableHead">Nom de famille{" "}
            {
              <button
                class="SortBtn"
                onClick={() => SetChangeOrder(!ChangeOrder)}
              >
                {" "}
                {ChangeOrder ? haut : bas}{" "}
              </button>
            }{" "}</div>
<div class="divTableHead">Email{" "}
            {
              <button
                class="SortBtn"
                onClick={() => SetChangeOrder(!ChangeOrder)}
              >
                {" "}
                {ChangeOrder ? haut : bas}{" "}
              </button>
            }{" "}</div>
<div class="divTableHead">IP{" "}
            {
              <button
                class="SortBtn"
                onClick={() => SetChangeOrder(!ChangeOrder)}
              >
                {" "}
                {ChangeOrder ? haut : bas}{" "}
              </button>
            }{" "}</div>
</div>
</div>
<div class="divTableBody">
{posts.map((post) => (
<div class="divTableRow">
<div class="divTableCell" key={post.id} >{post.id}</div>
<div class="divTableCell">{post.first_name}</div>
<div class="divTableCell">{post.last_name}</div>
<div class="divTableCell">{post.email}</div>
<div class="divTableCell">{post.ip_address}</div>
</div>
))}
</div>
</div>
    <Footer></Footer>
    </body>
  );
};

export default Posts;

