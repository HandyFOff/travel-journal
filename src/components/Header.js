import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={require('../assets/img/logo.png')} alt="logo" className="logo-img"/>
                <span className="logo-name">my travel journal.</span>
            </div>
        </header>
    )
}