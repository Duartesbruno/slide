import SlideNav from './slide.js'

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
// slide.addControl();  //padrao dots
slide.addControl('.custom-controls'); //customizado