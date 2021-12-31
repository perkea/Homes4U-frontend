import React from "react";
import Nav from "react-bootstrap/Nav";

function AppNavBar() {
  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/"> <img src="/images/image.png" alt="" height="30px" /></Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="/show">Buy Homes</Nav.Link>
        </Nav.Item> */}

        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <input type="text" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src="/images/signin.png" alt="" style={{height: "40px",marginTop: "3px"}} />
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="link-1"></Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  );
}

export default AppNavBar;
