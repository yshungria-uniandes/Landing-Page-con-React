import React from "react";

const Card = () => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card">
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title - Yojan</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor excepturi nam officiis distinctio, sapiente impedit itaque qui fuga repellat sint dignissimos nesciunt, ipsam provident alias incidunt! Deleniti, expedita earum?
                    </p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
    
};

export default Card;