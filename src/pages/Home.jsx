import { Box, Container, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, useAnimate, usePresence } from "framer-motion";

const Home = () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  const [introStatus, setIntroStatus] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, {
          opacity: [0, 1],
          color: ["white", "red"],
          duration: 20,
          delay: 20,
        });
      };
      console.log("useEffect");
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, {
          opacity: [1, 0],
          duration: 0.5,
          delay: 0.2,
        });
        safeToRemove();
      };
      exitAnimation();
    }
  });

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
          <Box ref={scope}>
            <Typography sx={{ fontSize: "40px" }}>Hello, world!</Typography>
            <Typography sx={{ fontSize: "40px" }}>i'm alana</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
