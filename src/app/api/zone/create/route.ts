import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { getServerSession } from '~/lib/auth';
import { db } from '~/lib/db';
import { ZoneValidator } from '~/lib/validators/ZoneValidator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const session = await getServerSession();
    if (!session) throw new Error('Unauthorized');

    const { name, description } = ZoneValidator.parse(body);

    const zone = await db.zone.create({
      data: {
        name: name,
        description: description,
        creatorId: session.user.id,
      },
    });

    return NextResponse.json(zone.id);
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response('Could not create zone, please try again later', { status: 500 });
  }
}
