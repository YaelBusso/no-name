import React from "react";
import "./orderdetails.css";
import { BootstrapInput, Form, Container ,Button } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <>
      <div className="wrapperOrderDetails">
        <Container
          dir="rtl"
          className="d-flex"
          style={{ minHeight: "100vh", minWidth: "400px" }}
        >
            <div className="order-tabs d-flex justify-content-center">
              <Tabs>
                <Tab label="קטלוג מוצרים">
                  <div></div>
                </Tab>
                <Tab label="סל הקניות שלי">
                  <div></div>
                </Tab>
                <Tab label="לסיים הזמנה">
                <p className="title">כמעט סיימנו...</p>
            <div className="detail">
              <p>נשאר רק לעדכן פרטי מייל וטלפון שלך וההזמנה בדרך...</p>
              <p>זמן ההזמנה נחשב מרגע סיום ההזמנה.</p>
            </div>

            <Form.Group>
              <Form.Label className="formLable">הזן כתובת מייל</Form.Label>
              <Form.Control
                className="control"
                type="email"
                placeholder="Example@email.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLable">פלאפון</Form.Label>
              <Form.Control
                className="control"
                type="text"
                placeholder="050-000-0000"
              />
            </Form.Group>
            <Button
                    variant="contained"
                    type="submit"
                    // disabled={loading}
                    className="submitOrder"
                    type="submit"
                  >
                    תזמין לי
                  </Button>
                </Tab>
              </Tabs>
            </div>
            
          {/* <Form className="d-flex-column">
            <div className="order-tabs d-flex justify-content-center">
              <Tabs>
                <Tab label="קטלוג מוצרים">
                  <div></div>
                </Tab>
                <Tab label="סל הקניות שלי">
                  <div></div>
                </Tab>
                <Tab label="לסיים הזמנה"></Tab>
              </Tabs>
            </div>
            <p className="title">כמעט סיימנו...</p>
            <div className="detail">
              <p>נשאר רק לעדכן פרטי מייל וטלפון שלך וההזמנה בדרך...</p>
              <p>זמן ההזמנה נחשב מרגע סיום ההזמנה.</p>
            </div>
          </Form> */}
        </Container>
      </div>
    </>
  );
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[2].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};



