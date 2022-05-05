import PropTypes from 'prop-types';
import { PureComponent, Fragment} from 'react';
import "./ProgressBar.style";
export class ProgressBar extends PureComponent{

    static propTypes = {
        activeIndex: PropTypes.number.isRequired,
        stepMapArray: PropTypes.array.isRequired,
        isLastItemActive: PropTypes.bool.isRequired
    };


    render(){
        const {stepMapArray, activeIndex, isLastItemActive} = this.props;
        const lastItemClass = `ProgressBarEnd ${isLastItemActive ? "done" : ""}`;

        return(
            <div className="ProgressBarContainer">
                <ol className="ProgressBarList">
                    <li className="ProgressBarEnd done"></li>
                    {
                        stepMapArray.map(({title},index)=>{

                            let stepAdditionalCalss = "done"
                            // If it's after activeIndex give class: todo
                            if(index > activeIndex){
                                stepAdditionalCalss = "todo"
                            }

                            // If it's last item don't render as item
                            if(index === stepMapArray.length-1){
                                return ""
                            }

                            const stepClass = `ProgressBarItem ${stepAdditionalCalss}`
                            const progressClass = `ProgressBarEnd inner ${stepAdditionalCalss}`
                            return(
                                <Fragment key={index}>
                                    {
                                        index ? <li className={progressClass}></li> : ""
                                    }
                                    <li className={stepClass}>
                                        <div className="ProgressBarIndexContainer">
                                            <div className="ProgressBarIndexCircle">
                                                {
                                                    index < activeIndex ? (
                                                        <div className="ProgressbarCheckbox"></div>
                                                    ) : (
                                                        <p>
                                                            {index+1}
                                                        </p>
                                                    )
                                                }
                                                
                                            </div>
                                        </div>
                                        <h4>{title}</h4>
                                    </li>
                                </Fragment>
                            )
                        })
                    }
                    <li className={lastItemClass}></li>
                </ol>
            </div>
        )
    }
}