import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useColorMode } from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { ArrowUpIcon } from "@chakra-ui/icons";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Contact from "./Contact";
import About from "./About";
import Description from "./Description";
import Skills from "./Skills";
import "./Navbar.css";
import Projects from "./Projects";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function Navbar1() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });






  
 
  return (
    <div>
      {isDesktop ? (
        <div>
          <div>
            <Navbar
              bg={colorMode}
              variant={colorMode}
              sticky="top"
              expand="lg"
              collapseOnSelect
            >
              <Navbar.Brand href="#" style={{ paddingLeft: "20px" }}>
                <Heading as="h2" size="xl">
                  SHI<span style={{ color: "red" }}>VAM</span>
                </Heading>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Collapse>
                <Nav className="me-auto"></Nav>
                <div style={{ paddingRight: "20px" }}>
                  <Nav>
                    <Nav.Link style={{ paddingRight: "20px" }} href="#about">
                      HOME
                    </Nav.Link>
                    <Nav.Link href="#work">ABOUT</Nav.Link>
                    <Nav.Link href="#project">WORK</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={toggleColorMode}
                    >
                      {colorMode === "light" ? (
                        <SunIcon style={{ marginTop: "-5px" }} />
                      ) : (
                        <MoonIcon style={{ marginTop: "-5px" }} />
                      )}
                    </Button>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
            <div id="home" className="anchor">
              <Navbar />
            </div>

            <div id="about" className="anchor">
              <About />
            </div>
            <div id="work" className="anchor">
              <br />

              <br />

              <br />

              <br />
              <Description />
            </div>

            <div id="projects" className="anchor">
              <Projects />
            </div>

            <div id="skills" className="anchor">
              <Skills />
            </div>

            <div id="contact" className="anchor">
              <Contact />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {localStorage.setItem("chakra-ui-color-mode",("dark"))}
          <div style={{ position: "scroll" }}>
            <Navbar
              bg="dark"
              variant="dark"
              sticky="top"
              expand="lg"
              collapseOnSelect
            >
              <Navbar.Brand href="#">
                <Heading as="h2" size="xl">
                  SHI<span style={{ color: "red" }}>VAM</span>
                </Heading>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Collapse>
                <Nav className="me-auto"></Nav>
                <div style={{ paddingRight: "20px" }}>
                  <Nav>
                    <Nav.Link style={{ paddingRight: "20px" }} href="#about">
                      HOME
                    </Nav.Link>
                    <Nav.Link href="#work">ABOUT</Nav.Link>
                    <Nav.Link href="#project">WORK</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                  
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>

            <div>
              <div id="home" className="anchor">
                <Navbar />
              </div>

              <div id="about" className="anchor">
                <div>
                  <About />
                </div>
              </div>
              <div id="work" className="anchor">
                <br />

                <br />

                <br />

                <br />
                <Description />
              </div>

              <div id="projects" className="anchor">
                <Projects />
              </div>

              <div id="skills" className="anchor">
                <Skills />
              </div>

              <div id="contact" className="anchor">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar1;
