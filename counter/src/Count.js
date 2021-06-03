import React from 'react';
import "./Count.css";
export class Count extends React.Component {
    constructor() {
        super();
        this.counter = 0;
        this.state = { countValue: this.counter };
         this.fn = this.increment.bind(this);
        this.fn1 = this.decrement.bind(this);
        // this.fn = this.result.bind(this);
        // this.fn1 = this.decrement.bind(this);
    }
    
     increment() {
         this.counter++;
         this.setState({ countValue: this.counter });
     }
     decrement() {
         this.counter--;
       this.setState({ countValue: this.counter });
     }
    render() {
        return (
            <div>
                <h1>Count is {this.state.countValue}</h1>
                {/* <p>Counter is {this.counter}</p>  */}
                <div className="counter">
                    <div>
                        <button onClick={this.fn}>Plus</button>
                    </div>
                    <div>
                        <button onClick={this.fn1}>Minus</button>
                    </div>
                </div>
            </div>
        )
    }
}