import bannerImgUrl from '../assets/images/landscape.jpg'
import bannerImgAbout from '../assets/images/landscape-about.jpg'


function Banner() {
    const page = new URL(document.location)
    return (
        <div className='hero-banner'>
            {page.pathname === '/About' && <img src={bannerImgAbout} alt='image de bannière' className="logo" />}
            {page.pathname === '/' && <img src={bannerImgUrl} alt='image de bannière' className="logo" />}
            {page.pathname === '/' && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    )
}
export default Banner