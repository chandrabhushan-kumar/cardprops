import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          molestie elit, non facilisis quam. Cras iaculis sem enim, sed feugiat
          sem gravida ut. Mauris quis scelerisque neque. Aenean non velit
          aliquet, fermentum dolor sit amet, faucibus tellus. In et tristique
          tortor, eu elementum orci. In imperdiet est mi, at malesuada ligula
          vehicula id. Nullam vitae gravida sapien. Proin eu luctus dui,
          molestie pharetra erat. Integer convallis tempus pellentesque. Duis
          quis lorem gravida, laoreet arcu sed, varius magna. Etiam vel neque
          tempus, finibus sem vel, malesuada tortor. In at iaculis turpis. Nunc
          hendrerit faucibus est, nec imperdiet nulla auctor et. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin sollicitudin interdum felis, nec varius mauris
          accumsan a.
        </p>
       
      </div>
    );
  }
}
export default Card;