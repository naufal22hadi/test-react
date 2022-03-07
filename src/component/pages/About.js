import React, {Component} from "react";
import Header from "../common/Header";
import image from "../assets/bg2.jpg";

//re-useable components
import Timeline from "../common/Timeline";
import Team from "../common/Team";

class About extends Component{
    render(){
        return(
            <div>
                <Header
                title="About Us"
                subtitle="It's Really Great Story"
                showButton={false}
                image={image}
                />
                <Timeline/>
                <Team/>
            </div>           
        )
    }
}

export default About;