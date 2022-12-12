import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">TPAB Music Videos</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Apr2, 2015" text={`King Kunta`} info="Released: 2015
Album: To Pimp a Butterfly
Artist: Kendrick Lamar
Genre: Hip-Hop/Rap
Nominations: UK Festival Award for Anthem Of The Summer"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Nov 4, 2014" text="i" info="Released: 2015
Album: To Pimp a Butterfly
Genre: Hip-Hop/Rap
Awards: Grammy Award for Best Rap Performance
Nominations: Grammy Award for Best Rap Performance" />
        <Article imgUrl={blog03} date="Oct 18, 2015" text="These Walls ft. Bilal, Anna Wise, Thundercat" info="Artists: Anna Wise, Kendrick Lamar, Bilal, Thundercat
Genre: Hip-Hop/Rap
Awards: Grammy Award for Best Melodic Rap Performance
Nominations: G" />
        <Article imgUrl={blog04} date="Jan 13, 2016" text="God Is Gangsta" info="Album: To Pimp a Butterfly
Released: 2015
Genre: Hip-Hop/Rap" />
        <Article imgUrl={blog05} date="Aug 1, 2015" text="For Free?" info="Album: To Pimp a Butterfly Released: 2015 Genre: Hip-Hop/Rap" />
      </div>
    </div>
  </div>
);

export default Blog;