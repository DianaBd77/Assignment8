import "./Home.css";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ImgCard = ({ title, description, img, alt }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="card"
      sx={{ maxWidth: 250 }}
      onClick={() => navigate(`/${alt}`)}
    >
      <CardMedia
        className="card-img"
        component="img"
        alt={alt}
        height="100"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default ImgCard;
