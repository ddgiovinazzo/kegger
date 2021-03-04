import React from "react";
import { connect } from 'react-redux';


const BeerContentTop = ({ beer, currentUserId, avgRating, totalRatings  }) => {
    const uniques = {}
    let uniquesCount = 0
    beer.checkIns.forEach(checkIn => {
        if (!uniques[checkIn.user_id]) {
            uniques[checkIn.user_id] = 1;
            uniquesCount += 1
        }
    })

    const you = beer.checkIns.filter(checkIn => checkIn.user_id === currentUserId)

    const monthly = beer.checkIns.filter(checkIn => {
        const currentDate = new Date()
        const date = new Date(checkIn.created_at)
        return (
            date.getMonth() === currentDate.getMonth() &&
            date.getFullYear() === currentDate.getFullYear()
        )
    })

    const caps = ()=>{
        if(avgRating < 1) return window.zeroCaps
        else if(avgRating < 2) return window.oneCap
        else if(avgRating < 3) return window.twoCaps
        else if(avgRating < 4) return window.threeCaps
        else if(avgRating < 5) return window.fourCaps
        else return window.fiveCaps
    }

    return (
        <div className='bct-container'>
            <div className='bct-row'>
                <div className="beer-content-left-container">
                    <div className='bct-img'>
                        <img src={`${beer.imageUrl}`} alt="" />

                    </div>
                    <div className='bct-title'>
                        <h1>{beer.name}</h1>
                        <p>{beer.brewery.name}</p>
                        <p>{beer.servingStyle}</p>

                    </div>

                </div>
                <div className='beer-content-right-container'>
                    <div className='home-grid-container'>
                        <div className='home-grid-row'>
                            <div>
                                <p>Total</p>
                                <p>{beer.checkIns.length}</p>
                            </div>
                            <div>
                                <p>Unique</p>
                                <p>{uniquesCount}</p>
                            </div>
                        </div>
                        <div className='home-grid-row'>
                            <div>
                                <p>Monthly</p>
                                <p>{monthly.length}</p>
                            </div>
                            <div>
                                <p>You</p>
                                <p>{you.length}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='bct-row'>
                <div className='bct-mid-inner-div'>
                    <p>{beer.abv}% ABV</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{beer.ibu} IBU</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <img className="rating" src={caps()} alt="" />
                    <p>({avgRating})</p>
                </div>

                <div className='bct-mid-inner-div'>
                    <p>{totalRatings} Ratings</p>
                </div>

            </div>

        </div>

    )
}

const mSTP = ({ session }) => ({ currentUserId: session.id })

export default connect(mSTP, null)(BeerContentTop)