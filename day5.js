//Q: What is a high order component
//Let's say I want to have a component that
//sets the state has true or false, depending if
//a user us hovering it or not

function withHover(Component) {
    return class WithTooltip extends React.Component {
      state = { hovering: false }
      mouseOver = () => this.setState({ hovering: true })
      mouseOut = () => this.setState({ hovering: false })
      render() {
        const props = {
            hovering: this.state.hovering,
            ...this.props
        }
        return (
          <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
            <Component {...props} />
          </div>
        );
      }
    }
  }

  //Inversion of control

import withHover from './withHover'

function Tooltip ({ text, children, hovering }) {
    return (
      <div>
        {hovering === true && <div>{text}</div>}
        {children}
      </div>
    )
}
export default withHover(Tooltip)

<Tooltip text="tooltip text">
    <div>Some text</div>
</Tooltip>


//Q: What is the virtual DOM
//The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

//Q: What is the reconciliation
//Is the name for the process that syncs the virtual DOM with the "real" DOM

//Validate subsquence
let arr = [1, 2, 3, 4, 7, 8];
let sequence = [2, 4, 8];

function isValidSubsquence(array, sequence) {
    let seqIndex = 0;
    for(let i = 0; i<arr.length; i++) {
        if (seqIndex === sequence.length) {
            return true;
        }

        if (sequence[seqIndex] === array[i]) {
            seqIndex++;
        }
    }
    return false;
}




