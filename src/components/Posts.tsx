import { useState, useEffect, useContext } from "react";
import Post from "./Post";
import Loading from "./UI/Loading";
import ErrorMessage from "./ErrorMessage";
import { get } from "../util/http";
import { API_URL } from "../api/url";
import { Box } from "@mui/material";
import { usePostIds } from "../post-context";

export type BlogPostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const Posts = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState<BlogPostType[]>();
  const [error, setError] = useState<string>();

  const { idsDeleted } = usePostIds();

  const handleGetPosts = async () => {
    setIsFetching(true);
    try {
      const data = await get<BlogPostType[]>(`${API_URL}posts`);

      setPosts(data.filter((post) => !idsDeleted.includes(post.id)));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setIsFetching(false);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  if (error) {
    return <ErrorMessage text={error} />;
  }

  return (
    <Box>
      {isFetching ? (
        <Loading />
      ) : (
        posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </Box>
  );
};

export default Posts;
