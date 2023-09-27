import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL || '',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default withAuth(
  function middleware(req) {
    const { nextUrl, nextauth } = req;
    const { pathname } = nextUrl;
    const { token } = nextauth;

    if (token && pathname === '/auth/signin') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next({ headers: corsHeaders });
  },
  {
    callbacks: {
      authorized: ({ token, req }) =>
        !!token ||
        req.nextUrl.pathname.startsWith('/api') ||
        req.nextUrl.pathname.startsWith('/auth/signin'),
    },
  },
);

export const config = {
  matcher: ['/((?!api/uploadthing|assets|_next/static|_next/image).*)'],
};
