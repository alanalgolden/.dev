import { Box, Container, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

const Home = () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const [introStatus, setIntroStatus] = useState(0);
  const [steps, setSteps] = useState(0);

  const introTimer = async () => {
    await delay(500);
    console.log("Delayed 0.5 second.");
    setIntroStatus(+1);
  };

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh", width: "100%" }}
      >
        <Box sx={{ fontSize: "3em" }}>
          {introStatus === 0 ? (
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <Typography className="noI" sx={{ fontSize: "40px" }}>
                Hi.
              </Typography>
            </motion.div>
          ) : (
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography sx={{ fontSize: "40px" }}>H</Typography>

              <Typography
                sx={{
                  fontSize: "40px",
                  animation: "noI 2s forwards",
                }}
              >
                i
              </Typography>

              <Typography sx={{ fontSize: "40px" }}>.</Typography>
            </Box>
          )}

          <Button
            onClick={() => {
              setIntroStatus(0), introTimer();
            }}
          >
            Log
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
