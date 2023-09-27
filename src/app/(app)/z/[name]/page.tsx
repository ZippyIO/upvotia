import PostFeed from '~/components/post/PostFeed';
import { db } from '~/lib/db';

async function getZone(name: string) {
  return await db.zone.findUniqueOrThrow({
    where: {
      name: name,
    },
  });
}

const ZonePage = async ({ params }: { params: { name: string } }) => {
  const zone = await getZone(params.name);

  return (
    <main>
      <h2>{zone.name}</h2>
      <PostFeed />
    </main>
  );
};

export default ZonePage;
