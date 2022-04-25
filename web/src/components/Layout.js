import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { SearchModalContextProvider } from '../context/searchModalContext';
import Footer from './Footer';
import Header from './Header';
import Search from './search/SearchModal';

function Layout({ children }) {
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
