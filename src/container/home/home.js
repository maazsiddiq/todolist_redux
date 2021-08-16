import React from 'react';
import InputForm from '../../component/home_component/input-form';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
const Home = (props) => {
    return(
        <div>
            <InputForm clicked={props.Added} label="submit"/> 
            <Button onClick={props.Delete_Result(1)} variant="contained" color="secondary">
             delete
            </Button>
        </div>
    )
}

//state sy data nikal te hain...
const mapStatetoProps = state => {
    return{
        //  dlt: state.anyName
    };
}
//state main data lakhte  hain....
const mapDispatchtoProps = dispatch => {
    return {
       Added: (abc) => dispatch({type: "Added", payload: abc }), 
       Delete_Result: (id)=> dispatch({type: "Delete_Result", payload: id})
    };
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Home);