import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class HeartFilled extends Component <HeartSVGProps> {
  render() {
    const id = 'mask' + Math.random();
    return(
      <svg onClick={ this.props.onClick } onMouseEnter={ this.props.onMouseEnter } onMouseLeave={ this.props.onMouseLeave } width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.53597 1.60325C9.34869 0.790154 10.4512 0.333328 11.6008 0.333328C12.7504 0.333328 13.853 0.790154 14.6657 1.60325C15.4785 2.41575 15.9354 3.51825 15.9354 4.66788C15.9354 5.8175 15.4785 6.92001 14.6656 7.73262L8.77222 13.6259C8.51187 13.8863 8.08977 13.8863 7.82942 13.6259L1.93608 7.73262C0.243474 6.04001 0.243474 3.29575 1.93608 1.60314C3.62869 -0.0894672 6.37295 -0.0894672 8.06556 1.60314L8.30082 1.8384L8.53597 1.60325Z" fill="black"/>
        <mask id={ id } mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="14">
        <path d="M8.53597 1.60325C9.34869 0.790154 10.4512 0.333328 11.6008 0.333328C12.7504 0.333328 13.853 0.790154 14.6657 1.60325C15.4785 2.41575 15.9354 3.51825 15.9354 4.66788C15.9354 5.8175 15.4785 6.92001 14.6656 7.73262L8.77222 13.6259C8.51187 13.8863 8.08977 13.8863 7.82942 13.6259L1.93608 7.73262C0.243474 6.04001 0.243474 3.29575 1.93608 1.60314C3.62869 -0.0894672 6.37295 -0.0894672 8.06556 1.60314L8.30082 1.8384L8.53597 1.60325Z" fill="white"/>
        </mask>
        <g mask={`url(#${id})`}>
          <rect y="-1" width="16" height="16" fill="#FF2048"/>
        </g>
      </svg>
    )
  }
}

class HeartEmpty extends Component <HeartSVGProps> {
  render() {
    const id = 'mask' + Math.random();

    return (
      <svg onClick={ this.props.onClick } onMouseEnter={this.props.onMouseEnter} onMouseLeave={ this.props.onMouseLeave } width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6008 0.333336C10.4512 0.333336 9.34869 0.790161 8.53597 1.60326L8.30082 1.83841L8.06556 1.60315C6.37295 -0.0894595 3.62869 -0.0894595 1.93608 1.60315C0.243474 3.29576 0.243474 6.04002 1.93608 7.73262L7.82942 13.626C8.08977 13.8863 8.51187 13.8863 8.77222 13.626L14.6656 7.73262C15.4785 6.92002 15.9354 5.81751 15.9354 4.66789C15.9354 3.51826 15.4785 2.41575 14.6657 1.60326C13.853 0.790161 12.7504 0.333336 11.6008 0.333336ZM13.0161 7.49648L8.30082 12.2117L2.87889 6.78982C1.70698 5.61791 1.70698 3.71787 2.87889 2.54596C4.0508 1.37405 5.95084 1.37405 7.12275 2.54596L7.82942 3.25262C8.08976 3.51297 8.51187 3.51297 8.77222 3.25262L9.47889 2.54596C10.0417 1.98293 10.8049 1.66667 11.6008 1.66667C12.3967 1.66667 13.16 1.98293 13.7229 2.54607C14.2858 3.10872 14.602 3.87199 14.602 4.66789C14.602 5.46378 14.2858 6.22706 13.7229 6.7897L13.0161 7.49648Z" fill="black"/>
        <mask id={ id } mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="14">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6008 0.333336C10.4512 0.333336 9.34869 0.790161 8.53597 1.60326L8.30082 1.83841L8.06556 1.60315C6.37295 -0.0894595 3.62869 -0.0894595 1.93608 1.60315C0.243474 3.29576 0.243474 6.04002 1.93608 7.73262L7.82942 13.626C8.08977 13.8863 8.51187 13.8863 8.77222 13.626L14.6656 7.73262C15.4785 6.92002 15.9354 5.81751 15.9354 4.66789C15.9354 3.51826 15.4785 2.41575 14.6657 1.60326C13.853 0.790161 12.7504 0.333336 11.6008 0.333336ZM13.0161 7.49648L8.30082 12.2117L2.87889 6.78982C1.70698 5.61791 1.70698 3.71787 2.87889 2.54596C4.0508 1.37405 5.95084 1.37405 7.12275 2.54596L7.82942 3.25262C8.08976 3.51297 8.51187 3.51297 8.77222 3.25262L9.47889 2.54596C10.0417 1.98293 10.8049 1.66667 11.6008 1.66667C12.3967 1.66667 13.16 1.98293 13.7229 2.54607C14.2858 3.10872 14.602 3.87199 14.602 4.66789C14.602 5.46378 14.2858 6.22706 13.7229 6.7897L13.0161 7.49648Z" fill="white"/>
        </mask>
        <g mask={`url(#${id})`}>
          <rect y="-1" width="16" height="16" fill="#FF2048"/>
        </g>
      </svg>
    )
  }
}

class Heart extends Component <HeartProps, HeartState> {
  constructor(props: HeartProps) {
    super(props);

    this.state = { liked: false, likeOnClick: true, count: 0, ...this.props };
  }

  private onMouseEnter = () => {
    this.setState({ liked: this.state.liked });
  }

  private onMouseLeave = () => {
    this.setState({ liked: this.state.liked });
  }

  private toggleClick = () => {
    if (this.state.likeOnClick) {
      this.setState({ liked: !this.state.liked });
    }
    if (this.state.liked) {
      this.setState({ count: this.state.count - 1});
    } else {
      this.setState({ count: this.state.count + 1});
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        { this.state.liked && ( <HeartFilled onClick={ this.toggleClick } /> )}
        { !this.state.liked && ( <HeartEmpty onClick={ this.toggleClick } /> )}
        <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 0.95 }}>
          { this.state.count }
        </Typography>
      </div>
    )
  } 
}

interface HeartProps {
  liked?: boolean
  likeOnClick?: boolean
  count?: number
}

interface HeartState {
  liked: boolean
  likeOnClick: boolean
  count: number
}

interface HeartSVGProps {
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}


export default Heart;
