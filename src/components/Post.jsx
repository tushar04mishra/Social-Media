// import { useContext } from "react";
// import { MdDelete } from "react-icons/md";
// import { PostList } from "../store/post-list-store";
// import { FcLike } from "react-icons/fc";
// import { FaRegComment } from "react-icons/fa";
// import { TbHeartShare } from "react-icons/tb";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);

//   // Provide default values if tags or reactions are undefined
//   const tags = post.tags || [];
//   const reactions = post.reactions || { likes: 0, dislikes: 0 };

//   return (
//     <div className="card post-card" style={{ width: "30rem" }}>
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             onClick={() => deletePost(post.id)}
//           >
//             <MdDelete />
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>

//         {/* Safely map over tags */}
//         {tags.length > 0 ? (
//           tags.map((tag) => (
//             <span key={tag} className="badge text-bg-primary hashtag">
//               {tag}
//             </span>
//           ))
//         ) : (
//           <p>No tags available</p>
//         )}

//         <div className="alert alert-success reactions" role="alert">
//           This post has received {reactions.likes} likes and{" "}
//           {reactions.dislikes} dislikes.
//         </div>
//         <div className="like-share-comment">
//           <FcLike style={{ marginRight: "10px" }} />
//           <FaRegComment style={{ marginRight: "10px" }} />
//           <TbHeartShare />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { TbHeartShare } from "react-icons/tb";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const tags = post.tags;
  const reactions = post.reactions;

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This post has received {post.reactions.likes} likes and{" "}
          {post.reactions.dislikes} dislikes.
        </div>
        <div className="like-share-comment">
          <FcLike style={{ marginRight: "10px" }} />
          <FaRegComment style={{ marginRight: "10px" }} />
          <TbHeartShare />
        </div>
      </div>
    </div>
  );
};
export default Post;

// import { useContext } from "react";
// import { MdDelete } from "react-icons/md";
// import { PostList } from "../store/post-list-store";
// import { FcLike } from "react-icons/fc";
// import { FaRegComment } from "react-icons/fa";
// import { TbHeartShare } from "react-icons/tb";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostList);

//   // Provide a default value for tags and reactions if they are undefined
//   const tags = post.tags || [];
//   const reactions = post.reactions || { likes: 0, dislikes: 0 };

//   return (
//     <div className="card post-card" style={{ width: "30rem" }}>
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             onClick={() => deletePost(post.id)}
//           >
//             <MdDelete />
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>

//         {/* Safely map over tags */}
//         {tags.length > 0 ? (
//           tags.map((tag) => (
//             <span key={tag} className="badge text-bg-primary hashtag">
//               {tag}
//             </span>
//           ))
//         ) : (
//           <p>No tags available</p>
//         )}

//         <div className="alert alert-success reactions" role="alert">
//           This post has received {reactions.likes} likes and{" "}
//           {reactions.dislikes} dislikes.
//         </div>
//         <div className="like-share-comment">
//           <FcLike style={{ marginRight: "10px" }} />
//           <FaRegComment style={{ marginRight: "10px" }} />
//           <TbHeartShare />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;
