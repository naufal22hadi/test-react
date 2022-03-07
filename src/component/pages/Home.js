import React, {Component} from "react";
import Header from "../common/Header";
import image from "../assets/header-bg.jpg";

//re-useable components
import Services from "../common/Services";
import Portfolio from "../common/Portofolio";
import Timeline from "../common/Timeline";
import Team from "../common/Team";

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                title="Welcome To Our Studio!"
                subtitle="It's Nice To Meet You"
                buttonText="Tell Me More"
                link="/services"
                showButton={true}
                image={image}
                />

                <Services/>
                <Portfolio/>
                <Timeline/>
                <Team/>
            </div>
        )
    }

}

export default Home