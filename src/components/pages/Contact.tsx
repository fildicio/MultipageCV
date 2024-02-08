import { MyNavBar } from '../MyNavBar'
import image from '../images/home.jpeg'
import MyFooter from '../Myfooter'
import { ContactDetails } from '../ContactDetails'



export const Contact = () =>
    {
        const pageStyle: React.CSSProperties = {
            backgroundImage: `url(${image})`, // Set the image as background
            backgroundSize: 'cover', // Ensure the image covers the entire background
            minHeight: '100vh', // Ensure the page takes at least the full height of the viewport
            display: 'flex', // Use flex to stack child components
            flexDirection: 'column', // Stack child components vertically
    }
  return (
    <div style={pageStyle}>
    <MyNavBar />
    <ContactDetails />
    <MyFooter />
    </div>
  )
}
