import { Text, Title } from '@mantine/core';

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
    <main className="flex flex-col items-center">
      <Title order={2}>{zonePost.title}</Title>
      <div className="max-w-prose">
        <Text>{zonePost.content}</Text>
      </div>
    </main>
  );
};

export default ZonePostPage;
