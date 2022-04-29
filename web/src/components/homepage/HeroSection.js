import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Welcome to Quest Blogs</h1>
            <ParagraphText className="hero__text">
              Creating valuable content for the benefit of all
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              View Blog Posts
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/iv-quest-blog.jpg"
              alt="Iv Quest Blog"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
export default HeroSection;
