import React from "react";

function Card({cardData, subscribePlan}){ //Destructuring data
    return(

        <>
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{cardData.type}</h5>
            <h6 className="card-price text-center">{cardData.currency}{cardData.amount}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
                {
                    cardData.subscription.map((elem, index)=>( 
                    <li key={index} className={elem.isEnabled ? "" :"text-muted"}><span className="fa-li"><i className={`fas ${elem.isEnabled? "fa-check":"fa-times"}`}></i></span>{elem.name}</li>
                    ))
                }
            </ul>
            <div className="d-grid">
              <button href="#" className="btn btn-primary text-uppercase" onClick={()=>subscribePlan()}>Button</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Card;