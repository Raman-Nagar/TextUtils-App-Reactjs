import React from "react";

export class Check extends React.Component{
    constructor(props){
        super(props)

        this.state = {f1:"",f2:"",f3:"",fee:"",c1:"",c2:"",c3:"",cname:""}
        this.CheckC = this.CheckC.bind(this)
        this.CheckCPP = this.CheckCPP.bind(this)
        this.CheckJava = this.CheckJava.bind(this)
        this.Calc = this.Calc.bind(this)
    }
    CheckC(e){
        if((e.target).checked){
            this.setState({c1:e.target.name})
            this.setState({f1:e.target.value})
        }else{
            this.setState({c1:" "})
            this.setState({f1:" "})
        }
    }
    CheckCPP(e){
        if((e.target).checked){
            this.setState({c2:e.target.name})
            this.setState({f2:e.target.value})
        }else{
            this.setState({c2:" "})
            this.setState({f2:" "})
        }
    }
    CheckJava(e){
        if((e.target).checked){
            this.setState({c3:e.target.name})
            this.setState({f3:e.target.value})
        }else{
            this.setState({c3:" "})
            this.setState({f3:" "})
        }
    }
    Calc(event){
        this.setState({cname:this.state.c1+" "+this.state.c2+" "+this.state.c3})
        this.setState({fee:(+this.state.f1)+(+this.state.f2)+(+this.state.f3)})
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <input type="checkbox" value="1000" name="C" onChange={this.CheckC} />C<br />
                <input type="checkbox" value="2000" name="C++" onChange={this.CheckCPP} />C++<br />
                <input type="checkbox" value="3000" name="Java" onChange={this.CheckJava} />Java<br />
                <input type="button" value="Calcu." onClick={this.Calc} />
                <h2>{this.state.fee}</h2>
                <h2>{this.state.cname}</h2>
            </div>
        )
    }
}