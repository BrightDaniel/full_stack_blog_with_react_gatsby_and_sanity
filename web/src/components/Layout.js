import React from 'react';
import Helmet from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import { SearchModalContextProvider } from '../context/searchModalContext';
import Footer from './Footer';
import Header from './Header';
import Search from './search/SearchModal';
import favicon from './favicon.ico';

function Layout({ children }) {
  <Helmet>
    <link rel="icon" href={favicon} />
  </Helmet>;
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
