import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQuery";
import useDocumentTitle from "../hooks/useDocumentTitle";
function HomePage() {
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");
  useDocumentTitle("Underreacted | Home")
  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
