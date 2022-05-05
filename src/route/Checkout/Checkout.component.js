import {Checkout as SourceCheckout} from "SourceRoute/Checkout/Checkout.component"
import ContentWrapper from "SourceComponent/ContentWrapper";
import './Checkout.override.style.scss';
import { ProgressBar } from "Component/ProgressBar/ProgressBar.component";
class Checkout extends SourceCheckout{
  
    renderCheckoutProgressBar(){
        const { checkoutStep, isMobile } = this.props;

        if(isMobile){
            return "";
        }
        
        let stepMapKeys = Object.keys(this.stepMap);
        let stepMapValues = Object.values(this.stepMap);
        // Check if checkout step is the last one
        const isLastItemActive = stepMapKeys[stepMapKeys.length-1] === checkoutStep;

        // Check index of current step in stepMap keys
        let activeIndex = stepMapKeys.indexOf(checkoutStep);
        
        return (
            <ProgressBar isLastItemActive={isLastItemActive} stepMapArray={stepMapValues} activeIndex={activeIndex} ></ProgressBar>
        )
    }
    
    render() {
        return (
            <main block="Checkout">
                {this.renderCheckoutProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;