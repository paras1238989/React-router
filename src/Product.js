import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class Product extends Component{
    constructor(){
        super();
        this.state={
            productDetails:1
        }
    }
    products=[
        {pid:101,pname:'mobile',price:12000},
        {pid:102,pname:'Laptop',price:25000},
        {pid:103,pname:'Fridge',price:9000}
    ]
    productDisplay = (pid)=>{
        this.setState(
            {productDetails:pid}
        )
    }
    
    pids=this.products.map(
        (product,id)=><button onClick={this.productDisplay(product.pid)}>{product.pid}</button>
    )
    
    render(){
        return(
            <div style={{display:'table'}}>
                <div style={{display:'table-cell'}}>
                    <ul>
                        {this.pids}
                    </ul>
                </div>
                <div id="productInfo" style={{display:'table-cell'}}>{console.log(this.state.productDetails)}</div>
            </div>
        )
    }
}

export default Product;