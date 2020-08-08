import React, { ReactNode } from 'react';

interface LayoutParam {
  children: ReactNode,
  pageTitle: string
}

const Layout = ({children, pageTitle}: LayoutParam) => (
  <>
    <header>{pageTitle}</header>
    <main>
      {children}
    </main>
    <footer></footer>
  </>
)

export default Layout;