'use client';

import { Button, Title } from '@mantine/core';

import { useRouter } from 'next/navigation';

const ZonePostErrorPage = ({ error }: { error: Error }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center gap-2 pt-4">
      <Title>{error.message}</Title>
      <Button variant="light" color="red.8" size="lg" onClick={() => router.back()}>
        Go Back
      </Button>
    </main>
  );
};

export default ZonePostErrorPage;
