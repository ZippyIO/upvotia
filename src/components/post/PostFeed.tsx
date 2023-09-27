import PostCard from '~/components/post/PostCard';

const PostFeed = () => {
  const posts = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <PostCard key={post} />
      ))}
    </div>
  );
};

export default PostFeed;
