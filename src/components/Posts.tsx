import { useState, useEffect } from "react";
import Post from "./Post";
import Loading from "./UI/Loading";
import ErrorMessage from "./ErrorMessage";
import { get } from "../util/http";
import { API_URL } from "../api/url";

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

  const handleGetPosts = async () => {
    setIsFetching(true);
    try {
      const data = await get<BlogPostType[]>(`${API_URL}posts`);

      setPosts(data);
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
    <div>
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
    </div>
  );
};

export default Posts;
