import {Component}from'react';
import {withRouter}from'react-router-dom';
import $ from 'jquery'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {

    if (this.props.location !== prevProps.location) {
      if($(".navbar-collapse").hasClass('show')){
        $("#testealdoo").click();
      }
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop);