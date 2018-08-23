import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class MenuBar extends Component{

    render(){
        return(
            <div style={{textAlign:'center',backgroundColor:'yellow'}}>
                <ul>
                    <Link to="/Home">Home</Link>
                    <Link to="/Customer">Customer</Link>
                    <Link to="/EventHandler">EventHandler</Link>
                    <Link to="/Product">Products</Link>
                </ul>
            </div>
        )
    }
}

export default MenuBar;