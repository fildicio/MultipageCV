import { MyBody } from "../MyBody";
import { MyNavBar } from "../MyNavBar";
import {MyFooter} from '../Myfooter'
import image from '../images/home.jpeg'



function Home() {
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
      <MyBody />
      <MyFooter />
    </div>
  );
}

export default Home;

