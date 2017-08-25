import React, {Component} from 'react';
import Progress from '../components/progress'
import './player.less'

let duration = null;
class Player extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            progress: '-',
            time: '-'
        }
    };

    componentDidMount(){
        $('#player').bind($.jPlayer.event.timeupdate,(e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute,
                time: Math.round(e.jPlayer.status.currentTime)
            });
        });
    }

    componentWillUnmout(){
        $("#player").unbind($.jPlayer.event.timeupdate);
    };

    progressChangeHandler(progress){
        $('#player').jPlayer('play', duration * progress);
    };

    render(){
        let totalSeconds = this.state.time;
        const minute = Math.floor(totalSeconds/60);
        const seconds = totalSeconds % 60;
        const time = ('0' + minute).slice(-2) + ":" + ('0' + seconds).slice(-2)

        return (
            <div className="player-page">
                <Progress progress = {this.state.progress} 
                                        playerTime = {time}
                                        onProgressChange={this.progressChangeHandler}/>
            </div>
        )
    }
}

export default Player;