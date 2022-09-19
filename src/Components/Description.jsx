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
  UnorderedList,
  List,
  ListItem,
} from "@chakra-ui/react";
import "../App.css";
import image from "../images/image3.png";
import GitHubCalendar from 'react-github-calendar';

const Description = () => {
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
          <div id="work" style={{}}>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <center>
                <Heading as="h2" size="xl">
                  All <span style={{ color: "red" }}>About</span> Me And My{" "}
                  <span style={{ color: "red" }}>Experience</span>
                </Heading>
              </center>
              <br />

              {/* <Center>
<Stack spacing={4} direction='row' align='center'>
<Button colorScheme='red' size='lg'>
   About Me
  </Button>
  <Button colorScheme='red' size='lg'>
    Experience
  </Button>
</Stack>
</Center> */}

              <br />

              <Wrap spacing="150px" justify="center" padding="50px">
                <WrapItem>
                  <Center>
                    <div style={{ marginTop: "-20px" }}>
                      <Image
                        borderRadius="50px"
                        position="relative"
                        src="https://media1.giphy.com/media/ZFiBmGVClrgxt02N9X/giphy.gif"
                        alt="Dan Abramov"
                      />
                      <Image
                        borderRadius="100px"
                        boxSize="450px"
                        // marginTop="-30px"
                        marginTop="-480px"
                        marginLeft="10px"
                        src="https://htmlcolorcodes.com/assets/images/colors/rose-red-color-solid-background-1920x1080.png"
                        alt="Dan Abramov"
                      />
                    </div>
                  </Center>
                </WrapItem>

                <br />
                <br />
                <br />

                <WrapItem>
                  <Center>
                    <UnorderedList>
                      <ListItem>
                        Hello! My name is Shivam Gupta and I enjoy creating
                        things
                        <br />
                        that live on the internet.
                      </ListItem>
                      <ListItem>
                        I'm a passionate Developer, with strong administrative
                        and
                        <br />
                        communication skills, good attention to detail and the
                        ability
                        <br />
                        to write efficient code using MERN Stack.
                      </ListItem>
                      <ListItem>
                        My interest in web development started back last year
                        when
                        <br />
                        Iwas trying to edit things on the web, that taught me a
                        lot
                        <br />
                        about HTML& CSS.
                      </ListItem>
                      <ListItem>
                        As Igrow and flourish as a Developer, one thing which
                        keeps
                        <br />
                        me going is my inquisitiveness for discovering new
                        things
                        <br />
                        every day.
                      </ListItem>
                      <ListItem>
                        Fast Forwarding to today, I built a number of web
                        <br />
                        applications and major projects. Learned a great deal
                        <br />
                        about teamwork, leadership, and communication. After
                        <br />
                        months of rigorous training, here l am looking for an
                        <br />
                        opportunity as a full stack web developer.
                      </ListItem>
                    </UnorderedList>
                  </Center>
                </WrapItem>
              </Wrap>
            </div>
          </div>
         <Center>
         <GitHubCalendar username="shivamgupta8482" />

         </Center>
        </div>
      ) : (
        <div>
          <div id="work" >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <center>
              <Heading as="h2" size="xl">
                  All <span style={{ color: "red" }}>About</span><br /> Me And My{" "}
                  <span style={{ color: "red" }}>Experience</span>
                </Heading>
              </center>
              <br />

              <Wrap 
             // spacing="150px" 
              justify="center" 
              padding="50px">
              <WrapItem>
                  <Center>
                    <div >
                      <Image
                        borderRadius="50px"
                        
                        src="https://media1.giphy.com/media/ZFiBmGVClrgxt02N9X/giphy.gif"
                        alt="Dan Abramov"
                      />
                     
                    </div>
                  </Center>
                </WrapItem>

                <WrapItem 
               // style={{ marginTop: "-50px" }}
                >
                  <Center>
                    <UnorderedList>
                      <ListItem>
                        Hello! My name is Shivam Gupta and I enjoy creating
                        things
                        <br />
                        that live on the internet.
                      </ListItem>
                      <ListItem>
                        I'm a passionate Developer, with strong administrative
                        and
                        <br />
                        communication skills, good attention to detail and the
                        ability
                        <br />
                        to write efficient code using MERN Stack.
                      </ListItem>
                      <ListItem>
                        My interest in web development started back last year
                        when
                        <br />
                        Iwas trying to edit things on the web, that taught me a
                        lot
                        <br />
                        about HTML& CSS.
                      </ListItem>
                      <ListItem>
                        As Igrow and flourish as a Developer, one thing which
                        keeps
                        <br />
                        me going is my inquisitiveness for discovering new
                        things
                        <br />
                        every day.
                      </ListItem>
                      <ListItem>
                        Fast Forwarding to today, I built a number of web
                        <br />
                        applications and major projects. Learned a great deal
                        <br />
                        about teamwork, leadership, and communication. After
                        <br />
                        months of rigorous training, here l am looking for an
                        <br />
                        opportunity as a full stack web developer.
                      </ListItem>
                    </UnorderedList>
                  </Center>
                </WrapItem>
              </Wrap>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
