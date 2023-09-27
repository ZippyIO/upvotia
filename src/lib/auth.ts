import { PrismaAdapter } from '@auth/prisma-adapter';

import { type NextAuthOptions } from 'next-auth';
import { type Adapter } from 'next-auth/adapters';
import DiscordProvider from 'next-auth/providers/discord';

import { db } from '~/lib/db';

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ token, session }) {
      if (token?.sub) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
};
