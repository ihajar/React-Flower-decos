import React from "react";

import ReplayIcon from '@material-ui/icons/Replay';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import StarRateIcon from '@material-ui/icons/StarRate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__left">
                <ThumbDownIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__right">
                <ThumbUpIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__add">
                <AddIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;