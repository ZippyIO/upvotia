'use client';

import { Button } from '@mantine/core';
import { signIn } from 'next-auth/react';

import { cn } from '~/lib/utils';

type Props = React.HTMLAttributes<HTMLDivElement>;

const SignInForm = ({ className, ...props }: Props) => {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <div className="relative">
        <div className="relative flex justify-center text-xs uppercase">providers</div>
        <div className="flex items-center">
          <div className="mt-1 w-full border-t-2 border-[var(--mantine-color-dark-6)]" />
        </div>
      </div>
      <Button color="indigo" onClick={() => signIn('discord')}>
        Discord
      </Button>
    </div>
  );
};

export default SignInForm;
