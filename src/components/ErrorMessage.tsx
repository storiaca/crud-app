import { Container, Typography } from "@mui/material";

type ErrorMessageProps = {
  text: string;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <Container sx={{ pt: "5rem" }}>
      <Typography variant="h4" component="h2" color="secondary" gutterBottom>
        Error Message
      </Typography>
      <Typography variant="subtitle1" color="initial">
        {text}
      </Typography>
    </Container>
  );
}
