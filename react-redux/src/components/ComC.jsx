import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getUsers } from './../store/actions/uerActions';



const ComC = ({ usersUi, FetchGetUser }) => {
    useEffect(() => {
        FetchGetUser();
    },[])

    return (
        <div>
           <h1>Winner</h1>  <br />
            {
                usersUi && usersUi.map((e,index) => (
                    <div key={index}>
            <span>Name :{ e.username}</span>; <br />
            <span>Phone No. :{e.phone}</span> <br />
            <span>Email :{e.Gmail}</span> <br />
            <span>Address :{e.address}</span> <br />
            <span>Gender :{e.gender}</span> <br /><br />
                    </div>
                ))
            }
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    usersUi:state?.usersRoot?.users
})

const mapDispatchToProps = {
    FetchGetUser: getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(ComC)