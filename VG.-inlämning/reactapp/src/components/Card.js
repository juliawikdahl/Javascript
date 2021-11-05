import React from 'react'

const Card = ({item}) => {
    return (
        <div className="card shadow" style=  {{width: 500 + 'px', height: 200 + 'px', m: 5 + 'px'}}>
        <div className="row g-0">
          <div className="col-md-3">
            <img src="https://images.pexels.com/photos/10013067/pexels-photo-10013067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid rounded-start image-size" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body mt-3">
              <h5 className="card-title">{item.firstName} {item.lastName}</h5>
              <p className="card-text">{item.email}</p>
              <p className="card-text mt-5 "><small>Updates Frequently</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card