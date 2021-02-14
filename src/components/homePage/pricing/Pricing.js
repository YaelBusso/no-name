import React from 'react'
import './pricing.css'
export default function Pricing() {
    return (
        <section className="price-comparison">
            <div className="price-column">
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">$</div>
                        10
                        <div className="per-month">/mo</div>
                    </div>
                    <div className="plan-name">Basic</div>
                </div>
                <div className="divider" />
                <div className="feature">
                    <img src="check-circle.svg" />
                        Feature A
                </div>
                <div className="feature">
                 <img src="check-circle.svg" />
                    Feature B
                </div>
                <div className="feature inactive">
                    <img src="x-square.svg" />
                     Feature C
                </div>
                <div className="feature inactive">
                    <img src="x-square.svg" />
                  Feature D
                </div>
                <div className="feature inactive">
                 <img src="x-square.svg" />
                 Feature E
                </div>
                <div className="feature inactive">
                    <img src="x-square.svg" />
                     Feature F
                </div>
                <button className="cta">Start Today</button>
            </div>
            <div className="price-column popular">
                <div className="most-popular">Most Popular</div>
                <div className="price-header">
                    <div className="price">
                        <div className="dollar-sign">$</div>
                        20
                        <div className="per-month">/mo</div>
                    </div>
                    <div className="plan-name">Professional</div>
                </div>
                <div className="divider" />
                <div className="feature">
                    <img src="check-circle.svg" />
                 Feature A
                </div>
                <div className="feature">
                    <img src="check-circle.svg" />
                    Feature B
                </div>
                <div className="feature">
                    <img src="check-circle.svg" />
                    Feature C
                </div>
                <div className="feature">
                    <img src="check-circle.svg" />
                     Feature D
                </div>
                <div className="feature inactive">
                    <img src="x-square.svg" />
                     Feature E
                </div>
                <div className="feature inactive">
                  <img src="x-square.svg" />
                     Feature F
                </div>
                <button className="cta">Start Today</button>
            </div>
            <div className="price-column">
            <div className="price-header">
                <div className="price">
                    <div className="dollar-sign">$</div>
                    50
                <div className="per-month">/mo</div>
            </div>
            <div className="plan-name">Enterprise</div>
        </div>
        <div className="divider" />
        <div className="feature">
         <img src="check-circle.svg" />
             Feature A
        </div>
        <div className="feature">
            <img src="check-circle.svg" />
          Feature B
        </div>
        <div className="feature">
         <img src="check-circle.svg" />
            Feature C
        </div>
        <div className="feature">
          <img src="check-circle.svg" />
          Feature D
        </div>
         <div className="feature">
          <img src="check-circle.svg" />
      Feature E
         </div>
       <div className="feature">
      <img src="check-circle.svg" />
          Feature F
     </div>
    <button className="cta">Start Today</button>
  </div>
</section>
    )
}