import aluminium from '../images/aluminium.png';
import bimetal from '../images/bimetal.png';
import casing from '../images/casing.png';
import convectorsFloor from '../images/convectors-floor.png';
import convectorsIn from '../images/convectors-in.png';
import convectorsWall from '../images/convectors-wall.png';
import emblem from '../images/emblem.png';
import main from '../images/Frame.png';
import news from '../images/news.png';
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

const init = () => {
    const emblemImage = document.querySelector('.emblem');
    emblemImage.src = emblem;
  // const mainPic = document.querySelector('.main');
  // mainPic.src = main;
  // const mainP = document.querySelector('.main-image');
  // mainP.style.backgroundImage = main;
  const newsImage = document.querySelector('.news-image');
  newsImage.src = news;
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
};

export default init;
