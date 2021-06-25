import React from 'react'
import PropTypes from 'prop-types';


const profileComponent = (props) => {
    return (
        <div>
            {props.myName(props.fullName)}
            <h1 style={{fontSize: '40px', fontWeight: '700', fontFamily: 'cursive', color: 'dodgerblue'}}>My Name is: {props.fullName} </h1>
            <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}> {props.bio} </p>
            <p style={{fontSize: '22px', fontWeight: 'bold', fontFamily: 'cursive', color: 'cyan'}}>My job is: {props.profession} </p>
            <p> {props.children} </p>
        </div>
    )
}

profileComponent.defaultProps = {
    fullName: "Safa",
    bio: "Born on 20 January, 1996 in Paris",
    profession: "Student"
}

profileComponent.propTypes = {
   fullName: PropTypes.string,
   bio: PropTypes.string,
   profession: PropTypes.string,
  myName: PropTypes.func
}



export default profileComponent
