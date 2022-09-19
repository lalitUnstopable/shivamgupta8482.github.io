import React from "react";
import { useState, useEffect } from "react";
import {
  Stack,
  Box,
  Wrap,
  WrapItem,
  Center,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import image from "../images/image3.png";
import pdf from "../images/Shivamgupta.pdf";
import "../App.css";
import { TypeAnimation } from "react-type-animation";
import "../App.css";

const About = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1050);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div id="about" style={{offset:"-40"}}>
      {isDesktop ? (
        <div
          style={{
            height: "100vh",
           
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Wrap spacing="150px" justify="center" padding="55px">
            <WrapItem>
              <Center>
                <Heading as="h2" size="xl" style={{ marginLeft: "-20px" }}>
                  Hello, My Name is
                  <Heading as="h2" size="3xl" style={{ marginTop: "10px" }}>
                    <span style={{ color: "red" }}>SHIVAM</span> GUPTA
                    <Heading as="h2" size="xl" style={{ marginTop: "20px" }}>
                      I'm
                      <TypeAnimation
                        style={{ color: "red" }}
                        sequence={[" Full Stack Developer.", 500, ""]}
                        speed={40} // Must be in range between 1 and 99!
                        wrapper="span"
                        repeat={Infinity}
                      />
                      <br />
                      <a href={pdf} download>
                        <Button colorScheme="red" style={{ marginTop: "20px" }}>
                          RESUME
                        </Button>
                      </a>
                    </Heading>
                  </Heading>
                </Heading>
              </Center>
            </WrapItem>



            

            <WrapItem>
              <Center>
                <Image
                  boxSize="300px"
                  // objectFit='cover'
                  borderRadius="20%"
                  marginTop="-50px"
                  marginLeft="20px"
                  src={image}
                  alt="Dan Abramov"
                />
              </Center>
            </WrapItem>
          </Wrap>
        </div>
      ) : (
        <div>
          <Wrap
           spacing="100px"
            justify="center" 
           padding="50px" 
            id="about">
          <WrapItem>
          <Center>
              <Image
              borderRadius="20%"
                width="80%"
                boxSize="200px"
              
                src={image}
                alt="Dan Abramov"
              />
            </Center>
          </WrapItem>

            <WrapItem>
              <Center>
              <Heading as="h2" size="xl" style={{ marginLeft: "-20px" }}>
                  Hello, My Name is
                  <Heading as="h2" size="3xl" style={{ marginTop: "10px" }}>
                    <span style={{ color: "red" }}>SHIVAM</span> GUPTA
                    <Heading as="h2" size="xl" style={{ marginTop: "20px" }}>
                      I'm
                      <TypeAnimation
                        style={{ color: "red" }}
                        sequence={[" Full Stack Developer.", 500, ""]}
                        speed={40} // Must be in range between 1 and 99!
                        wrapper="span"
                        repeat={Infinity}
                      />
                      <br />
                      <a href={pdf} download>
                        <Button colorScheme="red" style={{ marginTop: "20px" }}>
                          RESUME
                        </Button>
                      </a>
                    </Heading>
                  </Heading>
                </Heading>
              </Center>
            </WrapItem>
          </Wrap>
        </div>
      )}
    </div>
  );
};

export default About;
