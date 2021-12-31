import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function AppNavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src="/images/image.png" alt="" height="30px" /></Navbar.Brand>
        <Form >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            {/* <Button variant="outline-info">
              Search
            </Button> */}
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <img src="/images/signin.png" alt="" style={{height: "40px",marginTop: "3px"}} />
            </Navbar.Text>
          </Navbar.Collapse>

        {/* <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/"> <img src="/images/image.png" alt="" height="30px" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <input type="text" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img src="/images/signin.png" alt="" style={{height: "40px",marginTop: "3px"}} />
          </Nav.Item>
        </Nav> */}
      </Navbar>
    </div>
  );
}

export default AppNavBar;
