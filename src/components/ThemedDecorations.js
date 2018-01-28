import React from 'react';


class ThemedDecorations extends React.Component{
  render() {
    const childrenAddClass = React.Children.map(this.props.children,
      child => React.cloneElement(child, {className: this.props.theme})
    );
    return(
      <div> {childrenAddClass} </div>
    );
  }

}

//In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
//This component renders out all of its children, while adding a className prop to every child.


export default ThemedDecorations;
