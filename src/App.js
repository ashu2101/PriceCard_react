import "./App.css";
import Card from "./Card";

let cardDetails = [
  {
    type: "FREE",
    currency: "$",
    amount: 0,
    period: "month",
    subscription: [
      {
        name: "5 Users",
        isEnabled: true,
        isBold: true,
      },
      {
        name: "5GB Storage",
        isEnabled: true,
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: true,
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: false,
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: false,
      },
      {
        name: "Free Subdomain",
        isEnabled: false,
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false,
      }
    ]
  },
  {
    type: "PLUS",
    currency: "$",
    amount: 9,
    period: "month",
    subscription: [
      {
        name: "Single User",
        isEnabled: true,
      },
      {
        name: "5GB Storage",
        isEnabled: true,
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: true,
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true,
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true,
      },
      {
        name: "Free Subdomain",
        isEnabled: true,
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false,
      }
    ]
  },
  {
    type: "PRO",
    currency: "$",
    amount: 49,
    period: "month",
    subscription: [
      {
        name: "Unlimited User",
        isEnabled: true,
        isBold: true,
      },
      {
        name: "5GB Storage",
        isEnabled: true,
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true,
      },
      {
        name: "Community Access",
        isEnabled: true,
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true,
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true,
      },
      {
        name: "Unlimited Free Subdomain",
        isEnabled: true,
      },
      {
        name: "Monthly Status Reports",
        isEnabled: true,
      }
    ]
  }
];

const subscribePlan =()=>{
  alert("You have subscribed to Plan")
}

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
          cardDetails.map((card, index) => (
            <Card key={index} cardData={card} subscribePlan={subscribePlan}/>
          ))
          }
        </div>
      </div>
    </section>
  );
}

export default App;
