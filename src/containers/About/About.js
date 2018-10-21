import React from 'react';
import classes from './About.css';

const about = () => (
  <div className={classes.AboutContainer}>
    <p className={classes.Paragraph}>
    In the beginning, the farm was a hobby with the purpose to keep
    our three kids out of trouble and give them a job while attending school.
    </p>
    <p className={classes.Paragraph}>
    We started with an organic vegetable farm and sold our produce at the Shelton Farmers' Market.
    In 1984 we started selling our goods at the Olympia Farmers' Market, the 2nd largest farmers' market
     in Washington State, where we continue to sell our products today.
    </p>
  </div>
);

export default about;