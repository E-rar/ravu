import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Button from 'react-bootstrap/Button'
import EraserIcon from '../../assets/img/icons/Eraser';
import ClearIcon from '../../assets/img/icons/Clear';
import RedoIcon from '../../assets/img/icons/Redo';
import UndoIcon from '../../assets/img/icons/Undo';
import PenIcon from '../../assets/img/icons/Pen';

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  width:"50vw",
  height:"50vh"
};

const Canvas = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" , strokeWidth : 5};
    this.canvas = React.createRef();
    this.handleColor = this.handleColor.bind(this);
    this.handleStrokeWidth = this.handleStrokeWidth.bind(this);
  }

  handleColor(event) {this.setState({color: event.target.value});  }
  handleStrokeWidth(event) {this.setState({strokeWidth: event.target.value});  }
  
  render() {
    return (
      <div>
      <div className="d-flex justify-content-center">
        <ReactSketchCanvas
          styles={styles}
          width={"50%"}
          height={"50vh"}
          ref={this.canvas}
          strokeWidth={this.state.strokeWidth}
          strokeColor={this.state.color}
        />
        </div>
        <div>
          <input onChange={this.handleColor}  type="color" id="head" name="Color"/>
          <input  onChange={this.handleStrokeWidth} value={this.state.strokeWidth} type="range" id="strokeWidth" min="0" max="20" />
          <label htmlFor="strokeWidth">{this.state.strokeWidth}</label>
        </div>
        <Button
          onClick={() => {
            this.canvas.current.
              exportImage("png")
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Get Image
        </Button>
        <Button
          variant="light"
          onClick={() => {
            this.canvas.current.clearCanvas()
          }}
        >
          <ClearIcon/>
        </Button>
        <Button
          variant="light"
          onClick={() => {
            this.canvas.current.undo()
          }}
        >
          <UndoIcon/>
        </Button>
        <Button
          variant="light"
          onClick={() => {
            this.canvas.current.redo()
          }}
        >
          <RedoIcon/>
        </Button>
        <Button
          variant="light"
          onClick={() => {
            this.canvas.current.eraseMode(true)
          }}
        >
          <EraserIcon/>
        </Button>
        <Button
          variant="light"
          onClick={() => {
            this.canvas.current.eraseMode(false)
          }}
        >
          <PenIcon/>
        </Button>
      
      </div>
    );
  }
};

export default Canvas;