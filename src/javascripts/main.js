import '../styles/components/globals/main.scss';
import petActionsData from '../data/petData';
import showTheQuadrants from './components/showTheQuandrants';

const init = () => {
  showTheQuadrants.showQuadrants(petActionsData.getPetActions());
};

init();
