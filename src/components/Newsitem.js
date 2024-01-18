import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title,url,imgurl,description,author,source,date}=this.props
    return (
      <div>
        <div className="container my-4" id="item">
          <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'92%',zIndex:'1'}}>{source}</span>
            <img src={imgurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">
                {description}..
              </p>
              <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toDateString()}</small></p>
              <a target="blank" href={url} className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
