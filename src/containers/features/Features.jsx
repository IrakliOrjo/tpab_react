import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Mortal Man',
    text: 'Inspired in part by a 2014 trip to South Africa, “Mortal Man” name-checks leaders from Nelson Mandela, to Martin Luther King Jr, Malcolm X and Moses.At the back-end of the song Kendrick interviews the last King of Hip-Hop, Tupac Shakur.',
  },
  {
    title: 'i',
    text: 'Considered sThe up-tempo track once again delves deep into Kendrick’s personal perspective on the world. While premiering the track on LA’s Power 106, Kendrick explained the song is about self expression, inspired by the lack of self love on the streets of Compton.',
  },
  {
    title: 'How Much a Dollar Cost',
    text: 'Up until this point in the album, Kendrick’s been plagued by Lucy & Uncle Sam. On his road to recovery, he runs into a homeless man at a gas station in South Africa.',
  }
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">It was originally called Tu Pimp a Catepillar, AKA Tu.P.a.C. But it means the T.P.A.B, it means by how a person from the hood grows to be a grown person, like a man, so it tries to escape the hood but can't, because it's stuck in them for good.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;