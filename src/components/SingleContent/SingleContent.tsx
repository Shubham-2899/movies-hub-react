import React from "react";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/material";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

type Props = {
  id: number;
  key: number;
  poster: string;
  title: string | null;
  date: string | null;
  media_type: string;
  vote_average: number;
};

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}: Props) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 7 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={media_type}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
