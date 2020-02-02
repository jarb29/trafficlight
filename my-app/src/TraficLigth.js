import React from 'react';




export default class TrafficLigth extends React.Component{
  
        constructor(){
            super();
            this.state ={
                click:null
            };
        }
        render (){

            console.log(this.state)
            let redExtra = '';
            if(this.state.click==='red') redExtra ="selected";
            let yelloExtra = '';
            if(this.state.click==='yellow') yelloExtra ="selected";
            let greenExtra = '';
            if(this.state.click==='green') greenExtra ="selected";

            return(  
        <>
        <div id="trafficTop"></div>
        <div id="container">
              <div className={"red light " + redExtra} onClick={()=>this.setState({click:'red'})}></div>
              <div className= {"yellow light " + yelloExtra} onClick={()=>this.setState({click:'yellow'})}></div>
              <div className= {"green light" + greenExtra} onClick={()=>this.setState({click:'green'})}></div>
        </div>
        </>
            )
    }
    }

  
