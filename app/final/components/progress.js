import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './progress.less'

class Progress extends Component{
    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress)
    };
    render(){
        return (
            <div className = "components-progress row" ref ="progressBar" onClick={this.changeProgress.bind(this)}>
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}>{this.props.playerTime}s</div>
            </div>
        )
    }
}
Progress.defaultProps = {
    barColor: '#2f9842'
}
Progress.propTypes = {
    barColor: PropTypes.string
}
export default Progress;