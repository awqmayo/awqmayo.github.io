import React, { Component } from 'react';
import './histSlider.css';

class Tradeoff extends Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
        this.slider2Ref = React.createRef();
        this.threeGraphRef = React.createRef();
        this.rectRef = React.createRef();
        this.svgRef = React.createRef();
        this.stroke1Ref = React.createRef();
        this.graphColRef=React.createRef();
        this.areaRef = React.createRef();
        this.onChange2 = this.onChange2.bind(this);
        this.rectReturn1 = this.rectReturn1.bind(this);
        this.rectReturn2 = this.rectReturn2.bind(this);
        this.rectReturn3 = this.rectReturn3.bind(this);
        this.rectReturn4 = this.rectReturn4.bind(this);
        this.rectReturn5 = this.rectReturn5.bind(this);
        this.rectReturn6 = this.rectReturn6.bind(this);
        this.textReturn1 = this.textReturn1.bind(this);
        this.changeGraphColNumber = this.changeGraphColNumber.bind(this);
        this.line1 = this.line1.bind(this);
        this.changeGraphNumber = this.changeGraphNumber.bind(this);
        this.changeStroke1=this.changeStroke1.bind(this);

        this.establishStateData = this.establishStateData.bind(this);
        this.state = this.establishStateData(this.props.data);
        this.onChange1 = this.onChange1.bind(this);
    }

    establishStateData(data){
        return{
            stroke1 : "#FF0000",
            stroke2 : "#0000FF",
            rect1Height : 100,
            rect2Height : 100,
            rect3Height : 100,
            rect4Height: 100,
            rect5Height:100,
            rect6Height:100,
            rect7Height:100,
            rect8Height:100,
            rectWidth : 40,
            sliderPos:1,
            sliderPos2:1,
            rect1Arr: [1,2,3,4,5],
            rect2Arr: [1,3,5,7,9],
            rect3Arr: [1,3,5,6,7],
            rect4Arr: [2,4,6,8,10],
            rect5Arr: [9,7,5,3,1],
            rect6Arr: [9,4,6,8,8],
            rect7Arr: [2,4,6,8,10],
            rect8Arr: [3,6,9,6,3],
            threeGraphs: true,
            threeGraphOne: true,
            fourGraphOne: true

        }
    }

    changeGraphColNumber(){
        const newColor = this.graphColRef.current.value;
        if (newColor === "1 and 1"){
            this.setState({fourGraphOne: true});
            this.setState({threeGraphOne: true});
        }
        if (newColor === "1 and 2"){
            this.setState({fourGraphOne: true});
            this.setState({threeGraphOne: false});
        }
        if (newColor === "2 and 1"){
            this.setState({fourGraphOne: false});
            this.setState({threeGraphOne: true});
        }
        if (newColor === "2 and 2"){
            this.setState({fourGraphOne: false});
            this.setState({threeGraphOne: false});
        }
    }
    onChange1(e){
        this.setState({ [e.target.name]: e.target.value })
        this.setState({rect1Height :20*this.state.rect1Arr[e.target.value]})
        this.setState({rect2Height :20*this.state.rect2Arr[e.target.value]})
        this.setState({rect3Height :20*this.state.rect3Arr[e.target.value]})
        this.setState({rect4Height :20*this.state.rect4Arr[e.target.value]})
        this.setState({rect5Height :20*this.state.rect5Arr[e.target.value]})
        this.setState({rect6Height :20*this.state.rect6Arr[e.target.value]})
        this.setState({rect7Height :20*this.state.rect7Arr[e.target.value]})
        this.setState({rect8Height :20*this.state.rect8Arr[e.target.value]})
    }

    changeStroke1() {
      const newColor = this.stroke1Ref.current.value;
      if (newColor === "#FF0000"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2:newColor});
      }
      if (newColor === "#0000FF"){      
        this.setState({stroke1: "#FF0000"});
        this.setState({stroke2:newColor});
      }
      if(newColor === "Orange and Blue"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#ffa500"});
      }
      if(newColor === "Blue and Orange"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#ffa500"});
      }
      if(newColor === "Blue and Yellow"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#FFD300"});
      }
      if(newColor === "Yellow and Blue"){
        this.setState({stroke1:"#0000FF"});
        this.setState({stroke2: "#FFD300"});
      }


    }
    changeGraphNumber(){
      const newGraph = this.threeGraphRef.current.value;
      if (newGraph === "True"){
        this.setState({threeGraphs: true});
      }
      else{
        this.setState({threeGraphs: false});
      }
  }

    onChange2(e){
        this.setState({[e.target.name]: e.target.value })

    }
    rectReturn1(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {this.state.rect1Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn2(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {this.state.rect2Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn3(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {this.state.rect3Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn4(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {this.state.rect4Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn5(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {this.state.rect5Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn6(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {this.state.rect6Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn7(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke1} height = {this.state.rect7Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn8(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {this.state.stroke2} height = {this.state.rect8Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn9(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {"#ffa500"} height = {this.state.rect5Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      rectReturn10(xPos, yPos){
        var hard = 
        <rect
        x = {xPos} y = {yPos} stroke = {"#000000"} fill = {"#ffa500"} height = {this.state.rect6Height} width = {this.state.rectWidth} fillOpacity = "0.7" strokeOpacity = "0.7"></rect>;
        return hard;
      }
      textReturn1(xPos, yPos, tedxt){
        var hard = <text x = {xPos} y = {yPos}>{tedxt}</text>;
        return hard;
      }
      line1(xPos1,xPos2,yPos1,yPos2){
        var hard = <line x1 = {xPos1} x2 = {xPos2} y1 = {yPos1} y2 = {yPos2} stroke = "#000000"></line>;
        return hard;
      }

    render(){
      const threeGraphs = this.state.threeGraphs;
        return (
            <div>
                <svg width = {1400} height = {1000} class = "b"> 
                    {this.rectReturn1(200,450)}
                    {this.rectReturn2(280,450)}
                    {this.rectReturn3(600,450)}
                    {this.rectReturn4(680,450)}
                    {
                      this.state.threeGraphs
                      ? this.rectReturn5(360,160)             
                      : [
                          (this.state.threeGraphOne
                          ? this.rectReturn9(235,160)
                          : this.rectReturn5(200,160)
                          )
                        ]
                    }
                    {
                      this.state.threeGraphs
                      ? this.rectReturn6(435,160)         
                      : [
                        (this.state.threeGraphOne
                        ? <text></text>
                        : this.rectReturn6(280,160)
                        )
                      ]     
                    }
                    {
                      this.state.threeGraphs
                      ? <text> </text>        
                      : [
                          (this.state.fourGraphOne
                          ? this.rectReturn10(640,160)  
                          : this.rectReturn7(600,160)   
                          )
                      ] 
                    }
                   {
                      this.state.threeGraphs
                      ? <text> </text>        
                      : [
                          (this.state.fourGraphOne
                          ? <text></text>
                          : this.rectReturn8(680,160)   
                          )
                      ] 
                    }
                    {this.line1(180,180,450,650)}
                    {this.line1(180,360,450,450)}
                    {this.line1(580,580,450,650)}
                    {this.line1(580,760,450,450)}
                    {
                    threeGraphs
                    ? this.line1(330,330,160,360)


                    : this.line1(180,180,160,360)

                  }
                  {
                    threeGraphs
                    ? this.line1(330,510,160,160)

                    : this.line1(180,360,160,160)
                  }
                  {
                    threeGraphs
                    ? this.line1(0,0,0,0)


                    : this.line1(580,580,160,360)

                  }
                  {
                    threeGraphs
                    ? this.line1(0,0,0,0)

                    : this.line1(580 ,780,160,160)
                  }
                    
                   
                </svg>
                <svg class = "c">
                  <text x = {200} y = {115}>Filler text for eventual question will go here</text>
                  <text x = {250} y = {265}> Key: Population 1</text>
                  <rect x = {375} y = {255} height = {10} width = {10} stroke = {this.state.stroke1} fill = {this.state.stroke1}></rect>
                  <text x = {400} y = {265}> Population 2</text>
                  <rect x = {500} y = {255} height = {10} width = {10} stroke = {this.state.stroke2} fill = {this.state.stroke2}></rect>

                  <text x = {150} y = {200}>Equal accuracy</text>
                  <text x = {450} y = {200}>Equal FPR</text>
                  <text x = {50} y = {510}>0</text>
                  <text x = {50} y = {470}>0.2</text>
                  <text x = {50} y = {430}>0.4</text>
                  <text x = {50} y = {390}>0.6</text>
                  <text x = {50} y = {350}>0.8</text>
                  <text x = {50} y = {310}>1</text>
                  <text x = {455} y = {510}>0</text>
                  <text x = {445} y = {470}>0.2</text>
                  <text x = {445} y = {430}>0.4</text>
                  <text x = {445} y = {390}>0.6</text>
                  <text x = {445} y = {350}>0.8</text>
                  <text style = {{size:8}} x = {455} y = {310}>1</text>
                  {
                    threeGraphs
                    ? <text x = {190} y = {600}>1</text>

                    : <text x = {50} y = {600}>1</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {640}>0.8</text>

                    : <text x = {50} y = {640}>0.8</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {680}>0.6</text>

                    : <text x = {50} y = {680}>0.6</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {720}>0.4</text>

                    : <text x = {50} y = {720}>0.4</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {760}>0.2</text>

                    : <text x = {50} y = {760}>0.2</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {790}>0</text>
                    : <text x = {50} y = {800}>0</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {790}> </text>
                    : <text x = {460} y = {600}>1</text>
                  }
                   {
                    threeGraphs
                    ? <text x = {190} y = {640}></text>

                    : <text x = {452} y = {640}>0.8</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {680}></text>

                    : <text x = {452} y = {680}>0.6</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {720}></text>

                    : <text x = {452} y = {720}>0.4</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {190} y = {760}></text>

                    : <text x = {452} y = {760}>0.2</text>
                  }
                  {
                    threeGraphs
                    ? <text x = {160} y = {790}> </text>
                    : <text x = {460} y = {800}>0</text>
                  }
                  <text x = {200} y = {310}>Graph 1</text>
                  <text x = {625} y = {310}>Graph 2</text>
                  {
                    threeGraphs
                    ? <text x = {380} y = {610}>Graph 3</text>
                    : <text x = {200} y = {610}>Graph 3</text>
                  }
                  {
                    threeGraphs
                    ? <text> </text>
                    : <text x = {625} y = {610}>Graph 4</text>
                  }

                </svg>
                <svg class = "e">
                  <text x = {120} y = {200}>Equal False Positive Rate</text>
                </svg>
                 <input type="range" min={0} max={(this.state.rect1Arr.length)-1} 
              className="hist-slider" onChange={this.onChange1}
              name="sliderPos" value={this.state.sliderPos} ref={this.sliderRef} list = "tickmarks"
              style={{ width:300, left:700, top:255}}/>
                
                  <select name="stroke1" id="stroke1" ref={this.stroke1Ref}>
                    <option value="#0000FF">Blue and Red</option>
                    <option value="#FF0000">Red and Blue</option>
                    <option value="Orange and Blue">Orange and Blue</option>
                    <option value="Blue and Orange">Blue and Orange</option>
                    <option value = "Yellow and Blue">Yellow and Blue</option>
                    <option value = "Blue and Yellow">Blue and Yellow</option>
                  </select>
                  <input onClick={() => this.changeStroke1()} type="submit" value="Submit"></input>
                  <br></br>
                  <select name = "threeGraphs" id = "threeGraphs" ref = {this.threeGraphRef}>
                    <option value = "True">Three graphs</option>
                    <option value = "False">Four graphs</option>
                  </select>
                  <input onClick = {() => this.changeGraphNumber()} type = "submit" value = "Submit"></input>
                  <br></br>
                  <select name = "graphCol" id = "graphCol" ref = {this.graphColRef}>
                    <option value = "1 and 1">1 and 1</option>
                    <option value = "1 and 2">2 and 1</option>
                    <option value = "2 and 1">1 and 2</option>
                    <option value = "2 and 2">2 and 2</option>
                  </select>
                  <input onClick = {() => this.changeGraphColNumber()} type = "submit" value = "Submit"></input>
                  <br></br>
            </div>
        );
    }

}

export default Tradeoff;
