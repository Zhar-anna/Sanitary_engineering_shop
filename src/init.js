import aluminium from '../images/aluminium.png';
import bimetal from '../images/bimetal.png';
import casing from '../images/casing.png';
import convectorsFloor from '../images/convectors-floor.png';
import convectorsIn from '../images/convectors-in.png';
import convectorsWall from '../images/convectors-wall.png';
import emblem from '../images/emblem.png';
import percent from '../images/percent.png';
import steelTube from '../images/steel-tube.png';
import steel from '../images/steel.png';
import search from '../images/search.png';
import basket from '../images/cart-shopping.png';
import heart from '../images/heart.png';
import line from '../images/Line 1.png';
import lines from '../images/align-left.png';
import burger from '../images/bars-sort.png';
import chevron from '../images/chevron-down.png';
import bars from '../images/bars.png';
import close from '../images/xmark.png';
import chevronRight from '../images/chevron-right.png';

const init = () => {
  const emblemImage = document.querySelector('.emblem');
  emblemImage.src = emblem;
  const percentImage = document.querySelector('.percent-image');
  percentImage.src = percent;
  const bimetrImage = document.querySelector('.bimetr-image');
  bimetrImage.src = bimetal;
  const aluminaImage = document.querySelector('.alumina-image');
  aluminaImage.src = aluminium;
  const steelImage = document.querySelector('.steel-image');
  steelImage.src = steel;
  const steelTubeImage = document.querySelector('.steel-tube-image');
  steelTubeImage.src = steelTube;
  const convectorsImage = document.querySelector('.convectors');
  convectorsImage.src = convectorsIn;
  const convectorsWallImage = document.querySelector('.convectors-wall');
  convectorsWallImage.src = convectorsWall;
  const convectorsFloorImage = document.querySelector('.convectors-floor');
  convectorsFloorImage.src = convectorsFloor;
  const casingImage = document.querySelector('.casing-image');
  casingImage.src = casing;
  const searchImage = document.querySelector('.search');
  searchImage.src = search;
  const basketImage = document.querySelector('.basket-image');
  basketImage.src = basket;
  const lineImage = document.querySelector('.line');
  lineImage.src = line;
  const heartImage = document.querySelector('.heart');
  heartImage.src = heart;
  const linesImage = document.querySelector('.lines');
  linesImage.src = lines;
  const burgerImage = document.querySelector('.burger');
  burgerImage.src = burger;
  const chevronImage = document.querySelector('.chevron');
  chevronImage.src = chevron;
  const barsImage = document.querySelector('.bars');
  barsImage.src = bars;
  const closeImage = document.querySelector('.close-image');
  closeImage.src = close;
  const searcModalImage = document.querySelector('.search-modal');
  searcModalImage.src = search;
  const chvronRImage = document.querySelectorAll('.chevron-right');
  chvronRImage.forEach((ch) => {
    ch.src = chevronRight;
  });

  const modalSearch = document.querySelector('.modal-1');
   modalSearch.style.display = 'none';
  const searchEvent = document.querySelector('.forma');
  searchEvent.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth > 1024) {
      modalSearch.style.display = 'none';
    } else {
      modalSearch.style.display = 'flex';
    }
  });
  const closeEvent = document.querySelector('.close');
  closeEvent.addEventListener('click', (e) => {
    e.preventDefault();
    modalSearch.style.display = 'none';
  });

  const modalCatalog = document.querySelector('.modal-2');
  modalCatalog.style.display = 'none';
  const catalogButton = document.querySelector('.catalog');
  catalogButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth > 1024) {
      modalCatalog.style.display = 'none';
    }
    else {
      modalCatalog.style.display = 'flex';
    }
  });
  modalCatalog.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    modalCatalog.style.display = 'none';
  });
};

export default init;
