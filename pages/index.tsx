
import React, { useEffect } from 'react';
import '../styles/style.css';
import '../data';
import '../functions';

const Home = () => {
  const clearDataAndReload = () => {
    localStorage.clear();
    location.reload();
  };

  return (
  <div>
    <title>
      iPG
    </title>

  <div className="footer">
	Built by
	<a href="https://jamescun.com/">James Cunningham</a> and
	<a href="https://entrevate.com/">Colin Hayhurst</a> for
	<a href="https://goscale.com/">GoScale</a>&#39;s YC S12 Interview
	<br/>
	AI-enabled version by Steven Wang, Jonas Rothmann Hjalager, and Edward Loh
	<br/>
	<a onClick={clearDataAndReload} className="clear">Clear data</a>
    </div>

  </div>
  )
}

export default Home;
