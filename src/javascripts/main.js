import '../styles/components/main.scss';
import eatQuadrant from './components/eatQuadrant';
import playQuadrant from './components/playQuadrant';
import fightQuadrant from './components/fightQuadrant';
import sleepQuadrant from './components/sleepQuadrant';
import printTitleAndImageToDom from './components/printTitleAndImageToDom';

const init = () => {
  eatQuadrant.eatQuad();
  playQuadrant.playQuad();
  fightQuadrant.fightQuad();
  sleepQuadrant.sleepQuad();
  printTitleAndImageToDom.printImageAndTitle();
};

init();
