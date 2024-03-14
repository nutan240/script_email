import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import Swal from "sweetalert2";

export const BrowserEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const from_name = form.current.from_name.value.trim();
    const from_email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!from_name || !from_email || !message) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill out all fields before sending the email.",
      });
      return;
    }

    emailjs
      .sendForm("service_xxl5y3q", "template_1kaaqtg", form.current, {
        publicKey: "GiMCtc-sRFRCk0PBI",
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Email sent successfully!",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <NavLink
          style={{
            textDecoration: "none",
            fontStyle: "italic",
            fontSize: "30px",
            color: "black",
            width: "200px",
            display: "flex",
            alignItems: "flex-end",
          }}
          to={"/"}
        >
          <Typography
            sx={{
              fontSize: "22px",
              pr: 3,
              ":hover": { color: "darkred" },
              alignItems: "end",
              width: "170px",
            }}
          >
            {" "}
            <ArrowBackIosIcon /> go back{" "}
          </Typography>
        </NavLink>
        <Stack
          direction={"column"}
          sx={{
            width: "99%",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            pt: 20,
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <Stack
              direction={"column"}
              sx={{ background: "white", p: 3, width: "70%", margin: "auto" }}
            >
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    background: "#afc6d0 ",
                    height: "56px",
                    paddingTop: 1,
                    width: "56px",
                  }}
                >
                  <DnsOutlinedIcon
                    sx={{ fontSize: "37px", width: "50px", color: "white" }}
                  />
                </Box>
                <Stack sx={{ width: "100%" }}>
                  <TextField
                    sx={{ pb: 3 }}
                    id="filled-basic"
                    label=" Name"
                    variant="filled"
                    type="text"
                    name="from_name"
                  />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    background: "#afc6d0 ",
                    height: "56px",
                    paddingTop: 1,
                    width: "56px",
                  }}
                >
                  <MailOutlineOutlinedIcon
                    sx={{ fontSize: "37px", width: "50px", color: "white" }}
                  />
                </Box>
                <Stack sx={{ width: "100%" }}>
                  <TextField
                    sx={{ pb: 3 }}
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    type="email"
                    name="from_email"
                  />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    background: "#afc6d0 ",
                    height: "56px",
                    paddingTop: 1,
                    width: "56px",
                  }}
                >
                  <MessageOutlinedIcon
                    sx={{ fontSize: "37px", width: "50px", color: "white" }}
                  />
                </Box>
                <Stack sx={{ width: "100%" }}>
                  <TextField
                    sx={{ pb: 3 }}
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={4}
                    name="message"
                  />
                </Stack>
              </Stack>
              <Button
                sx={{
                  background:
                    "linear-gradient(90.9deg, #e26ab2 0.3%, #afc6d0 87.8%)",
                  color: "black",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                send email
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
};
