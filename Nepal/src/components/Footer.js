import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer">
            <div classname="container">
                <div classname="row">
                {/*Column1 */}
                <div classname="col">
                    <h4> United Nepali</h4>
                    <ul classname="list-unstyled">
                    <li>647-845-4548</li>
                    <li>Mississauga, Ontario</li>
                    <li>4581 Deerfoot road</li>
                    </ul>
                        
                </div>
                {/* Column2 */}
                <div className="col">
                    <h4>Things</h4>
                    <ul classname="list-unstyled">
                        <li>647-845-4548</li>
                        <li>Mississauga, Ontario</li>
                        <li>4581 Deerfoot road</li>
                    </ul>
                        
                </div>
                {/* Column3 */}
                <div className="col">
                    <h4>Another Column</h4>
                    <ul classname="list-unstyled">
                        <li>647-845-4548</li>
                        <li>Yalls</li>
                        <li>4581 asdad</li>
                    </ul>    
                </div>
                <hr />
                <div classname="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear} NEPAL CODES | ALl right Reserved | Terms of Service| Privacy
                    </p>
                </div>
                </div>
            </div>  
        </div>
    )
}

export default Footer