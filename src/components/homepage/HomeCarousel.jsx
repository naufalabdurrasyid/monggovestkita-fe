import React, { Component } from 'react';
// import axios from 'axios';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://res.cloudinary.com/dcnhkq6qt/image/upload/v1564494524/WfuxED_knx8av.png',
    altText: 'Slide 1',
    caption: 'Semua Orang Bisa Berternak',
    captionText: 'Kelola keuangan anda dengan instrumen investasi yang terjangkau dan rendah resiko'
  },
  {
    src: 'https://res.cloudinary.com/dcnhkq6qt/image/upload/v1564471178/nr3lrutdcstpzcepicdg.jpg',
    altText: 'Slide 2',
    caption: 'Beragam Komoditas Pilihan',
    captionText: 'Ada banyak pilihan komoditas ternak dari berbagai penjuru Indonesia'
  },
  {
    src: 'https://res.cloudinary.com/dcnhkq6qt/image/upload/v1564499198/photo6197070370389993825_pm14h4.jpg',
    altText: 'Slide 3',
    caption: 'Ayo Buat Akun',
    captionText: 'Anda dapat memilih untuk menjadi investor atau peternak'

  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

 

  render() {
   

    const { activeIndex } = this.state;
    //const {foto, asal, harga, altText} = this.state.items

    const slides = items.map((item) => {
      return ( 
        <CarouselItem
          className="custom-tag"
          tag="div"
          key = {item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img className="carousel-img" src={item.src} alt={item.altText}/>
          <CarouselCaption className="text-white" captionText={item.captionText} captionHeader={item.caption} />
        </CarouselItem>
        
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default HomeCarousel;