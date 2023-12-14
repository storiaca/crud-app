import { createContext, useContext, useState, type ReactNode } from "react";

type PostIdsType = {
  idsDeleted: number[];
};

type PostsContextValue = PostIdsType & {
  addId: (id: number) => void;
};

type PostsContextProviderProps = {
  children: ReactNode;
};

export const PostsContext = createContext<PostsContextValue | null>(null);

export const usePostIds = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostIds must be used within a PostsProvider");
  }
  return context;
};

export default function PostsProvider({ children }: PostsContextProviderProps) {
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  const addId = (id: number) => {
    setDeletedIds([...deletedIds, id]);
  };

  const contextValue: PostsContextValue = {
    idsDeleted: deletedIds,
    addId,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
}
