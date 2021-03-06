import React from 'react';


class CarPostForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { nextAction: false };
    this.openPhotoDrop = this.props.openPhotoDrop.bind(this);
  }

  formClasses(){
    if (this.props.carDrop){
      return 'car-form';
    }else {
      return 'car-form hidden-form';
    }
  }

  update(field) {
    return e => {
      this.props.updateState({ [field]: e.target.value });
    };
  }

 componentDidUpdate(){
   if(this.state.nextAction){
     this.setState({ nextAction: false }, () => {
       this.openPhotoDrop();
     });
   }
 }

  openNextDrop(e){
    e.preventDefault();
    this.setState({ nextAction: true }, () => {
      this.props.closeCarDrop();
    });
  }


  render(){
    return (
      <form ref={(ele) => this.form = ele } className={this.formClasses()} >
        <label className="listings-labels">What is the make of your car?
          <input type="text" className='listings-inputs'
            placeholder="Make"
            value={this.props.make} onChange={this.update('make')} />
        </label>
        <label className="listings-labels">What is the model of your car?
          <input type="text" className='listings-inputs'
            placeholder="Model"
            value={this.props.model} onChange={this.update('model')} />
        </label>
        <label className="listings-labels">What is the trim of your car?<span className='optional-span'>optional</span>
          <input type="text" className='listings-inputs'
            placeholder="Trim"
            value={this.props.trim} onChange={this.update('trim')} />
        </label>
        <label className='listings-labels'>What is the year of your car?
          <input className='listings-numbers' type='number' step='1'
            value={this.props.year}
            onChange={this.update('year')} />
        </label>
        <label className='listings-labels'>What is your car's average mpg?
          <input className='listings-numbers' type='number' step='1'
            value={this.props.mpg}
            onChange={this.update('mpg')} />
        </label>
        <label className='listings-labels'>How many seats does your car have?
          <input className='listings-numbers' type='number' step='1'
            value={this.props.numOfSeats}
            onChange={this.update('numOfSeats')} />
        </label>
        <label className='listings-labels'>How many doors does your car have?
          <input className='listings-numbers' type='number' step='1'
            value={this.props.numOfDoors}
            onChange={this.update('numOfDoors')} />
        </label>
        <label className='transmission-label'>Transmission</label>
        <div className='transmission-input'>
          <input className='listing-radios1' type="radio" name='transmission' value='manual' onChange={this.update('transmission')}  checked/>Manual
          <input className='listing-radios2' type="radio" name='transmission' value='automatic' onChange={this.update('transmission')}  />Automatic
        </div>
        <label className='gas-label'>Gas</label>
        <div className='gas-input'>
            <input className='listing-radios1' type="radio" name='gas' value='regular' onChange={this.update('gas')}  checked/>Regular
            <input className='listing-radios2' type="radio" name='gas' value='premium' onChange={this.update('gas')}  />Premium
        </div>
        <label className='listings-labels'>Desc
          <textarea className='listings-textarea' value={this.props.description}
            onChange={this.update('description')}
            placeholder='A brief description of your vechicle' ></textarea>
        </label>
        <button onClick={this.openNextDrop.bind(this)} className="next-form">Next</button>
      </form>
    )
  }
}

export default CarPostForm;