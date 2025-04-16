import React, {
    Component 
} from "react"

export class Avenger extends Component{
    state = {
        arid:1,
        name : "Tony Stark",
            heroic_name: this.props.heroic_name
        }

    changeHero = () => {
        this.setState({name:"Steve Roger", heroic_name:"Captain America"})
    }

    show_arid = (arid) => {
        console.log(arid)
    }

    send_arid = () =>{
        this.show_arid(this.state.arid)
    }
    render() {
        return(
            <>
            <h1>Hello, {this.state.name} I am {this.state.heroic_name}</h1>
            <button onClick={this.changeHero}>changeHero</button>
            <button onClick={this.send_arid}>Arid</button>
            </>
        )
    }
}