import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 flex justify-between px-2 py-4 test"></nav>
      {children}
    </>
  );
};

export default Layout;
