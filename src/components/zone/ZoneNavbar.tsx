import { Title } from '@mantine/core';

import Link from 'next/link';

type Props = {
  name: string;
};

const ZoneNavbar = ({ name }: Props) => {
  return (
    <div className="flex justify-center bg-[var(--mantine-color-dark-8)] py-2">
      <Link href={`/z/${name}`}>
        <Title tt="capitalize">{name}</Title>
      </Link>
    </div>
  );
};

export default ZoneNavbar;
