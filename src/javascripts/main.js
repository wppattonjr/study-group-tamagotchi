import '../styles/components/globals/main.scss';
import eatQuadrant from './components/eatQuadrant';
import playQuadrant from './components/playQuadrant';
import fightQuadrant from './components/fightQuadrant';
import sleepQuadrant from './components/sleepQuadrant';

const init = () => {
  eatQuadrant.eatQuad();
  playQuadrant.playQuad();
  fightQuadrant.fightQuad();
  sleepQuadrant.sleepQuad();
};

init();
