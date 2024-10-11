import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Footer() {
return (
    <div className="row p-4 footer">
        <p className="col-md-12 text-center">
            Made with <span className="heart">&#10084; </span>by Kristijan
        </p>
    </div>
)
};

export default Footer;