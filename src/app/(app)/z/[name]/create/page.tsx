import NewPostForm from '~/components/post/NewPostForm';
import { db } from '~/lib/db';

async function getZone(name: string) {
  return await db.zone.findUniqueOrThrow({
    where: {
      name: name,
    },
    select: {
      id: true,
      name: true,
    },
  });
}

const CreateZonePostPage = async ({ params }: { params: { name: string } }) => {
  const zone = await getZone(params.name);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>CreateZonePostPage</h2>
      <p>{params.name}</p>
      <NewPostForm zone={zone} />
    </main>
  );
};

export default CreateZonePostPage;
