import React, { Component } from 'react';
import Dropzone, { useDropzone } from "react-dropzone";
import './HistSlider.css';
import Tradeoff from './tradeoff.jsx';

class tradeoffResearch extends Component {
    constructor(props) {
        super(props);
    
        this.rectRef = React.createRef();
        this.svgRef = React.createRef();
        this.areaRef = React.createRef();
    
        this.arg1ref = React.createRef();
        this.arg2ref = React.createRef();
        this.arg3ref = React.createRef();
        this.arg4ref = React.createRef();
        this.arg5ref = React.createRef();
        this.arg6ref = React.createRef();
        this.arg7ref = React.createRef();
    
        this.handleDrop = this.handleDrop.bind(this);
        this.processJSON = this.processJSON.bind(this);
        this.changeJSON = this.changeJSON.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
    
        this.state = {
          dataReceived: false,
          fileNames: [],
          setFileNames: [],
          fileChosen: '',
          key: this.props.key
        };
      }
    componentDidMount() {
        // importing component
        // console.log(this.props);
        if (this.props.imported) {
        // if this normal curve component is imported, we need to append those 
        // associating files to final output with handleChange()
        this.handleChange("FileName", this.props.qToDisplay["FileName"], this.props.count);
        const jsonData = this.props.qToDisplay["FileContent"];
        this.handleChange("FileContent", jsonData, this.props.count);
        this.setState({ imported: true });
        this.processJSON(jsonData);
        }
        //const username = this.props.auth.user.username;
        // this.props.getColData(username, "itemData");
    }

    // Inherited function from TabList.jsx
    saveFile(type, name, content) {
        // this.props.saveFile(type, name, content);
    }

    handleDrop(acceptedFiles) {
        console.log(acceptedFiles.map(file => {
        acceptedFiles.forEach((file) => {

            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const fileText = reader.result;
                const jsonData = JSON.parse(fileText);

                this.setState({
                dataReceived : "true",
                jsonData: jsonData
            });
            };
            reader.readAsText(file);
        });
        }));
        this.setState({ fileNames: acceptedFiles.map(file => file.name) })
    }

    delete() {
        this.props.delete(this.props.count);
    }

    getCount() {
        this.props.getCount(this.props.count);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // inherited from TabList.jsx
    handleChange(key, value, count) {
        this.props.handleChange(key, value, count);
    }

    changeJSON(key, value, data) {
        // var data = this.state.jsonData;
        data[key] = value;
        this.handleChange("FileContent", data, this.props.count);
    }
    
    processJSON(data){
        this.setState({
            dataReceived : "true",
            jsonData:data
        });
    }

    render(){
    if (this.state.dataReceived) {
        // this case is triggered when researchers select one of the three options
        // previously built for drag n drop file upload. 
        // Search 'dataReceived' in this file to learn more
        return (
        <div>
            <Tradeoff 
            data={this.state.jsonData} />
            <br/>
        </div>
        )
    // importing component
    } else if (this.state.imported){
        return (
        <Tradeoff data = {this.state.jsonData}/>
        )
    } 
    else{
        return( 
        <div>
            <Dropzone
                onDrop={this.handleDrop}
                accept="application/JSON, .json"
                >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>Drag'n'drop files, or click to select files (must be valid JSON file)</p>
                    </div>
                )}
                </Dropzone>
        </div>
        )
    }
    }


}

export default tradeoffResearch;