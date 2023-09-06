
import React, { useEffect } from 'react';
import '../styles/style.css';
import '../data';
import '../functions';

const Home = () => {
  const clearDataAndReload = () => {
    localStorage.clear();
    location.reload();
  };

  const timer_restart = () => {
    timer_restart()
  }

  const end_question = () => {
    clearInterval(timerId); 
    on_question_end();
  }

  const next_q = () => {

  }


  return (
  <div>
    <title>
      iPG
    </title>

  <div className="controls">
	<h1>Key/Button Controls</h1>

	<div onClick={timer_restart} class="key key-space">space</div>
	<div className="act">to restart timer</div>

	<div onClick={end_question} class="key key-return">m</div>
	<div className="act">end question</div>

	<div onClick={next_q} class="key key-return">return</div>
	<div className="act">to next question</div>
</div>

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
