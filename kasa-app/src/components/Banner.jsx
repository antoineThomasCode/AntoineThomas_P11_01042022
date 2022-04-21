import bannerImgUrl from '../assets/images/landscape.jpg'
import bannerImgAbout from '../assets/images/landscape-about.jpg'


function Banner() {
    const page = new URL(document.location)
    return (
        <div className='hero-banner'>
            {page.pathname === '/about' && <img src={bannerImgAbout} alt='paysage de montagne' />}
            {page.pathname === '/' && <img src={bannerImgUrl} alt='paysage bord de mere et falaises' />}
            {page.pathname === '/' && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    )
}
export default Banner