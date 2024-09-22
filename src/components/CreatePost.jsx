import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: parseInt(likesElement.current.value) || 0,
      dislikes: parseInt(dislikesElement.current.value) || 0,
    };
    const tags = tagsElement.current.value.split(" ");

    // Reset form fields
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: { likes: reactions.likes, dislikes: reactions.dislikes },
        userId: userId,
        tags: tags,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your userId here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id?"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Number of Likes
        </label>
        <input
          type="number"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="Enter number of likes"
          defaultValue="0"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Number of Dislikes
        </label>
        <input
          type="number"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="Enter number of dislikes"
          defaultValue="0"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your tags separated by spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
