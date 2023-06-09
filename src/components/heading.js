import React from "react";

export const Heading = ({ title, subtitle }) => {
    return (
        <section id="promo-banner">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Delicious Food" />
        </section>
    )
}