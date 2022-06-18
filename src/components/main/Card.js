import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" alt="card-img" src={props.img}/>
            <div className="info">
                <div className="info-country">
                    <span className="country-name">{props.country}</span>
                    <a href={`https://www.google.com/maps/place/${props.maps}`} className="country-maps">View on Google Maps</a>
                </div>
                <h1 className="info-name">{props.place}</h1>
                <span className="info-date">{props.date}</span>
                <p className="info-desc">{props.description}</p>
            </div>
        </div>
    )
}

/*
    Картинка
    Страна
    Ссылка на google Maps
    Место
    Дата
    Описание
*/