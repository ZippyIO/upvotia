import { type Metadata } from 'next';
import Link from 'next/link';

import SignInForm from '~/components/auth/SignInForm';

export const metadata: Metadata = {
  title: 'Upvotia - Sign in',
};

const AuthSignIn = () => {
  return (
    <div className="container relative h-full flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 md:px-0">
      <div className="bg-topography relative hidden h-full flex-col items-center justify-center border-r-4 border-[var(--mantine-color-dark-8)] p-10 text-white md:flex" />
      <div className="py-8 md:p-8">
        <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="flex items-center justify-center text-5xl font-semibold text-red-500">
              Upvotia
            </h1>
            <p className="text-2xl font-semibold tracking-tight">Sign in</p>
            <p className="text-muted-foreground text-sm">Log in using one of the providers below</p>
          </div>
          <SignInForm />
          <p className="text-muted-foreground px-8 text-center text-sm">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="hover:text-primary underline underline-offset-4">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSignIn;
