import aluminium from '../images/aluminium.png';
import bimetal from '../images/bimetal.png';
import casing from '../images/casing.png';
import convectorsFloor from '../images/convectors-floor.png';
import convectorsIn from '../images/convectors-in.png';
import convectorsWall from '../images/convectors-wall.png';
import emblem from '../images/emblem.png';
import main from '../images/main.png';
import news from '../images/news.png';
import percent from '../images/percent.png';
import steelTube from '../images/steel-tube.png';
import steel from '../images/steel.png';

const init = () => {
    const emblemImage = document.querySelector('.emblem');
    emblemImage.src = emblem;
  const mainPic = document.querySelector('.main');
  mainPic.src = main;
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

};

export default init;
