import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaning up useeffect");
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

// import { createContext, useReducer, useState, useEffect } from "react";

// // Create the context
// export const PostListContext = createContext({
//   postList: [],
//   fetching: false,
//   addPost: () => {},
//   deletePost: () => {},
// });

// // Reducer function to handle state updates
// const postListReducer = (currPostList, action) => {
//   switch (action.type) {
//     case "DELETE_POST":
//       return currPostList.filter((post) => post.id !== action.payload.postId);
//     case "ADD_INITIAL_POSTS":
//       return action.payload.posts;
//     case "ADD_POST":
//       return [action.payload, ...currPostList];
//     default:
//       return currPostList;
//   }
// };

// // Provider component
// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);
//   const [fetching, setFetching] = useState(false);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post,
//     });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       type: "ADD_INITIAL_POSTS",
//       payload: { posts },
//     });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({
//       type: "DELETE_POST",
//       payload: { postId },
//     });
//   };

//   useEffect(() => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//         setFetching(false);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <PostListContext.Provider
//       value={{ postList, fetching, addPost, deletePost }}
//     >
//       {children}
//     </PostListContext.Provider>
//   );
// };

// export default PostListProvider;
