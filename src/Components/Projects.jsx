import React from "react";

import {
  Wrap,
  WrapItem,
  Center,
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";

const Projects = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 950);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div>
          <div
            style={{ width: "85%", margin: "auto",   }}
            id="project"
          >
            <br />
            <br />
            <br />
            <Center>
              <Heading
                as="h1"
                size="3xl"
                noOfLines={1}
               
                padding="20px"
              
              >
                
                My <span style={{ color: "red" }}>Creative</span> Projects
              </Heading>
            </Center>
            <br />
            <br />
            <br />

            <SimpleGrid minChildWidth="200px" spacing="70px" >
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project1}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Skin Store Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's an app where house owner provides their places on rent.
                    A vacation rental—whether a home, apartment, condo, boat,
                    yurt, shared space, or other property—represents tremendous
                    value, compared to hotels, for flexible, adventurous travel
                    consumers.
                  </Text>
                </Center>
                <br />
                <Center>
                  <Text fontSize="16px" color="tomato">
                    Tech Stack:
                  </Text>
                  React,Redux,MondgoDB,Chakra Ui,NodeJs
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a target="_blank" href="https://github.com/pravindnikam07/Skin-Store-Clone">
                    <Button>Github</Button>
                  </a>
                  <a target="_blank" href="https://skinstoreclone.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              {/* boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" */}
              <Box
                style={{
                  padding: "20px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project2}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>J Crew Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's is the one-stop online fashion destination for all the
                    fashion needs. Inspired by the international runways and the
                    global street scene it delivers A-grade fashion at
                    pocket-friendly prices.
                  </Text>
                </Center>
                <br />
                <Center>
                  <Text fontSize="16px" color="tomato">
                    Tech Stack:
                  </Text>
                  React,Redux,MondgoDB,Chakra Ui,NodeJs
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a target="_blank" href="https://github.com/shivamgupta8482/jcrewteam">
                    <Button>Github</Button>
                  </a>
                  <a target="_blank" href="https://bejewelled-klepon-a99de5.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>

              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project1}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Skin Store Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's an app where house owner provides their places on rent.
                    A vacation rental—whether a home, apartment, condo, boat,
                    yurt, shared space, or other property—represents tremendous
                    value, compared to hotels, for flexible, adventurous travel
                    consumers.
                  </Text>
                </Center>
                <br />
                <Center>
                  <Text fontSize="16px" color="tomato">
                    Tech Stack:
                  </Text>
                  React,Redux,MondgoDB,Chakra Ui,NodeJs
                </Center>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a target="_blank" href="https://github.com/pravindnikam07/Skin-Store-Clone">
                    <Button>Github</Button>
                  </a>
                  <a target="_blank" href="https://skinstoreclone.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
            </SimpleGrid>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ width: "90%", margin: "auto" }} id="project">
            <Center>
              <Heading
                as="h1"
                size="2xl"
                noOfLines={1}
                // style={{ marginTop: "320px" }}
              >
                My <span style={{color:"red"}}>Projects</span>
              </Heading>
            </Center>

            <br />
            <br />
            <SimpleGrid minChildWidth="200px" spacing="80px">
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
              <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project1}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>Skin Store Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's an app where house owner provides their places on rent.
                    A vacation rental—whether a home, apartment, condo, boat,
                    yurt, shared space, or other property—represents tremendous
                    value, compared to hotels, for flexible, adventurous travel
                    consumers.
                    <br />
<br />
                    Tech Stack:React,Redux,MondgoDB,Chakra Ui,NodeJs
                  </Text>
                </Center>
                <br />
               
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/pravindnikam07/Skin-Store-Clone">
                    <Button>Github</Button>
                  </a>
                  <a href="https://skinstoreclone.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                 <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project2}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>J Crew Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's is the one-stop online fashion destination for all the
                    fashion needs. Inspired by the international runways and the
                    global street scene it delivers A-grade fashion at
                    pocket-friendly prices.
                    <br />
<br />
                    Tech Stack:React,Redux,MondgoDB,Chakra Ui,NodeJs
                  </Text>
                </Center>
                <br />
                
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/shivamgupta8482/jcrewteam">
                    <Button>Github</Button>
                  </a>
                  <a href="https://bejewelled-klepon-a99de5.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
              <Box
                style={{
                  padding: "20px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                 <Center>
                  {" "}
                  <Image
                    boxSize="200px"
                    width="100%"
                    borderRadius="20px"
                    src={project2}
                    alt="Dan Abramov"
                  />
                </Center>
                <br />
                <Center>
                  <Heading>J Crew Clone</Heading>
                </Center>
                <br />
                <Center>
                  <Text>
                    It's is the one-stop online fashion destination for all the
                    fashion needs. Inspired by the international runways and the
                    global street scene it delivers A-grade fashion at
                    pocket-friendly prices.
                    <br />
<br />
                    Tech Stack:React,Redux,MondgoDB,Chakra Ui,NodeJs
                  </Text>
                </Center>
                <br />
                
               
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <a href="https://github.com/shivamgupta8482/jcrewteam">
                    <Button>Github</Button>
                  </a>
                  <a href="https://bejewelled-klepon-a99de5.netlify.app/">
                    <Button>Deploy</Button>
                  </a>
                </div>
              </Box>
            </SimpleGrid>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
