import Posts from "./Datagrid";
import Filters from "./Filter";
import React, { useState, useEffect } from "react";
import "./../App.js";
import axios from "axios";
import Pagination from "./Pagination";

import {AtoZ} from "./Datagrid.pure"

const EnchanceData = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [ChangeSort,SetChangeSort] = useState(AtoZ(posts));



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://my.api.mockaroo.com/SchemaJson.json?key=a1444f90"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const change_nb_posts = () => {
      setPostsPerPage(postsPerPage);
  };

  const tri_croissant_decroissant = () => {};

  const setSliderLenght = () => {};

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Collection</h1>
      <Filters
        change_nb_posts={change_nb_posts}
        setPostsPerPage={setPostsPerPage}
        
        setSliderLenght={setSliderLenght}
      />
      <Posts
        posts={currentPosts}
        loading={loading}
        tri={tri_croissant_decroissant}
        ChangeSort={ChangeSort}
        SetChangeSort={SetChangeSort}
      />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EnchanceData;
