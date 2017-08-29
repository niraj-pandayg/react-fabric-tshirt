import React from "react";
import ReactDOM from "react-dom";

import ImageCSS from "./Image.css";
import Fabric_Image from "../../../CanvasBox/fabric-components/Image.js";

var that;
export default class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      ImageJSON:[]
    };
    that = this;
  }
  addImage(event){
    var object = event.target.dataset.src;
    var image = new Fabric_Image({
      src:event.target.dataset.src,
    });
    image.create();
  }
  deleteLayer(){
    var image = new Fabric_Image();
    image.delete();
  }
  addImageList(event){
    var reader = new FileReader();
    console.log(event.target.files[0]);
    if(event.target.files[0]){
      reader.readAsDataURL(event.target.files[0]);
    }else{
    }
    reader.onloadend = function(){
      var temp = that.state.ImageJSON;
      temp.push(reader.result);
      that.setState({ImageJSON: temp});
  }
  }
  clickUpload(){
    document.getElementById("inputfile").click();
  }
  render() {
    var currentClass = "col-md-12 image-container "+this.props.visibility;
    return (
      <div class={currentClass}>   
        <div class="col-md-12 text-center">
          <input type="file" onChange={that.addImageList.bind(this)} id="inputfile" class="inputfile" />
          <button onClick={this.clickUpload} class="btn btn-primary">Choose your photo<i class="fa fa-upload"></i></button>
        </div>
        {
          this.state.ImageJSON.map(function (backgroundImage,index) {
            var imageStyle = {
              backgroundImage:'url('+backgroundImage+')'
            }
            return(
              <div onClick={that.addImage.bind(this)} key={index} data-src={backgroundImage} class="image-container-content col-md-6" style={imageStyle}></div>
            );
          })
        }
      </div>
    );
  }
}