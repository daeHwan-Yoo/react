import { Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps={
        name:'default name'
    };
    static propTypes={
        name:PropTypes.string,
        favoriteNumber:PropTypes.number.isRequired
    };
    render(){
        const{name,favoriteNumber, children}=this.props;
        return(
            <div>My Name is {name} <br/>
            children is {children} <br/>
            I like the number {favoriteNumber}
            </div>
        );
    }
}

export default MyComponent;

