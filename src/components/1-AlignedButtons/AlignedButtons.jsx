import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UserIcon from "@mui/icons-material/AccountCircle"; 

import { useState } from "react";
export default function MyButton() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleButtonClick = () => {
    setIsButtonDisabled(true);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
        disabled={isButtonDisabled}
      >
        Disabled Button
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<UserIcon />}
        onClick={handleButtonClick}
        sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
      >
        User Button
      </Button>
      <Button
        variant="outlined"
        color="error"
        href="https://web.telegram.org/"
        sx={{ paddingY: "0.5rem", paddingX: "2rem" }}
      >
        External Link
      </Button>
    </Stack>
  );
}
