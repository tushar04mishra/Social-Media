// import { useContext, useEffect, useState } from "react";
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";
// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);

//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     setFetching(true);

//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       });
//     return () => {
//       console.log("cleaning up useeffect");
//       controller.abort();
//     };
//   }, []);

//   return (
//     <>
//       {fetching && <LoadingSpinner></LoadingSpinner>}
//       {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
//       {!fetching &&
//         postList.map((post) => <Post key={post.id} post={post}></Post>)}
//     </>
//   );
// };
// export default PostList;

import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
          // Fetch was aborted intentionally, no need to handle this error
        } else {
          console.error("Fetch error:", err);
          setFetching(false);
        }
      });

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, [addInitialPosts]);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
