import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { getServerSession } from '~/lib/auth';
import { db } from '~/lib/db';
import { PostValidator } from '~/lib/validators/PostValidator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const session = await getServerSession();
    if (!session) throw new Error('Unauthorized');

    const { title, content, zoneId } = PostValidator.parse(body);

    const post = await db.post
      .create({
        data: {
          title: title,
          content: content,
          authorId: session.user.id,
          zoneId: zoneId,
        },
        select: {
          id: true,
          zone: {
            select: {
              name: true,
            },
          },
        },
      })
      .then((res) => ({ postId: res.id, zoneName: res.zone.name }));

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response('Could not create post, please try again later', { status: 500 });
  }
}
