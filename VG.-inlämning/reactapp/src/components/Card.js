import React from 'react'

const Card = () => {
    return (
        <div className="card shadow " style= {{maxWidth: 440 + 'px'}}>
        <div className="row g-0">
          <div className="col-md-2">
            <img src="https://images.pexels.com/photos/3490393/pexels-photo-3490393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid rounded-start image-size" alt="..."/>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{item.firstName} {item.lastName}</h5>
              <p className="card-text">{item.email}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}
