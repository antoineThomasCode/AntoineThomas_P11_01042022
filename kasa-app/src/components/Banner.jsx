import bannerImgUrl from '../assets/images/landscape.jpg'


function Banner() {
    return (
        <div className='hero-banner'>
            <img src={bannerImgUrl} alt='image de bannière' className="logo" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}
export default Banner