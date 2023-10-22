/**
 * responsive font-size
 *
 */
import Image from "next/image";

export default function Home() {
  return (
    <main className='main-content'>
      <div className='container'>
        <div className='flex-container'>
          <div className='content'>
            <h1 className='content-title'>
              10,000+ of our users love our products.
            </h1>
            <p className='content-description'>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div>
            <div className='rating-section raiting-section-one'>
              <div className='stars'>
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
              </div>
              <p className='rating-text'>Rated 5 Stars in Reviews</p>
            </div>
            <div className='rating-section raiting-section-two'>
              <div className='stars'>
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
              </div>
              <p className='rating-text'>Rated 5 Stars in Report Guru</p>
            </div>
            <div className='rating-section'>
              <div className='stars'>
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
                <img
                  className='star-icon'
                  src='/icon-star.svg'
                  alt='Star Icon'
                />
              </div>
              <p className='rating-text'>Rated 5 Stars in BestTech</p>
            </div>
          </div>
        </div>

        <div className='card-container'>
          <article className='card'>
            <div className='card-profile'>
              <div className='profile-image'>
                <img
                  className='profile-image'
                  src='/image-colton.jpg'
                  alt='Profile'
                />
              </div>
              <div className='profile-info'>
                <p className='profile-name'>Colton Smith</p>
                <p className='profile-username'>Verified Buyer</p>
              </div>
            </div>
            <div className='card-content'>
              <p className='content-text'>
                "We needed the same printed design as the one we had ordered a
                week prior. Not only did they find the original order, but we
                also received it in time. Excellent!"
              </p>
            </div>
          </article>
          <article className='card'>
            <div className='card-profile'>
              <div className='profile-image'>
                <img
                  className='profile-image'
                  src='/image-irene.jpg'
                  alt='Profile'
                />
              </div>
              <div className='profile-info'>
                <p className='profile-name'>Irene Roberts</p>
                <p className='profile-username'>Verified Buyer</p>
              </div>
            </div>
            <div className='card-content'>
              <p className='content-text'>
                "Customer service is always excellent and very quick turn
                around. Completely delighted with the simplicity of the purchase
                and the speed of delivery."
              </p>
            </div>
          </article>
          <article className='card'>
            <div className='card-profile'>
              <div className='profile-image'>
                <img
                  className='profile-image'
                  src='/image-anne.jpg'
                  alt='Profile'
                />
              </div>
              <div className='profile-info'>
                <p className='profile-name'> Anne Wallace </p>
                <p className='profile-username'>Verified Buyer</p>
              </div>
            </div>
            <div className='card-content'>
              <p className='content-text'>
                "Put an order with this company and can only praise them for the
                very high standard. Will definitely use them again and recommend
                them to everyone!"
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
