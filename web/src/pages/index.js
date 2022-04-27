import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import TopCategories from '../components/homepage/TopCategories';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Iv Quest blog provides the latest and reliable educative information about various subject, such as: 'How to make money online, Google career job opportunites, Handshake, Relationship and love advice, walmart, target,  long distant relationships, ups etc'"
    />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);
export default IndexPage;
