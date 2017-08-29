import React from "react";
import ReactDOM from "react-dom";
import { CirclePicker  } from "react-color";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Fabric_Text from "../../../CanvasBox/fabric-components/Text.js";

var that;
export default class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '',
      fontFamily: 'Times New Roman',
      fontSize: 36,
      text: '',
      textJSON:[
        {
          id:1,
          fill:'#999',
          fontFamily:'Times New Roman',
          fontSize:36,
          fontWeight: false,
          fontStyle: false,
          text:'A'
        }
      ]
    };
    that = this;
  }
  addText(object){
    var tempText = new Fabric_Text({
      fill:object.fill,
      text:that.state.text,
      fontSize:object.fontSize,
      fontFamily:object.fontFamily,
      fontWeight:object.fontWeight ? 'bold' : 'normal',
      fontStyle:object.fontStyle ? 'italic' : 'normal',
      width:object.width
    });
    tempText.create();
  }
  colorChange(color){
    var temp = that.state.textJSON[0];
    var tempArray = [];
    temp.fill = color.hex;
    tempArray.push(temp);
    that.setState({textJSON: tempArray, color: color.hex});
  }
  fontChange(item){
    var temp = that.state.textJSON[0];
    var tempArray = [];
    temp.fontFamily = item.value;
    tempArray.push(temp);
    that.setState({textJSON: tempArray, fontFamily: item.value});
  }
  sizeChange(item){
    var temp = that.state.textJSON[0];
    var tempArray = [];
    temp.fontSize = item.value;
    tempArray.push(temp);
    that.setState({textJSON: tempArray, fontSize: item.value});
  }
  weightChange(){
    var temp = that.state.textJSON[0];
    var tempArray = [];
    temp.fontWeight = !temp.fontWeight;
    tempArray.push(temp);
    that.setState({textJSON: tempArray, fontWeight: temp.fontWeight});
  }
  styleChange(){
    var temp = that.state.textJSON[0];
    var tempArray = [];
    temp.fontStyle = !temp.fontStyle;
    tempArray.push(temp);
    that.setState({textJSON: tempArray, fontStyle: temp.fontStyle});
  }
  textChange(e){
    that.setState({text: e.target.value});
  }
  render() {
    var currentClass = "col-md-12 addText "+this.props.visibility;
    var optionsFont = [
      { value: 'Times New Roman', label: 'Times New Roman' },
      { value: 'Arial BlackSans-Serif', label: 'Arial BlackSans-Serif' },
      { value: 'Comic Sans MS', label: 'Comic Sans MS' },
      { value: 'Lucida Sans Unicode', label: 'Lucida Sans Unicode' },
      { value: 'Roboto CondensedTimes New Roman', label: 'Roboto CondensedTimes New Roman' },
      { value: 'Big CaslonSerif', label: 'Big CaslonSerif' },
      { value: 'Palatino LinotypeSans-Serif', label: 'Palatino LinotypeSerif' },
      { value: 'Bodoni MTSerif', label: 'Bodoni MTSerif' },
      { value: 'CambriaSerif', label: 'CambriaSerif' },
      { value: 'GeorgiaSerif', label: 'GeorgiaSerif' },
      { value: 'Baskerville old faceSerif', label: 'Baskerville old faceSerif' },
      { value: 'CourierSerif', label: 'CourierSerif' },
      { value: 'RockwellSerif', label: 'RockwellSerif' },
      { value: 'HelveticaSans-Serif', label: 'HelveticaSans-Serif' },
      { value: 'Bodoni MTSans-Serif', label: 'Bodoni MTSans-Serif' },
      { value: 'Arial Rounded MT BoldSans-Serif', label: 'Arial Rounded MT BoldSans-Serif' },
      { value: 'CalibriSans-Serif', label: 'CalibriSans-Serif' },
      { value: 'Segoe UISans-Serif', label: 'Segoe UISans-Serif' },
      { value: 'ArialSans-Serif', label: 'ArialSans-Serif' },
      { value: 'Trebuchet MSSans-Serif', label: 'Trebuchet MSSans-Serif' },
      { value: 'ImpactSans-Serif', label: 'ImpactSans-Serif' }
    ];
    var optionsSize = [
      { value: 12, label: '12' },
      { value: 14, label: '14' },
      { value: 16, label: '16' },
      { value: 18, label: '18' },
      { value: 20, label: '20' },
      { value: 22, label: '22' },
      { value: 24, label: '24' },
      { value: 26, label: '26' },
      { value: 28, label: '28' },
      { value: 30, label: '30' },
      { value: 32, label: '32' },
      { value: 34, label: '34' },
      { value: 36, label: '36' },
      { value: 38, label: '38' },
      { value: 40, label: '40' },
      { value: 42, label: '42' },
      { value: 44, label: '44' },
      { value: 46, label: '46' },
      { value: 48, label: '48' },
      { value: 50, label: '50' },
      { value: 52, label: '52' },
      { value: 54, label: '54' },
      { value: 56, label: '56' },
      { value: 58, label: '58' },
      { value: 60, label: '60' },
      { value: 62, label: '62' },
      { value: 64, label: '64' },
      { value: 66, label: '66' },
      { value: 68, label: '68' },
      { value: 70, label: '70' },
      { value: 72, label: '72' },
      { value: 74, label: '74' },
      { value: 76, label: '76' },
      { value: 78, label: '78' },
      { value: 80, label: '80' }
    ];
    return (
      <div class={currentClass}>
      <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
        Step 1 : Select Color
      </div>
        <div class="col-md-12">
          <CirclePicker onChange={that.colorChange.bind(this)} color={this.state.color}/>
        </div>
        <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
        Step 2 : Select Font Family
        </div>
          <Select
            name="form-field-name"
            placeholder="Select Font.."
            value={that.state.fontFamily}
            options={optionsFont}
            onChange={that.fontChange.bind(this)}
            class="col-md-12 mt-10"
          />
          <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
          Step 3 : Select Font Size
          </div>
          <Select
            name="form-field-name"
            placeholder="Select Size.."
            value={that.state.fontSize}
            options={optionsSize}
            onChange={that.sizeChange.bind(this)}
            class="col-md-12 mt-10"
          />
          <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
          Step 4 : Select Bold/Italic
          </div>
          <div class="col-md-12 mt-10">
            <button class={this.state.fontWeight ? "btn btn-primary col-md-offset-2 col-md-3 active" : "btn btn-primary col-md-offset-2 col-md-3"} onClick={that.weightChange}><i class="fa fa-bold"></i></button>
            <button class={this.state.fontStyle ? "btn btn-primary col-md-offset-2 col-md-3 active" : "btn btn-primary col-md-offset-2 col-md-3"} onClick={that.styleChange}><i class="fa fa-italic"></i></button>
            
          </div>
          <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
          Step 5 : Enter Text
          </div>
        {
          this.state.textJSON.map(function (object,index) {
            var textStyle = {
              fontSize:object.fontSize+"px",
              fontWeight:object.fontWeight ? 'bold' : 'normal',
              fontStyle:object.fontStyle ? 'italic' : 'normal',
              fontFamily:object.fontFamily,
              color:object.fill,
              float: 'none !important'
            }
            return(
              <div key={index}>
              <div class="col-md-12 col-sm-12 col-xs-12 mt-10">
              <input type="text" class="form-control" placeholder="Enter text.." onChange={that.textChange}/>
              </div>
                <div class="col-md-12 col-sm-12 col-xs-12 text-center border-rounded mt-10">
                  <div class="pointer" data-attr={JSON.stringify(object)} style={textStyle}>{that.state.text.length < 4 ? that.state.text : that.state.text.substring(0, 3) + '..'}</div>
                </div>
                <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
                  Text above represents your selected typography preference.
                </div>
                <div style={{fontSize: '12px',color: "#999"}} class="mt-10">
                  You can edit text added to your T-shirt by double clicking on the text.
                </div>
                <div class="mt-10 col-md-12 text-center">
                  <button class="btn btn-primary" onClick={that.addText.bind(this, object)}>Add Text</button>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}