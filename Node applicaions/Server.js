const express = require("express");
const Server = express();

const PORT = process.env.PORT || 4000;

// Define endpoint to fetch posts
Server.get("/posts", async (req, res) => {
  try {
    const responce = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=30"
    );
    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// Define endpoint to fetch post by id as query parameter
Server.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    const data = await responce.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching post by id:", error);
    res.status(500).json({ error: "Error fetching post by id" });
  }
});

Server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

