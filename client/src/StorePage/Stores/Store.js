import React from 'react';
import './Store.css';

const Store =(props)=>{
    return(
        <div className="container">
        <div className="row">
            <h2 className="text-center">Is Apple store down?</h2><br/>
            {
                props.store.map((store)=>{
                    return <div className="col-xs-4 col-md-3 col-xs-offset-1 row well">
                    <div className="col-xs-11 col-md-10">{store.name}</div>
                    <div className="">{store.status}</div>
                    </div>
                })
            }
        </div>
        </div>
    )
}
export default Store;