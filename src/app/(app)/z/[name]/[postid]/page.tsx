import { db } from '~/lib/db';

async function getZonePost(id: string) {
  try {
    return await db.post.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error('Post not found');
  }
}

const ZonePostPage = async ({ params }: { params: { postid: string } }) => {
  const zonePost = await getZonePost(params.postid);

  return (
    <main>
      <h2>ZonePostPage</h2>
      <p>{params.postid}</p>
      <p>{zonePost.title}</p>
      <p>{zonePost.content}</p>
    </main>
  );
};

export default ZonePostPage;
