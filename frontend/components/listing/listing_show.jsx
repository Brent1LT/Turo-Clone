import React from 'react';

class ListingShow extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }

  // setupCarousel(){
  //   this.setState({ photoCarousel: this.props.listing.photos });
  // }

  // componentDidUpdate(){
  //   if(this.props.listing !== undefined && !this.state.photoCarousel){
  //     this.setupCarousel();
  //   }
  // }
  carouselImage(){
    return (
      <img className='carousel-image' src={this.props.listing.photos[this.state.currentIndex].imageUrl} />
    )
  }

  componentDidUpdate(preProps){
    if (preProps.match.params.listingId !== this.props.match.params.listingId){
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }


  componentDidMount(){
    this.props.fetchListing(parseInt(this.props.match.params.listingId));
  }

  previousImage(){
    if(this.state.currentIndex === 0){
      return null;
    }else{
      this.setState({currentIndex: (this.state.currentIndex - 1)});
    }
  }

  nextImage(){
    if(this.state.currentIndex === (this.props.listing.photos.length -1)){
      this.setState({currentIndex: 0});
    }else {
      this.setState({currentIndex: (this.state.currentIndex + 1)});
    }
  }

  handleExtras(){
    if (this.props.listing.extras){
      return (
        <>
          <div className='heading-tags' >extras</div>
          <div className='show-text-boxes' >{this.props.listing.extras}</div>
        </>
      )
    }
  }

  render(){
    if(!this.props.listing || !this.props.car){
      return null;
    }
    let listing = this.props.listing;
    let car = this.props.car;
    return (
      <div className='listing-show-container'>
        <div className='carousel-container' >
          {this.carouselImage()}
          <button onClick={() => this.previousImage()} className='left-change' >left icon here</button>
          <button onClick={() => this.nextImage()} className='right-change' >right icon here</button>
          <div className='carousel-counter' >{`${this.state.currentIndex + 1} of ${this.props.listing.photos.length}`}</div>
        </div>
        <div className='listing-details'>
          <div className='car-show-details' >
            <div className='heading-tags'>THE CAR</div>
            <div className='ownername'>{`${listing.ownerName}'s`}
              <div className='car-make-model'>{`${car.make} ${car.model}`}
                <span className='car-year'>{car.year}</span>
              </div>
              <div>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <i className="fa fa-star review-stars"></i>
                <span > {` ${listing.tripCounter} trips`}</span>
              </div>
              <div className='parent-icons-div'>
                <div className='icons-grid'>
                  <div className='mpg-icon'>
                    <h5 className='icons-name'>{`${car.mpg} MPG`}</h5>
                  </div>
                  <div className='gas-icon'>
                    <span className='icons-name'>{`Gas(${car.gas})`}</span>
                  </div>
                  <div className='door-icon'>
                    <div className='icons-name'>{`${car.numOfDoors} Doors`}</div>
                  </div>
                  <div className='seat-icon'>
                    <div className='icons-name'>{`${car.numOfSeats} Seats`}</div>
                  </div>
                </div>
              </div>
            </div>
          <div className='heading-tags' >Description</div>
          <div className='show-text-boxes' >{car.description}</div>
          <div className='heading-tags'>Guidelines</div>
          <div className='show-text-boxes' >{listing.guidelines}</div>
          {this.handleExtras()}
          <div className='sidebar'>Side
            <div className='price-per-day'>{`${listing.price} per day`}</div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ListingShow;

{/* <div className='heading-tags'>THE CAR
            <span className='ownername'>Ownername
              <div className='show-car-name'>Make Model</div>
  </span>
</div> */}

{/* 
            <div className='car-details'>
              <span>Owner Name</span>
              <span>Car make model year</span>
              <div>star icons</div>
              <span>trips counter</span>
              <div className='mpg' >
                <span>mpg</span>
              </div>
              <div className='door'>
                <span>doors</span>
              </div>
              <div className='seat'>
                <span>seats</span>
              </div>
            </div>
          </div>
          <div>Description
            <div>car description</div>
          </div>
          <div>Guidelines
            <div>listing guidelines</div>
          </div> */}