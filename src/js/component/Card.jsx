import React from "react";

const Card = () => {

    return (
        <div class="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/200" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title - Yojan</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor excepturi nam officiis distinctio, sapiente impedit itaque qui fuga repellat sint dignissimos nesciunt, ipsam provident alias incidunt! Deleniti, expedita earum?</p>
            <a href="#" class="btn btn-primary ">Find Out More!</a>
        </div>
        </div>
    )
};

export default Card;