import ZoneNavbar from '~/components/zone/ZoneNavbar';

const ZoneLayout = ({
  params,
  children,
}: {
  params: { name: string };
  children: React.ReactNode;
}) => {
  return (
    <div>
      <ZoneNavbar name={params.name} />
      {children}
    </div>
  );
};

export default ZoneLayout;
