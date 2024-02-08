import { Headercv } from '../Headercv';
import { Cardcv } from '../Cardcv';
import { Experiencecv } from '../Experiencecv';
import image from '../images/home.jpeg';
import { MyNavBar } from '../MyNavBar';
import {MyFooter} from '../Myfooter'



function Cv() {
  const pageStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', // Ensure the image covers the entire background
    minHeight: '100vh', // Ensure the page takes at least the full height of the viewport
    display: 'flex', // Use flex to stack child components
    flexDirection: 'column', // Stack child components vertically
  };

  return (
    <div style={pageStyle}>
      <MyNavBar />
      <Headercv />
      <Cardcv />
      <Experiencecv />
      <MyFooter />
    </div>
  );
}

export default Cv;


